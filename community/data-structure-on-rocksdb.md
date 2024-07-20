# Data structures design

Apache Kvrocks™ uses the RocksDB as storage, it's developed by Facebook which is built on LevelDB with many extra features, like column family, transaction and backup, see the RocksDB wiki: [Features Not In LevelDB](https://github.com/facebook/RocksDB/wiki/Features-Not-in-LevelDB). The basic operations in RocksDB are `Put(key, value)`, `Get(key)`, `Delete(key)`, other complex structures aren't supported.

The main goal of this doc is to explain how we build the Redis hash/list/set/zset/bitmap/stream on RocksDB. Most of the design were derived from [Qihoo360/Blackwidow](https://github.com/Qihoo360/blackwidow), but with little modification, like the bitmap design, it's a fascinating part.

## User Key Encoding

Kvrocks prefixes the user key with the `namespace` and `cluster slot`. The namespace helps identify the associated namespace for each user key,
while the cluster slot determines its slot when cluster mode is enabled.

```text
+-------------+-------------+------------------------------+-----------------+------------+-------------+-----------+
|  ns size    |  namespace  |   cluster slot               |  user key size  |  user key  |   version   |  sub key  |
| (1byte: X)  |   (Xbyte)   | (2byte when cluster enabled) |   (4byte: Y)    |   (YByte)  |   (8byte)   |  (ZByte)  |
+-------------+-------------+------------------------------+-----------------+------------+-------------+-----------+
```


## Encoding Version and Data Type

The encoding version (currently `0` or `1`) and data type is encoded in the `flags` field. The data type is encoded from the least significant bit (LSB),
while the encoding version is encoded from the most significant bit (MSB).

```text
+----------------------------------------+
|               flags                    |
+----------------------------------------+
|  (1byte: | version -> <- data type |)  |
+----------------------------------------+
```

For example, the encoding version `0` and the data type String (`1`) is encoded as `0 0 0 0 | 0 0 0 1`,
while the encoding version `1` and the data type Hash (`2`) is encoded as `1 0 0 0 | 0 0 1 0`.
The values encoded for other data types in flags can be found in the table below.

| data type  | enum value |
|------------|------------|
| String     |          1 |
| Hash       |          2 |
| List       |          3 |
| Set        |          4 |
| ZSet       |          5 |
| Bitmap     |          6 |
| SortedInt  |          7 |
| Stream     |          8 |
| BloomFilter|          9 |
| JSON       |         10 |
| Hyperloglog|         11 |

In the encoding version `0`, `expire` is stored in seconds and as a 4byte field (32bit integer), `size` is stored as also a 4byte field (32bit integer);
while in the encoding version `1`, `expire` is stored in milliseconds and as a 8byte field (64bit integer), `size` is stored as also a 8byte field (64bit integer).
In the following text, we will refer to the length of `expire` field as `Ebyte` and the length of `size` field as `Sbyte`, in order to describe different encoding versions consistently.

## String

Redis string is key-value with expire time, so it's very easy to translate the Redis string into RocksDB key-value.

```text
        +----------+------------+--------------------+
key =>  |  flags   |  expire    |       payload      |
        | (1byte)  | (Ebyte)    |       (Nbyte)      |
        +----------+------------+--------------------+
```

We prepend 1-byte `flags` and 4-bytes expire before the user's value:

- `flags` is used to tell the Kvrocks which encoding version and type of this key-value
- `expire` stores the absolute time of key should be expired, zero means the key-value would never expire
- `payload` is the user's raw value

## Hash

Redis hashmap(dict) is like the hashmap in many programming languages, it is used to implement an associative array abstract data type, a structure that can map keys to values. The direct way to implement the hash in RocksDB is serialized the keys/values into one value and store it like the string, but the drawback is performance impact when the keys/values grew bigger. So we split the hash sub keys/values into a single key-value in RocksDB, track it with metadata.

#### hash metadata

```text
        +----------+------------+-----------+-----------+
key =>  |  flags   |  expire    |  version  |  size     |
        | (1byte)  | (Ebyte)    |  (8byte)  | (Sbyte)   |
        +----------+------------+-----------+-----------+
```

The value of key we call it metadata here, it stored the metadata of hash key includes:

- `flags` like the string, the field shows what type this key is
- `expire` is the same as the string type, record the expiration time
- `version` is used to accomplish fast delete when the number of sub keys/values grew bigger
- `size` records the number sub keys/values in this hash key

#### hash sub keys-values

We use extra keys-values to store the hash keys-values, the format is like below:

```text
                     +---------------+
key|version|field => |     value     |
                     +---------------+
```

We prepend the hash `key` and `version` before the hash field, the value of `version` is from the metadata. For example, when the request `hget h1 f1` is received, Kvrocks fetches the metadata by hash key(here is `h1`), then concatenate the hash key, version, field as new key, then fetches the value with the new key.

:::note Why store version in the metadata?

We store the hash keys/values into a single key-value, assume we store millions of sub keys-values in one hash key. If user delete this key, then Kvrocks must iterator millions of sub keys-values and delete them, which would cause performance problem. With version, we can quickly delete the metadata and then recycle the others keys-values in compaction background threads. The cost is those tombstone keys would take some disk storage. You can regard the version as an atomic increment number, but it's combined with a timestamp.

:::


## Set

Redis set can be regarded as a hash, with the value of sub-key always being null, the metadata is the same with the one in hash:

```text
        +----------+------------+-----------+-----------+
key =>  |  flags   |  expire    |  version  |  size     |
        | (1byte)  | (Ebyte)    |  (8byte)  | (Sbyte)   |
        +----------+------------+-----------+-----------+
```

and the sub keys-values in RocksDB would be:

```text
                      +---------------+
key|version|member => |     NULL      |
                      +---------------+
```

## List

#### list metadata

Redis list is also organized by metadata and sub keys-values, and sub key is index instead of the user key. Metadata is like below:

```text
        +----------+------------+-----------+-----------+-----------+-----------+
key =>  |  flags   |  expire    |  version  |  size     |  head     |  tail     |
        | (1byte)  | (Ebyte)    |  (8byte)  | (Sbyte)   | (8byte)   | (8byte)   |
        +----------+------------+-----------+-----------+-----------+-----------+
```

- `head` is the starting position of the list head
- `tail` is the stopping position of the list tail

The meaning of other fields are the same as other types, just add extra head/tail to record the boundary of the list.

#### list sub keys-values

The subkey in list is composed by list key, version and index, index is calculated from metadata's head or tail. For example, when the user requests the `rpush list elem`, Kvrocks would fetch the metadata with list key, then generate the subkey with list key, version and tail, simply increase the tail, then write the metadata and subkey's value back to RocksDB.

```text
                     +---------------+
key|version|index => |     value     |
                     +---------------+
```

## ZSet

Redis zset is set with sorted property, so it's a little different from other types. It must be able to search with the member, as well as to retrieve members with score range.

#### zset metadata

The metadata of zset is still same with set, like below:

```text
        +----------+------------+-----------+-----------+
key =>  |  flags   |  expire    |  version  |  size     |
        | (1byte)  | (Ebyte)    |  (8byte)  | (Sbyte)   |
        +----------+------------+-----------+-----------+
```

#### zset sub keys-values

The value of sub key isn't null, we need a way to range the members with the score. So the zset has two types of sub keys-values, one for mapping the members-scores, and one for score range.

```text
                            +---------------+
key|version|member       => |     score     |   (1)
                            +---------------+

                            +---------------+
key|version|score|member => |     NULL      |   (2)
                            +---------------+
```

If the user wants to get the score of the member or check the member exists or not, it would try the first one.

## Bitmap

Redis bitmap is the most interesting part in Kvrocks design, unlike other types, it's not subkey and the value would be very large if the user treats it as a sparse array. It's apparent that the things would break down if we store the bitmap into a single value, so we should break the bitmap value into multiple fragments. Another behavior of bitmap is writing to arbitrary index, it's very similar to the access model of the Linux virtual memory, so the idea of the bitmap design came from that.

#### bitmap metadata

```text
        +----------+------------+-----------+-----------+
key =>  |  flags   |  expire    |  version  |  size     |
        | (1byte)  | (Ebyte)    |  (8byte)  | (Sbyte)   |
        +----------+------------+-----------+-----------+
```

#### bitmap sub keys-values

We break the bitmap values into fragments(1KiB, 8192 bits/fragment), and subkey is the index of the fragment. For example, when the request to set the bit of 1024 would locate in the first fragment with index 0, to set a bit of 80970 would locate in 10th fragment with index 9.

We use least-significant bit (LSB) numbering (also known as bit-endianness). This means that within a group of 8 bits, we read right-to-left. This is different from applying "bit" commands to string.

```text
                     +---------------+
key|version|index => |    fragment   |
                     +---------------+
```

When the user requests to get it of position P, Kvrocks would first fetch the metadata with bitmap's key and calculate the index of the fragment with bit position, then fetch the bitmap fragment with composed key and find the bit in fragment offset. For example, `getbit bitmap 8193`, the fragment index is `1` (8193/8192) and subkey is `bitmap|1|1024` (when the version is 1, and fragment index is `1`, kvrocks will use `1 * 1024` as the index key), then fetch the subkey from RocksDB and check if the bit of offset `1`(8193%8192) is set or not.

## SortedInt

SortedInt is a set with members being type int and sorted in ascending order:

```text
        +----------+------------+-----------+-----------+
key =>  |  flags   |  expire    |  version  |  size     |
        | (1byte)  | (Ebyte)    |  (8byte)  | (Sbyte)   |
        +----------+------------+-----------+-----------+
```

And the sub keys-values in RocksDB would be:

```text
                  +---------------+
key|version|id => |      NULL     |
                  +---------------+
```

## Stream

Each entry in a stream has its unique ID in the form of `MS-SEQ` where `MS` is the number of milliseconds and `SEQ` is the counter for entries added within the same millisecond. These two values are concatenated with the `-` (minus sign). The entry ID may be generated by the server or explicitly set by the client. A stream metadata tracks the ID of the last added entry.

#### stream metadata

Redis stream is organized by the metadata and sub keys-values. The metadata has fields mentioned before (`flags`, `expiration`, `version`, `size`) and additional fields, that are specific only for this data type. The structure of the metadata value is the following:

- `flags` (1 byte)
- `expiration` (Ebytes)
- `version` (8 bytes)
- `size` (Sbytes)
- `LGE ID MS` (8 bytes) stores the `MS` value of the last generated entry ID
- `LGE ID SEQ` (8 bytes) stores the `SEQ` value of the last generated entry ID
- `RFE ID MS` (8 bytes) stores the `MS` value of the very first entry ID that was added to the stream
- `RFE ID SEQ` (8 bytes) stores the `SEQ` value of the very first entry ID that was added to the stream
- `MDE ID MS` (8 bytes) stores the `MS` value of the max deleted entry ID
- `MDE ID SEQ` (8 bytes) stores the `SEQ` value of the max deleted entry ID
- `FE ID MS` (8 bytes) stores the `MS` value of the current first entry ID
- `FE ID SEQ` (8 bytes) stores the `SEQ` value of the current first entry ID
- `LE ID MS` (8 bytes) stores the `MS` value of the current last entry ID
- `LE ID SEQ` (8 bytes) stores the `SEQ` value of the current last entry ID
- `TNE` (8 bytes) stores the total number of entries that were added to the stream during its lifetime

#### stream sub keys-values

The sub-key in a stream is composed by the stream key, version and the entry ID. The entry ID is encoded as two consecutive 8-bytes integer values (`EID MS` and `EID SEQ`). The stream entry value may represent any even number of strings. This value is encoded as a sequence of strings and each string value is prepended by its length as a 4-bytes variable integer.

```text
                              +-----------------------+
key|version|EID MS|EID SEQ => |     encoded value     |
                              +-----------------------+
```

## Bloom Filter

Redis Bloom filter is a space-efficient probabilistic data structure used to test whether an element is a member of a set. It's implemented as [a Redis module](https://redis.io/docs/data-types/probabilistic/bloom-filter/), which means it can be used to efficiently perform set membership tests.

The underlying structure of a Bloom filter is a bit array, which is a fixed-size array of bits, typically implemented as a contiguous block of memory and storage. We choose "split block bloom filter", as described in section 2.1 of [Network Applications of Bloom Filters: A Survey](https://www.eecs.harvard.edu/~michaelm/postscripts/im2005b.pdf). In a split block bloom filter, the bit array is divided into fixed-size blocks, and each block is treated as an independent Bloom filter. This approach allows for more efficient memory usage, especially when dealing with relatively large Bloom filters. The split block bloom filter is utilized in various systems such as RocksDB, Parquet, and Impala. For further details, please refer to the [BloomFilter.md](https://github.com/apache/parquet-format/blob/master/BloomFilter.md) document.

We also enable users to scale the Bloom filter without needing to know the specific number of elements. As the number of elements in a Bloom filter grows, the probability of false positives also increases. To address this, one approach is to utilize a layered Bloom filter, also known as a cascading Bloom filter. In a layered Bloom filter, multiple independent Bloom filters are used in a cascading fashion. When checking for membership, the element is first checked against the first (top) filter. If it is not found, it is then checked against the second filter, and so on. This approach allows for a more controlled false positive rate, as each layer can be tuned to a different false positive probability. Additionally, when a layer becomes full, a new layer can be added, allowing the Bloom filter to dynamically adapt to changes in the number of elements. This layered structure effectively maintains the efficiency and effectiveness of the Bloom filter as the number of elements grows.

#### Bloom Filter metadata

```text
              +---------+---------+---------+---------+-----------------------+-----------+---------------+------------+-------------+
              | flags   | expire  | version |  size   | number of sub-filters | expansion | base_capacity | error_rate | bloom_bytes |
 key =>       +---------+---------+---------+---------+-----------------------+-----------+---------------+------------+-------------+
              | (1byte) | (Ebyte) | (8byte) | (Sbyte) | (2byte)               | (2byte)   | (4byte)       | (8byte)    | (4byte)     |
              +---------+---------+---------+---------+-----------------------+-----------+---------------+------------+-------------+
```

#### Bloom Filter sub keys-values

We break the bitmap values into fragments(each fragment is a split block bloom filter with size `base_capacity * (expansion ^ index)`), and subkey is the index of the fragment.

```text
             +---------------+
key|index => |    filter     |
             +---------------+
```

## JSON

Kvrocks supports the JSON data type just like [RedisJSON](https://redis.io/docs/data-types/json/), which implements various data operations on [ECMA-404 The JSON Data Interchange Standard](https://ecma-international.org/publications-and-standards/standards/ecma-404/).

The current underlying encoding of JSON data type is relatively simple and similar to String:

```
        +----------+------------+-----------+--------------------+
key =>  |  flags   |  expire    |  format   |       payload      |
        | (1byte)  | (Ebyte)    |  (1byte)  |       (Nbyte)      |
        +----------+------------+-----------+--------------------+
```

where the `payload` is a string encoded in the corresponding `format`:

| format     | enum value |
|------------|------------|
| JSON       |          0 |
| CBOR       |          1 |

Also, if we decide to add a more IO-friendly format to avoid reading all payload to the memory before searching an element via JSONPath or seperate a relatively large JSON to multiple key-values, we can take advantage of the `format` field.

## HyperLogLog

Redis HyperLogLog is a probabilistic data structure that estimates the cardinality of a set. The idea comes from [original paper](http://algo.inria.fr/flajolet/Publications/FlFuGaMe07.pdf) and [paper from Google](http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/40671.pdf).  It is particularly useful for applications that require the estimation of unique elements in massive datasets, such as network traffic analysis, data warehousing, and large-scale databases.

The principle behind HyperLogLog is based on the idea that the number of leading zeros in the binary representation of a hash value can be used to infer the size of the set. It includes:
1. Hashing: Each element in the dataset is passed through a hash function, which produces a fixed-size binary string.
2. Register Array: The algorithm maintains an array of registers, each corresponding to a subset of the hash space. The size of the array is 2^p, where p is a precision parameter that determines the trade-off between accuracy and memory usage.  The HyperLogLog algorithm uses a subset of the hash value to determine the index in the register array. Specifically, it takes the first p bits of the hash value.

For the remaining bits of the hash value (after the first p bits), the algorithm counts the number of leading zeros. Each entry in the array keeps track of the maximum observed for all elements that hash to the same index. If the newly encountered value is greater than the current value in the register, it updates the register with this new value.

Redis HyperLogLog can be thought of as a static array with a length of 16384. The array elements are called registers, which are used to store the maximum count of consecutive 0s. This register array is the input parameter for the HyperLogLog algorithm. The Redis HyperLogLog implementation uses up to 12 KB and provides a standard error of 0.81%.

In Kvrocks, the hyperloglog data structure is stored in following two parts:
 
#### HyperLogLog metadata

```text
        +----------+------------+-----------+--------------+
key =>  |  flags   |  expire    |  version  |  HLLType     |
        | (1byte)  | (Ebyte)    |  (8byte)  | (1byte)      |
        +----------+------------+-----------+--------------+
```

HLLType = 0 means a "dense" representation with Redis-like modified MurmurHash2 and 16384 registers with 6bit LSB numbers,
the values is stored like Bitmap but has smaller segment(768 bytes per segment).

#### hyperloglog sub keys-values

```text
                     +---------------+
key|version|index => |    fragment   |
                     +---------------+
```

The register index is calculated using the first 14 bits of the user element's hash value (64 bits), which is why the register array length is 16384.
The length of consecutive zeros is calculated using the last 50 digits of the hash value of the user key.

Inspired by the bitmap implementation, HyperLogLog divides the register array into 16 segments, each with 1024 registers.
