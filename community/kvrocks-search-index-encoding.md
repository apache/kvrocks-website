# Index encoding format for Kvrocks Search

Different from [the encoding method of other data structures](https://kvrocks.apache.org/community/data-structure-on-rocksdb) in Kvrocks (e.g. String, Hash, ZSet ...), 
Apache Kvrocks™ Search (a.k.a. Kvrocks Search) uses an independent column family (named `search`) 
and a separately designed encoding format to store indexing-related metadata and data.

WARNING: Kvrocks Search is currently in development and has not been officially released, 
so its encoding format may undergo breaking changes.

## Common encoding

### Key types

| key type    | enum value  |
|-------------|-------------|
| INDEX_META  | 0           |
| PREFIXES    | 1           |
| FIELD_META  | 2           |
| FIELD       | 3           |
| FIELD_ALIAS | 4           |

The common encoding format of key is as follows:
```
+-------------+-------------+-------------+----------------+-------------+-------------------+
|  ns size    |  namespace  |  key type   |  idx name size |  index name |  other fields...  |
| (1byte: X)  |   (Xbyte)   |  (1byte)    |   (4bytes: Y)  |  (Y bytes)  |   (variable)      |
+-------------+-------------+-------------+----------------+-------------+-------------------+
```

### Field types and flags

| field type  | enum value  |
|-------------|-------------|
| tag         | 1           |
| numeric     | 2           |

The common encoding format of a *field flag* is:

```
|              8 bit                                 |
|----------------------------------------------------|
|  noindex: 1bit | field type: 4bit | reserved: 3bit |
```

## Metadata encoding

In Kvrocks Search, metadata refers to the metadata of an index (also known as a schema),
including some properties of the index, which fields are included in this index, 
what type each field is, and what properties they have.

### Index metadata

```
| namespace | INDEX_META | index name |      | index flag | on data type  |
|-----------|------------|------------|  ->  |------------|---------------|
| 1+X bytes |  1 byte    | 4+Y bytes  |  ->  |   1 byte   |    1 byte     |
```

where *index flag* is currently 8-bit all reserved (equals to `0`), and *on data type* is one of:

| on data type | enum value  |
|--------------|-------------|
| HASH         | 2           |
| JSON         | 10          |

### Index prefixes

```
| namespace | PREFIXES   | index name |      | prefix strings... |
|-----------|------------|------------|  ->  |-------------------|
| 1+X bytes |  1 byte    | 4+Y bytes  |  ->  |  (4+Zi)*N bytes   |
```

Index prefixes are used to determine which keys belong to the tracking scope of this index.
It consists of an array of strings, where each string is a key prefix.

### Tag field metadata

```
| namespace | FIELD_META | index name | field name |      | field flag | separator  | case sensitive |
|-----------|------------|------------|------------|  ->  |------------|------------|----------------|
| 1+X bytes |  1 byte    | 4+Y bytes  | 4+Z bytes  |  ->  |   1 byte   |  1 byte    |     1 byte     |
```

where *separator* currently can only be an ASCII character, and case sensitive can be `0` (false) or `1` (true).

### Numeric field metadata

```
| namespace | FIELD_META | index name | field name |      | field flag |
|-----------|------------|------------|------------|  ->  |------------|
| 1+X bytes |  1 byte    | 4+Y bytes  | 4+Z bytes  |  ->  |   1 byte   |
```

## Index data encoding

Index data refers to the information stored after indexing the real data,
which is used to quickly get corresponding data in subsequent query processes.

### Tag field

```
| namespace | FIELD   | index name | field name | tag value  | user key   |      |    null    |
|-----------|---------|------------|------------|------------|------------|  ->  |------------|
| 1+X bytes | 1 byte  | 4+Y bytes  | 4+Z bytes  | 4+A bytes  | 4+B bytes  |  ->  |   0 byte   |
```

### Numeric field

```
| namespace | FIELD   | index name | field name | floating number | user key   |      |    null    |
|-----------|---------|------------|------------|-----------------|------------|  ->  |------------|
| 1+X bytes | 1 byte  | 4+Y bytes  | 4+Z bytes  |    8 bytes      | 4+B bytes  |  ->  |   0 byte   |
```
