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
| vector      | 3           |

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

### HNSW Vector Field Metadata

This metadata format is specifically designed to support efficient vector search using the HNSW (Hierarchical Navigable Small World) algorithm. The encoding captures various parameters and settings relevant for managing the vector index properties and optimizing vector search operations.

```
| namespace | FIELD_META | index name | field name |      | field flag | vector type | dimension | distance metric | initial cap |     m     | ef construction | ef runtime | epsilon | number of levels |
|-----------|------------|------------|------------|  ->  |------------|-------------|-----------|-----------------|-------------|-----------|-----------------|------------|---------|------------------|
| 1+X bytes |  1 byte    | 4+Y bytes  | 4+Z bytes  |  ->  |   1 byte   |   1 byte    |  2 bytes  |     1 byte      |   4 bytes   |  2 bytes  |     4 bytes     |  4 bytes   | 8 bytes |     2 bytes      |
```
#### Required attributes
- **vector type**: Specifies the type of vectors stored (e.g., `FLOAT32`, `FLOAT64`); Now Kvrocks only supports `FLOAT64`. 
- **dimension**: The dimensionality of the vectors (number of elements in each vector).
- **distance metric**: Metric used for distance calculation between vectors (i.e. `L2`, `IP`, `COSINE`).

#### Optional attributes
- **initial cap**: Initial capacity of the HNSW graph, indicating the initial number of elements; Default is 500000. 
- **m**: Maximum number of edges per node in the HNSW graph; Default is 16. 
- **ef construction**: Size of the dynamic candidate list during the index construction phase; Default is 200. 
- **ef runtime**: Size of the dynamic candidate list during the search phase; Default is 10. 
- **epsilon**: Epsilon value for approximate search, controlling the trade-off between search precision and speed; Default is 0.01. 
- **number of levels**: Number of levels in the HNSW graph, affecting the hierarchical structure of the graph.

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

### HNSW Vector field

#### HNSW graph entry types

|  hnsw type   | enum value  |
|--------------|-------------|
|  NODE        | 1           |
|  EDGE        | 2           |

#### HNSW node index encoding

```
| namespace | FIELD   | index name | field name |   level   |    hnsw type   | user key   |      | num of neighbours | vector dimension |      vector data      |
|-----------|---------|------------|------------|-----------|----------------|------------|  ->  |-------------------|------------------|-----------------------|
| 1+X bytes | 1 byte  | 4+Y bytes  | 4+Z bytes  |  2 bytes  |  NODE (1 byte) | 4+B bytes  |  ->  |       2 bytes     |      2 bytes     |  dimension * 8 bytes  |
```

#### HNSW edge index encoding

```
| namespace | FIELD   | index name | field name |   level   |    hnsw type   | user key 1 | user key 2 |      |    null    |
|-----------|---------|------------|------------|-----------|----------------|------------|------------|  ->  |------------|
| 1+X bytes | 1 byte  | 4+Y bytes  | 4+Z bytes  |  2 bytes  |  EDGE (1 byte) | 4+B bytes  | 4+B bytes  |  ->  |   0 byte   |
```

where *user key 1* and *user key 2* represent the endpoints of an edge at a specific level within the HNSW graph.
