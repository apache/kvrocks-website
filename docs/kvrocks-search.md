# Search

**Apache Kvrocks™** Search, also known as **Kvrocks Search** (or KQIR, as a technical term), is an internal component of Apache Kvrocks™. It functions as a query engine that supports (secondary) indexing on structured data and complex queries by effectively utilizing various indexes.

In addition to being compatible with many commands and the query syntax of [RediSearch](https://redis.io/docs/latest/develop/interact/search-and-query/) (e.g. [FT.CREATE](#ftcreate) and [FT.SEARCH](#ftsearch)), Kvrocks Search also offers support for SQL syntax to accommodate various scenarios (via [FT.SEARCHSQL](#ftsearchsql-extension) and other related commands).

Kvrocks Search is released since version 2.11.0, and currently still quite experimental. If you encounter any problems, please submit them to [GitHub issues](https://github.com/apache/kvrocks/issues).

For its implementation details, please refer to [this blog post](/blog/kqir-query-engine).

## Supported Commands

Currently, Kvrocks has supported some of the main commands in RediSearch, these commands are mostly used for creating indexes, managing indexes (listing, showing details, deleting), and querying.

### FT.SEARCH

```
FT.SEARCH index query 
  [RETURN count identifier [ identifier ...]] 
  [SORTBY sortby [ ASC | DESC]] 
  [LIMIT offset num] 
  [PARAMS nargs name value [ name value ...]] 
```

`FT.SEARCH` is to perform a `query` (in RediSearch query syntax) on a given `index` (created by `FT.CREATE`).

Additional parameters:
- `RETURN` to control which fields will be presented in the output;
- `SORTBY` to control the order of rows in the output (same as `ORDER BY` in SQL);
- `LIMIT` to control how many rows and the offset of actual results in the output;
- `PARAMS` to supply additional information to the parameterized query.

Please refer to [here](#redisearch-query-syntax) to check available syntax of `query`.

### FT.EXPLAIN

```
FT.EXPLAIN index query 
  [RETURN count identifier [ identifier ...]] 
  [SORTBY sortby [ ASC | DESC]] 
  [LIMIT offset num] 
  [PARAMS nargs name value [ name value ...]] 
```

`FT.EXPLAIN` is to obtain a plan on how Kvrocks will execute the `query` (a.k.a. the query plan).

### FT.CREATE

```
FT.CREATE index 
  [ON HASH | JSON] 
  [PREFIX count prefix [prefix ...]] 
  SCHEMA field_name TAG | NUMERIC | VECTOR [FIELD PROPERTIES ...] [NOINDEX]
       [ field_name TAG | NUMERIC | VECTOR [FIELD PROPERTIES ...] [NOINDEX]
         ...]
```

`FT.CREATE` is to create a new `index` with a given schema.

Addtional parameters:
- `ON HASH | JSON`: the data type of keys to be indexed;
- `PREFIX`: the prefix of keys to be indexed.

Schema details:
- `field_name`: name of the field, multiple of which an index is composed of;
- `TAG | NUMERIC | VECTOR`: currently only these 3 types of fields is supported;
- `FIELD PROPERTIES`: additional properties of this field; depends on the field type;
- `NOINDEX`: do not indexing data on this field (just for filtering data on queries).

### FT.DROPINDEX

```
FT.DROPINDEX index
```

`FT.DROPINDEX` is to drop the given `index` to delete all indexing data and index information.

### FT._LIST

```
FT._LIST
```

`FT._LIST` is to list names of all indexes (in the current namespace).

### FT.INFO

```
FT.INFO index
```

`FT.INFO` is to obtain detailed information of the given `index`.

The output format of this command is like:

```
1) index_name
2) ...
3) index_definition
4) 1) key_type
   2) ...
   3) prefixes
   4) 1) ...
      2) ...
5) fields
6) 1) 1) identifier
      2) ...
      3) type
      4) "tag"
      5) properties
      6) 1) ...
         2) ...
   2) 1) identifier
      2) ...
      3) type
      4) "numeric"
      5) properties
      6) 1) ...
         2) ...
   3) ...
```

### FT.SEARCHSQL (extension)

```
FT.SEARCHSQL sql
  [PARAMS nargs name value [ name value ...]] 
```

`FT.SEARCHSQL` is to perform a `sql` query on an index created by `FT.CREATE`.

Additional parameters:
- `PARAMS` to supply additional information to the parameterized query.

### FT.EXPLAINSQL (extension)

```
FT.EXPLAINSQL sql
  [PARAMS nargs name value [ name value ...]] 
  [SIMPLE | DOT | DEBUG]
```

`FT.EXPLAINSQL` is to obtain a plan on how Kvrocks will execute the `sql` query (a.k.a. the query plan).

Additional parameters:
- `PARAMS`: same as in `FT.SEARCHSQL`;
- `SIMPLE`: print a simple representation of the query plan;
- `DOT`: print the query plan in Graphviz [DOT](https://en.wikipedia.org/wiki/DOT_(graph_description_language)) format (which can be used to generate a graphical representation of a directed graph);
- `DEBUG`: print the (syntax or plan) IR in simple representation after each transformation pass, similiar to `-print-after-all` in LLVM.

## SQL syntax

Currently Kvrocks supports an extended subset of the MySQL query syntax, in particular the `SELECT` statement:

```
SELECT
  * | field [, field ...]
FROM index_name
WHERE query_expr
ORDER BY
  field_name [ASC | DESC] | vec_field <-> vec < range
LIMIT [offset] count
```

where the query expression `query_expr` can be:

```
true | false              |
(query_expr)              |
query_expr AND query_expr |
query_expr OR query_expr  |
NOT query_expr            |
tag_field HASTAG tag      |
num_atom NUM_OP num_atom  |
vec_field <-> vec < range
```

where the numeric operation `NUM_OP` can be:

```
< | <= | > | >= | !=
```

and the `num_atom` can be:

```
num_field | num_literal
```

Also, these literals inside the query in can be parameters `@param_name`, 
e.g. `a < 233` can be `a < @num` with `PARAMS 1 num 233` supplied to the `FT.SEARCHSQL`.

## RediSearch query syntax

Currently Kvrocks also supports a subset of [the RediSearch query syntax](https://redis.io/docs/latest/develop/interact/search-and-query/advanced-concepts/query_syntax/).

RediSearch controls the evolution of the query syntax through [dialect versioning](https://redis.io/docs/latest/develop/interact/search-and-query/advanced-concepts/dialects/).
Currently, Kvrocks supports `DIALECT 2`.
And in future developments, we may support higher versions of dialect (currently, 3 and 4), but `DIALECT 1` is NOT considered for support.

The followings are the query clauses currently supported in Kvrocks, and you can compose them via `clause | clause` (OR), `clause clause` (AND) and `-clause` (NOT):
- `*`, i.e. `true` in SQL;
- `@num_field:[NUM_BOUND NUM_BOUND]`, e.g. `@a:[1 (3]` means `a >= 1 and a < 3`;
- `@tag_field:{tag [|tag ...]}`, e.g. `@b:{x | y}` means `b hastag x or b hastag y`;
- `@vec_field:[VECTOR_RANGE range $vec]` for vector range query.

where `NUM_BOUND` can be:
```
  num   
| (num
| INF
| +INF
| -INF
```

Also KNN query without prefiltering is supported:
```
* => [KNN n @vec_field $vec]
```

Also, these literals inside the query in can be parameters `$param_name`, 
e.g. `@a:[inf 233]` can be `@a:[inf $num]` with `PARAMS 1 num 233` supplied to the `FT.SEARCH`.

## Field types

An index in RediSearch consists of multiple fields, and fields can be in different types.
Currently, Kvrocks supports three field types:
- `TAG`: a tag field can hold a set of string tags, to filter rows by specific tags in queries;
- `NUMERIC`: a numeric field can hold a floating point number;
- `VECTOR`: a vector field can hold a vector, for performing vector search.

### Tag

Field properties:
```
SCHEMA field_name TAG
  [SEPARATOR sep]
  [CASESENSITIVE]
```

By default, the `SEPARATOR` is `,` and `CASESENSITIVE` is not set.

The only operation for tag field in queries is to check if a row is labeled by tag, i.e. `tag_field HASTAG tag` in SQL.

### Numeric

Numeric field has no field properties, i.e.
```
SCHEMA field_name NUMERIC
```

As shown in the query syntax, numeric fields can be used in numeric comparison to filter data.

### Vector

Field properties:
```
SCHEMA field_name VECTOR HNSW nargs
  TYPE FLOAT64
  DIM dim
  DISTANCE_METRIC L2 | IP | COSINE
  [M m]
  [EF_CONSTRUCTION ef_construcion]
  [EF_RUNTIME ef_runtime]
  [EPSILON epsilon]
```

Currently the indexing algorithm of vector field can only be `HNSW`, 
and the `TYPE` of HNSW vector field can only be `FLOAT64`.
We may extend it to more types like `FLOAT32` and `FLOAT16`.
