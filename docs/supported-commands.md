# Supported commands

## String commands

| Command     | Supported OR Not | Since Version | Desc                                                                                                         |
| ----------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| APPEND      | √                | v1.0.0        |                                                                                                              |
| DECR        | √                | v1.0.0        |                                                                                                              |
| DECRBY      | √                | v1.0.0        |                                                                                                              |
| GET         | √                | v1.0.0        |                                                                                                              |
| GETEX       | √                | v2.2.0        |                                                                                                              |
| GETRANGE    | √                | v1.0.0        |                                                                                                              |
| SUBSTR      | √                | v2.4.0        |                                                                                                              |
| GETSET      | √                | v1.0.0        |                                                                                                              |
| INCR        | √                | v1.0.0        |                                                                                                              |
| INCRBY      | √                | v1.0.0        |                                                                                                              |
| INCRBYFLOAT | √                | v1.0.0        |                                                                                                              |
| MGET        | √                | v1.0.0        |                                                                                                              |
| MSET        | √                | v1.0.0        |                                                                                                              |
| MSETNX      | √                | v1.3.0        |                                                                                                              |
| PSETEX      | √                | v1.3.0        | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033)) |
| SET         | √                | v1.0.0        | supported `KEEPTTL` and `GET` options since v2.8.0                                                           |
| SETEX       | √                | v1.0.0        |                                                                                                              |
| SETNX       | √                | v1.0.0        |                                                                                                              |
| SETRANGE    | √                | v1.0.0        |                                                                                                              |
| STRLEN      | √                | v1.0.0        |                                                                                                              |
| CAS         | √                | v2.0.5        | see [#415](https://github.com/apache/kvrocks/pull/415)                                                       |
| CAD         | √                | v2.0.5        | see [#415](https://github.com/apache/kvrocks/pull/415)                                                       |
| GETDEL      | √                | v2.2.0        |                                                                                                              |
| LCS         | √                | unstable      |                                                                                                              |

## Hash commands

| Command      | Supported OR Not | Since Version | Desc |
| ------------ | ---------------- | ------------- | ---- |
| HDEL         | √                | v1.0.0        |      |
| HEXISTS      | √                | v1.0.0        |      |
| HGET         | √                | v1.0.0        |      |
| HGETALL      | √                | v1.0.0        |      |
| HINCRBY      | √                | v1.0.0        |      |
| HINCRBYFLOAT | √                | v1.0.0        |      |
| HKEYS        | √                | v1.0.0        |      |
| HLEN         | √                | v1.0.0        |      |
| HMGET        | √                | v1.0.0        |      |
| HMSET        | √                | v1.0.0        |      |
| HRANGEBYLEX  | √                | v2.3.0        |      |
| HSET         | √                | v1.0.0        |      |
| HSETNX       | √                | v1.0.0        |      |
| HSTRLEN      | √                | v1.0.0        |      |
| HVALS        | √                | v1.0.0        |      |
| HSCAN        | √                | v1.0.0        |      |
| HRANDFIELD   | √                | v2.6.0        |      |

## List commands

| Command    | Supported OR Not | Since Version | Desc                                                      |
| ---------- | ---------------- | ------------- | --------------------------------------------------------- |
| BLPOP      | √                | v1.0.0        |                                                           |
| BRPOP      | √                | v1.0.0        |                                                           |
| BRPOPLPUSH | X                | -             | deprecated                                                |
| LINDEX     | √                | v1.0.0        | `O(N)` operation, do not use it when the list is too long |
| LINSERT    | √                | v1.0.0        | `O(N)` operation, do not use it when the list is too long |
| LLEN       | √                | v1.0.0        |                                                           |
| LPOP       | √                | v1.0.0        |                                                           |
| LPUSH      | √                | v1.0.0        |                                                           |
| LPUSHX     | √                | v1.0.0        |                                                           |
| LRANGE     | √                | v1.0.0        |                                                           |
| LREM       | √                | v1.0.0        | `O(N)` operation, do not use it when the list is too long |
| LSET       | √                | v1.0.0        |                                                           |
| LTRIM      | √                | v1.0.0        | `O(N)` operation, do not use it when the list is too long |
| RPOP       | √                | v1.0.0        |                                                           |
| RPOPLPUSH  | √                | v1.0.0        |                                                           |
| RPUSH      | √                | v1.0.0        |                                                           |
| RPUSHX     | √                | v1.0.0        |                                                           |
| LMOVE      | √                | v2.1.0        |                                                           |
| BLMOVE     | √                | v2.6.0        |                                                           |
| LPOS       | √                | v2.6.0        |                                                           |
| LMPOP      | √                | v2.6.0        |                                                           |
| BLMPOP     | √                | v2.7.0        |                                                           |

## Set commands

| Command     | Supported OR Not | Since Version | Desc                                  |
| ----------- | ---------------- | ------------- | ------------------------------------- |
| SADD        | √                | v1.0.0        |                                       |
| SCARD       | √                | v1.0.0        |                                       |
| SDIFF       | √                | v1.0.0        |                                       |
| SDIFFSTORE  | √                | v1.0.0        |                                       |
| SINTER      | √                | v1.0.0        |                                       |
| SINTERCARD  | √                | v2.5.0        |                                       |
| SINTERSTORE | √                | v1.0.0        |                                       |
| SISMEMBER   | √                | v1.0.0        |                                       |
| SMEMBERS    | √                | v1.0.0        |                                       |
| SMOVE       | √                | v1.0.0        |                                       |
| SPOP        | √                | v1.0.0        | pop members in the order of keys      |
| SRANDMEMBER | √                | v1.0.0        | always first N members if not changed |
| SREM        | √                | v1.0.0        |                                       |
| SUNION      | √                | v1.0.0        |                                       |
| SUNIONSTORE | √                | v1.0.0        |                                       |
| SSCAN       | √                | v1.0.0        |                                       |

## ZSet commands

| Command          | Supported OR Not | Since Version | Desc         |
| ---------------- | ---------------- | ------------- | ------------ |
| BZMPOP           | √                | v2.5.0        |              |
| BZPOPMIN         | √                | v2.5.0        |              |
| BZPOPMAX         | √                | v2.5.0        |              |
| ZADD             | √                | v1.0.0        |              |
| ZCARD            | √                | v1.0.0        |              |
| ZCOUNT           | √                | v1.0.0        |              |
| ZINCRBY          | √                | v1.0.0        |              |
| ZINTERSTORE      | √                | v1.0.0        |              |
| ZLEXCOUNT        | √                | v1.0.0        |              |
| ZMPOP            | √                | v2.5.0        |              |
| ZMSCORE          | √                | v1.1.20       | multi ZSCORE |
| ZPOPMIN          | √                | v1.0.0        |              |
| ZPOPMAX          | √                | v1.0.0        |              |
| ZRANGESTORE      | √                | v2.5.0        |              |
| ZRANGE           | √                | v1.0.0        |              |
| ZRANGEBYLEX      | √                | v1.0.0        |              |
| ZRANGEBYSCORE    | √                | v1.0.0        |              |
| ZRANK            | √                | v1.0.0        |              |
| ZREM             | √                | v1.0.0        |              |
| ZREMRANGEBYLEX   | √                | v1.0.0        |              |
| ZREMRANGEBYRANK  | √                | v1.0.0        |              |
| ZREMRANGEBYSCORE | √                | v1.0.0        |              |
| ZREVRANK         | √                | v1.0.0        |              |
| ZREVRANGE        | √                | v1.0.0        |              |
| ZREVRANGEBYLEX   | √                | v2.0.5        |              |
| ZREVRANGEBYSCORE | √                | v1.0.0        |              |
| ZSCAN            | √                | v1.0.0        |              |
| ZSCORE           | √                | v1.0.0        |              |
| ZUNION           | √                | v2.5.0        |              |
| ZUNIONSTORE      | √                | v1.0.0        |              |
| ZINTER           | √                | v2.8.0        |              |
| ZINTERCARD       | √                | v2.8.0        |              |
| ZRANDMEMBER      | √                | v2.8.0        |              |

## Key commands

| Command     | Supported OR Not | Since Version | Desc                                                                                                         |
| ----------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| DEL         | √                | v1.0.0        |                                                                                                              |
| DUMP        | √                | unstable      |                                                                                                              |
| EXISTS      | √                | v1.0.0        |                                                                                                              |
| EXPIRE      | √                | v1.0.0        |                                                                                                              |
| EXPIREAT    | √                | v1.0.0        |                                                                                                              |
| EXPIRETIME  | √                | v2.8.0        |                                                                                                              |
| PEXPIRETIME | √                | v2.8.0        |                                                                                                              |
| KEYS        | √                | v1.0.0        |                                                                                                              |
| PERSIST     | √                | v1.0.0        |                                                                                                              |
| PEXPIRE     | √                | v1.0.0        | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033)) |
| PEXPIREAT   | √                | v1.0.0        | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033)) |
| PTTL        | √                | v1.0.0        | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033)) |
| TTL         | √                | v1.0.0        |                                                                                                              |
| TYPE        | √                | v1.0.0        |                                                                                                              |
| SCAN        | √                | v1.0.0        |                                                                                                              |
| RENAME      | √                | v2.8.0        |                                                                                                              |
| RENAMENX    | √                | v2.8.0        |                                                                                                              |
| RANDOMKEY   | √                | v1.0.0        |                                                                                                              |
| UNLINK      | √                | v2.1.0        |                                                                                                              |
| MOVE        | √                | v2.6.0        | if the key does not exist, the command returns 0, otherwise it will always return 1                          |
| MOVEX       | √                | unstable      | move a key between namespaces, see [#2225](https://github.com/apache/kvrocks/pull/2225)                      |
| COPY        | √                | unstable      |                                                                                                              |
| SORT        | √                | unstable      |                                                                                                              |

## Bit commands

| Command     | Supported OR Not | Since Version | Desc |
| ----------- | ---------------- | ------------- | ---- |
| GETBIT      | √                | v1.0.0        |      |
| SETBIT      | √                | v1.0.0        |      |
| BITCOUNT    | √                | v1.0.0        |      |
| BITPOS      | √                | v1.0.0        |      |
| BITFIELD    | √                | v2.7.0        |      |
| BITFIELD_RO | √                | v2.8.0        |      |
| BITOP       | √                | v2.1.0        |      |

:::note

String and bitmap are different types in Kvrocks, so you _cannot_ do bit operations with string, and vice versa.

:::

## Script commands

| Command    | Supported OR Not | Since Version | Desc                                               |
| ---------- | ---------------- | ------------- | -------------------------------------------------- |
| EVAL       | √                | v2.0.4        |                                                    |
| EVALSHA    | √                | v2.0.4        |                                                    |
| EVAL_RO    | √                | v2.2.0        |                                                    |
| EVALSHA_RO | √                | v2.2.0        |                                                    |
| SCRIPT     | √                | v2.0.4        | SCRIPT KILL and DEBUG subcommand are not supported |

## PubSub commands

| Command      | Supported OR Not | Since Version | Desc |
| ------------ | ---------------- | ------------- | ---- |
| PSUBSCRIBE   | √                | v1.0.0        |      |
| PUBLISH      | √                | v1.0.0        |      |
| MPUBLISH     | √                | v2.6.0        |      |
| PUBSUB       | √                | v1.0.0        |      |
| PUNSUBSCRIBE | √                | v1.0.0        |      |
| SUBSCRIBE    | √                | v1.0.0        |      |
| UNSUBSCRIBE  | √                | v1.0.0        |      |
| SSUBSCRIBE   | √                | v2.8.0        |      |
| SUNSUBSCRIBE | √                | v2.8.0        |      |

## Transaction commands

| Command | Supported OR Not | Since Version | Desc |
| ------- | ---------------- | ------------- | ---- |
| MULTI   | √                | v2.0.2        |      |
| EXEC    | √                | v2.0.2        |      |
| DISCARD | √                | v2.0.2        |      |
| WATCH   | √                | v2.4.0        |      |
| UNWATCH | √                | v2.4.0        |      |

## SortedInt commands

| Command           | Supported OR Not | Since Version | Desc                                                 |
| ----------------- | ---------------- | ------------- | ---------------------------------------------------- |
| SICARD            | √                | v1.0.2        | like SCARD                                           |
| SIADD             | √                | v1.0.2        | like SADD, but members are integers                  |
| SIREM             | √                | v1.0.2        | like SREM, but members are integers                  |
| SIRANGE           | √                | v1.0.2        | `SIRANGE key offset count cursor since_id`           |
| SIREVRANGE        | √                | v1.0.2        | `SIREVRANGE key offset count cursor max_id`          |
| SIEXISTS          | √                | v1.1.20       | `SIEXISTS key member1 [member2 ...]`                 |
| SIRANGEBYVALUE    | √                | v1.1.31       | `SIRANGEBYVALUE key min max [LIMIT offset count]`    |
| SIREVRANGEBYVALUE | √                | v1.1.31       | `SIREVRANGEBYVALUE key max min [LIMIT offset count]` |

## Cluster commands

| SUBCOMMAND | Supported OR Not | Since Version | Desc |
| ---------- | ---------------- | ------------- | ---- |
| CLUSTER    | √                | v2.0.2        |      |
| CLUSTERX   | √                | v2.0.2        |      |
| READONLY   | √                | unstable      |      |
| READWRITE  | √                | unstable      |      |
| ASKING     | √                | unstable      |      |

### CLUSTER subcommands

These commands are subcommands for `CLUSTER`, using as `CLUSTER INFO` etc.

| SUBCOMMAND | Supported OR Not | Since Version | Desc |
| ---------- | ---------------- | ------------- | ---- |
| INFO       | √                | v2.0.2        |      |
| NODES      | √                | v2.0.2        |      |
| SLOTS      | √                | v2.0.2        |      |
| KEYSLOT    | √                | v2.0.2        |      |
| RESET      | √                | unstable      |      |
| REPLICAS   | √                | unstable      |      |

### CLUSTERX subcommands

These commands are subcommands for `CLUSTERX`, using as `CLUSTERX VERSION` etc.

| SUBCOMMAND | Supported OR Not | Since Version | Desc |
| ---------- | ---------------- | ------------- | ---- |
| VERSION    | √                | v2.0.2        |      |
| SETNODEID  | √                | v2.0.2        |      |
| SETNODES   | √                | v2.0.2        |      |
| SETSLOT    | √                | v2.0.6        |      |
| MIGRATE    | √                | v2.0.6        |      |

:::note

To guarantee the correctness of client SDK, we rename the `CLUSTER` command to `CLUSTERX` to prevent the topology can being modified casually, but we can still use the `CLUSTER` command to fetch the cluster topology information.

:::

## Server commands

| Command     | Supported OR Not | Since Version | Desc                                                                                                                    |
| ----------- | ---------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| BGSAVE      | √                | v1.0.0        |                                                                                                                         |
| LASTSAVE    | √                | v2.6.0        |                                                                                                                         |
| PING        | √                | v1.0.0        |                                                                                                                         |
| SELECT      | √                | v1.0.0        | simply returns OK                                                                                                       |
| ECHO        | √                | v2.0.6        |                                                                                                                         |
| MONITOR     | √                | v1.0.0        |                                                                                                                         |
| SHUTDOWN    | √                | v1.0.0        |                                                                                                                         |
| INFO        | √                | v1.0.0        |                                                                                                                         |
| ROLE        | √                | v1.1.30       |                                                                                                                         |
| CONFIG      | √                | v1.0.0        |                                                                                                                         |
| DBSIZE      | √                | v1.0.0        |                                                                                                                         |
| DISK        | √                | v2.2.0        | `DISK USAGE user_key` to get the disk usage of the `user_key`, see [#874](https://github.com/apache/kvrocks/issues/874) |
| MEMORY      | √                | v2.4.0        | MEMORY USAGE command is an alias to DISK USAGE command                                                                  |
| DEBUG       | √                | v1.3.0        | only DEBUG SLEEP is supported                                                                                           |
| NAMESPACE   | √                | v1.0.0        |                                                                                                                         |
| FLUSHDB     | √                | v1.0.0        |                                                                                                                         |
| FLUSHALL    | √                | v1.0.0        |                                                                                                                         |
| FLUSHBACKUP | √                | v1.3.1        |                                                                                                                         |
| COMMAND     | √                | v2.0.1        |                                                                                                                         |
| CLIENT      | √                | v1.0.0        |                                                                                                                         |
| AUTH        | √                | v1.0.0        |                                                                                                                         |
| QUIT        | √                | v1.0.0        |                                                                                                                         |
| SLAVEOF     | √                | v1.0.0        |                                                                                                                         |
| SLOWLOG     | √                | v1.0.0        |                                                                                                                         |
| PERFLOG     | √                | v1.0.0        |                                                                                                                         |
| HELLO       | √                | v2.2.0        |                                                                                                                         |
| TIME        | √                | v2.4.0        |                                                                                                                         |
| STATS       | √                | v1.0.0        | dump the rocksdb statistics in JSON format                                                                              |
| RESTORE     | √                | v2.6.0        | create the new key with Redis serialized value, now supports String/List/Hash/Set/ZSet data types                       |
| COMPACT     | √                | v1.0.0        |                                                                                                                         |
| RDB         | √                | v2.7.0        | RDB LOAD command is used to load RDB file from local path into Kvrocks                                                  |
| DUMP        | √                | unstable      |                                                                                                                         |

:::note

The db size is updated async after execute `DBSIZE SCAN` command.

:::

## GEO commands

| Command              | Supported OR Not | Since Version | Desc |
| -------------------- | ---------------- | ------------- | ---- |
| GEOADD               | √                | v1.1.12       |      |
| GEODIST              | √                | v1.1.12       |      |
| GEOHASH              | √                | v1.1.12       |      |
| GEOPOS               | √                | v1.1.12       |      |
| GEORADIUS            | √                | v1.1.12       |      |
| GEORADIUS_ro         | √                | v1.1.12       |      |
| GEORADIUSBYMEMBER    | √                | v1.1.12       |      |
| GEORADIUSBYMEMBER_ro | √                | v1.1.12       |      |
| GEOSEARCH            | √                | v2.6.0        |      |
| GEOSEARCHSTORE       | √                | v2.6.0        |      |

## Stream commands

| Command    | Supported OR Not | Since Version | Desc        |
| ---------- | ---------------- | ------------- | ----------- |
| XADD       | √                | v2.2.0        |             |
| XDEL       | √                | v2.2.0        |             |
| XINFO      | √                | v2.2.0        | STREAM only |
| XLEN       | √                | v2.2.0        |             |
| XRANGE     | √                | v2.2.0        |             |
| XREAD      | √                | v2.2.0        |             |
| XREVRANGE  | √                | v2.2.0        |             |
| XTRIM      | √                | v2.2.0        |             |
| XCLAIM     | √                | unstable      |             |
| XAUTOCLAIM | √                | unstable      |             |
| XGROUP     | √                | unstable      |             |
| XPENDING   | X                | -             |             |
| XREADGROUP | √                | unstable      |             |
| XACK       | √                | unstable      |             |
| XSETID     | √                | v2.3.0        |             |

## BloomFilter commands

| Command    | Supported OR Not | Since Version | Desc |
| ---------- | ---------------- | ------------- | ---- |
| BF.RESERVE | √                | v2.6.0        |      |
| BF.ADD     | √                | v2.6.0        |      |
| BF.EXISTS  | √                | v2.6.0        |      |
| BF.CARD    | √                | v2.6.0        |      |
| BF.INFO    | √                | v2.6.0        |      |
| BF.MADD    | √                | v2.6.0        |      |
| BF.INSERT  | √                | v2.7.0        |      |
| BF.MEXISTS | √                | v2.6.0        |      |

## Function commands

| Command  | Supported OR Not | Since Version | Desc |
| -------- | ---------------- | ------------- | ---- |
| FUNCTION | √                | v2.7.0        |      |
| FCALL    | √                | v2.7.0        |      |
| FCALL_RO | √                | v2.7.0        |      |

:::note

Currently only `LOAD`, `DELETE`, `LIST` subcommands are supported in `FUNCTION`.
In addition, `LISTFUNC` subcommand is added as an extension to list all functions and their libraries in which they are located.

:::

## JSON commands

| Command        | Supported OR Not | Since Version | Desc |
| -------------- | ---------------- | ------------- | ---- |
| JSON.ARRAPPEND | √                | v2.7.0        |      |
| JSON.ARRINDEX  | √                | v2.7.0        |      |
| JSON.ARRINSERT | √                | v2.7.0        |      |
| JSON.ARRLEN    | √                | v2.7.0        |      |
| JSON.ARRPOP    | √                | v2.7.0        |      |
| JSON.ARRTRIM   | √                | v2.7.0        |      |
| JSON.CLEAR     | √                | v2.7.0        |      |
| JSON.DEL       | √                | v2.7.0        |      |
| JSON.FORGET    | √                | v2.7.0        |      |
| JSON.GET       | √                | v2.7.0        |      |
| JSON.MERGE     | √                | v2.7.0        |      |
| JSON.MGET      | √                | v2.8.0        |      |
| JSON.MSET      | √                | unstable      |      |
| JSON.NUMINCRBY | √                | v2.7.0        |      |
| JSON.NUMMULTBY | √                | v2.7.0        |      |
| JSON.OBJKEYS   | √                | v2.7.0        |      |
| JSON.OBJLEN    | √                | v2.7.0        |      |
| JSON.RESP      | X                | -             |      |
| JSON.SET       | √                | v2.7.0        |      |
| JSON.STRAPPEND | √                | v2.7.0        |      |
| JSON.STRLEN    | √                | v2.7.0        |      |
| JSON.TOGGLE    | √                | v2.7.0        |      |
| JSON.TYPE      | √                | v2.7.0        |      |
| JSON.DEBUG     | √                | unstable      | supported subcommands: MEMORY |

## Search commands

| Command        | Supported OR Not | Since Version | Desc |
| -------------- | ---------------- | ------------- | ---- |
| FT.CREATE      | √                | unstable      |      |
| FT.DROPINDEX   | √                | unstable      |      |
| FT.INFO        | √                | unstable      |      |
| FT._LIST       | √                | unstable      |      |
| FT.SEARCH      | √                | unstable      |      |
| FT.SEARCHSQL   | √                | unstable      | extension for SQL quires: `FT.SEARCHSQL <sql>` |
| FT.EXPLAIN     | √                | unstable      |      |
| FT.EXPLAINSQL  | √                | unstable      | extension for SQL quires: `FT.EXPLAINSQL <sql>` |
