# Kvrocks data structures design

Kvrocks uses the RocksDB as storage, it's developed by Facebook which is built on LevelDB with many extra features, like column family, transaction and backup, see the RocksDB wiki: [Features Not In LevelDB](https://github.com/facebook/RocksDB/wiki/Features-Not-in-LevelDB). The basic operations in RocksDB are `Put(key, value)`, `Get(key)`, `Delete(key)`, other complex structures aren't supported.

The main goal of this doc is to explain how we build the Redis hash/list/set/zset/bitmap/stream on RocksDB. Most of the design were derived from [Qihoo360/Blackwidow](https://github.com/Qihoo360/blackwidow), but with little modification, like the bitmap design, it's a fascinating part.

## String

Redis string is key-value with expire time, so it's very easy to translate the Redis string into RocksDB key-value.

```text
        +----------+------------+--------------------+
key =>  |  flags   |  expire    |       payload      |
        | (1byte)  | (4byte)    |       (Nbyte)      |
        +----------+------------+--------------------+
```

We prepend 1-byte `flags` and 4-bytes expire before the user's value:

- `flags` is used to tell the Kvrocks which type of this key-value, maybe `string`/`hash`/`list`/`zset`/`bitmap`/`stream`
- `expire` stores the absolute time of key should be expired, zero means the key-value would never expire
- `payload` is the user's raw value

## Hash

Redis hashmap(dict) is like the hashmap in many programming languages, it is used to implement an associative array abstract data type, a structure that can map keys to values. The direct way to implement the hash in RocksDB is serialized the keys/values into one value and store it like the string, but the drawback is performance impact when the keys/values grew bigger. so we split the hash sub keys/values into a single key-value in RocksDB, track it with metadata.

#### hash metadata

```text
        +----------+------------+-----------+-----------+
key =>  |  flags   |  expire    |  version  |  size     |
        | (1byte)  | (4byte)    |  (8byte)  | (4byte)   |
        +----------+------------+-----------+-----------+
```

The value of key we call it metadata here, it stored the metadata of hash key includes:

- `flags` like the string, the field shows what type this key is
- `expire ` is the same as the string type, record the expiration time
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

We store the hash keys/values into a single key-value, if the store millions of sub keys-values in one hash key. If user delete this key, the Kvrocks must iterator millions of sub keys-values and delete them, which would cause performance problem. With version, we can quickly delete the metadata and then recycle the others keys-values in compaction background threads. The cost is those tombstone keys would take some disk storage. You can regard the version as an atomic increment number, but it's combined with a timestamp.

:::

:::note What can we do if the user key is conflicted with the composed key?

We store the metadata key and composed key in different column families, so it wouldn't happen.

:::

## Set

Redis set can be regarded as a hash, with the value of sub-key always being null, the metadata is the same with the one in hash:

```text
        +----------+------------+-----------+-----------+
key =>  |  flags   |  expire    |  version  |  size     |
        | (1byte)  | (4byte)    |  (8byte)  | (4byte)   |
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
        | (1byte)  | (4byte)    |  (8byte)  | (4byte)   | (8byte)   | (8byte)   |
        +----------+------------+-----------+-----------+-----------+-----------+
```

- `head` is the starting position of the list head
- `tail` is the stopping position of the list tail

The meaning of other fields are the same as other types, just add extra head/tail to record the boundary of the list.

#### list sub keys-values

The subkey in list is composed by list key, version and index, index is calculated from metadata's head or tail. for example, when the user requests the `rpush list elem`, Kvrocks would fetch the metadata with list key, then generate the subkey with list key, version and tail, simply increase the tail, then write the metadata and subkey's value back to RocksDB.

```text
                     +---------------+
key|version|index => |     value     |
                     +---------------+
```

## ZSet

Redis zset is set with sorted property, so it's a little different from other types. it must be able to search with the member, as well as to retrieve members with score range.

#### zset metadata

The metadata of zset is still same with set, like below:

```text
        +----------+------------+-----------+-----------+
key =>  |  flags   |  expire    |  version  |  size     |
        | (1byte)  | (4byte)    |  (8byte)  | (4byte)   |
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
        | (1byte)  | (4byte)    |  (8byte)  | (4byte)   |
        +----------+------------+-----------+-----------+
```

#### bitmap sub keys-values

We break the bitmap values into fragments(1KiB, 8192 bits/fragment), and subkey is the index of the fragment. for example, when the request to set the bit of 1024 would locate in the first fragment with index 0, to set a bit of 80970 would locate in 10th fragment with index 9.

```text
                     +---------------+
key|version|index => |    fragment   |
                     +---------------+
```

when the user requests to get it of position P, Kvrocks would first fetch the metadata with bitmap's key and calculate the index of the fragment with bit position, then fetch the bitmap fragment with composed key and find the bit in fragment offset. For example, `getbit bitmap 8193`, the fragment index is `1` (8193/8192) and subkey is `bitmap|1|1` (when the version is 1), then fetch the subkey from RocksDB and check if the bit of offset `1`(8193%8192) is set or not.

## SortedInt

SortedInt is a set with members being type int and sorted in ascending order:

```text
        +----------+------------+-----------+-----------+
key =>  |  flags   |  expire    |  version  |  size     |
        | (1byte)  | (4byte)    |  (8byte)  | (4byte)   |
        +----------+------------+-----------+-----------+
```

and the sub keys-values in RocksDB would be:

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
- `expiration` (4 bytes)
- `version` (8 bytes)
- `size` (4 bytes)
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

the sub-key in a stream is composed by the stream key, version and the entry ID. The entry ID is encoded as two consecutive 8-bytes integer values (`EID MS` and `EID SEQ`). The stream entry value may represent any even number of strings. This value is encoded as a sequence of strings and each string value is prepended by its length as a 4-bytes variable integer.

```text
                              +-----------------------+
key|version|EID MS|EID SEQ => |     encoded value     |
                              +-----------------------+
```
