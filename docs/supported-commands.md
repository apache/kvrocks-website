# Supported commands

## String commands

| Command     | Supported OR Not | Desc                                                                                                         |
|-------------|------------------|--------------------------------------------------------------------------------------------------------------|
| APPEND      | √                |                                                                                                              |
| DECR        | √                |                                                                                                              |
| DECRBY      | √                |                                                                                                              |
| GET         | √                |                                                                                                              |
| GETEX       | √                |                                                                                                              |
| GETRANGE    | √                |                                                                                                              |
| SUBSTR      | √                |                                                                                                              |
| GETSET      | √                |                                                                                                              |
| INCR        | √                |                                                                                                              |
| INCRBY      | √                |                                                                                                              |
| INCRBYFLOAT | √                |                                                                                                              |
| MGET        | √                |                                                                                                              |
| MSET        | √                |                                                                                                              |
| MSETNX      | √                |                                                                                                              |
| PSETEX      | √                | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033)) |
| SET         | √                |                                                                                                              |
| SETEX       | √                |                                                                                                              |
| SETNX       | √                |                                                                                                              |
| SETRANGE    | √                |                                                                                                              |
| STRLEN      | √                |                                                                                                              |
| CAS         | √                | see [#415](https://github.com/apache/kvrocks/pull/415)                                                       |
| CAD         | √                | see [#415](https://github.com/apache/kvrocks/pull/415)                                                       |
| GETDEL      | √                |                                                                                                              |

## Hash commands

| Command      | Supported OR Not | Desc |
|--------------|------------------|------|
| HDEL         | √                |      |
| HEXISTS      | √                |      |
| HGET         | √                |      |
| HGETALL      | √                |      |
| HINCRBY      | √                |      |
| HINCRBYFLOAT | √                |      |
| HKEYS        | √                |      |
| HLEN         | √                |      |
| HMGET        | √                |      |
| HMSET        | √                |      |
| HRANGEBYLEX  | √                |      |
| HSET         | √                |      |
| HSETNX       | √                |      |
| HSTRLEN      | √                |      |
| HVALS        | √                |      |
| HSCAN        | √                |      |
| HRANDFIELD   | √                |      |

## List commands

| Command    | Supported OR Not | Desc                                                        |
|------------|------------------|-------------------------------------------------------------|
| BLPOP      | √                |                                                             |
| BRPOP      | √                |                                                             |
| BRPOPLPUSH | X                |                                                             |
| LINDEX     | √                | `O(N)` operation, do not use it when the list is too long   |
| LINSERT    | √                | `O(N)` operation, do not use it when the list is too long   |
| LLEN       | √                |                                                             |
| LPOP       | √                |                                                             |
| LPUSH      | √                |                                                             |
| LPUSHX     | √                |                                                             |
| LRANGE     | √                |                                                             |
| LREM       | √                | `O(N)` operation, do not use it when the list is too long   |
| LSET       | √                |                                                             |
| LTRIM      | √                | `O(N)` operation, do not use it when the list is too long   |
| RPOP       | √                |                                                             |
| RPOPLPUSH  | √                |                                                             |
| RPUSH      | √                |                                                             |
| RPUSHX     | √                |                                                             |
| LMOVE      | √                |                                                             |
| BLMOVE     | √                |                                                             |
| LPOS       | √                |                                                             |
| LMPOP      | √                |                                                             |
| BLMPOP     | √                |                                                             |

## Set commands

| Command     | Supported OR Not | Desc                                  |
|-------------|------------------|---------------------------------------|
| SADD        | √                |                                       |
| SCARD       | √                |                                       |
| SDIFF       | √                |                                       |
| SDIFFSTORE  | √                |                                       |
| SINTER      | √                |                                       |
| SINTERCARD  | √                |                                       |
| SINTERSTORE | √                |                                       |
| SISMEMBER   | √                |                                       |
| SMEMBERS    | √                |                                       |
| SMOVE       | √                |                                       |
| SPOP        | √                | pop members in the order of keys      |
| SRANDMEMBER | √                | always first N members if not changed |
| SREM        | √                |                                       |
| SUNION      | √                |                                       |
| SUNIONSTORE | √                |                                       |
| SSCAN       | √                |                                       |

## ZSet commands

| Command          | Supported OR Not | Desc         |
|------------------|------------------|--------------|
| BZMPOP           | √                |              |
| BZPOPMIN         | √                |              |
| BZPOPMAX         | √                |              |
| ZADD             | √                |              |
| ZCARD            | √                |              |
| ZCOUNT           | √                |              |
| ZINCRBY          | √                |              |
| ZINTERSTORE      | √                |              |
| ZLEXCOUNT        | √                |              |
| ZMPOP            | √                |              |
| ZMSCORE          | √                | multi ZSCORE |
| ZPOPMIN          | √                |              |
| ZPOPMAX          | √                |              |
| ZRANGESTORE      | √                |              |
| ZRANGE           | √                |              |
| ZRANGEBYLEX      | √                |              |
| ZRANGEBYSCORE    | √                |              |
| ZRANK            | √                |              |
| ZREM             | √                |              |
| ZREMRANGEBYLEX   | √                |              |
| ZREMRANGEBYRANK  | √                |              |
| ZREMRANGEBYSCORE | √                |              |
| ZREVRANK         | √                |              |
| ZREVRANGE        | √                |              |
| ZREVRANGEBYLEX   | √                |              |
| ZREVRANGEBYSCORE | √                |              |
| ZSCAN            | √                |              |
| ZSCORE           | √                |              |
| ZUNION           | √                |              |
| ZUNIONSTORE      | √                |              |

## Key commands

| Command   | Supported OR Not | Desc                                                                                                         |
|-----------|------------------|--------------------------------------------------------------------------------------------------------------|
| DEL       | √                |                                                                                                              |
| DUMP      | X                |                                                                                                              |
| EXISTS    | √                |                                                                                                              |
| EXPIRE    | √                |                                                                                                              |
| EXPIREAT  | √                |                                                                                                              |
| KEYS      | √                |                                                                                                              |
| PERSIST   | √                |                                                                                                              |
| PEXPIRE   | √                | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033)) |
| PEXPIREAT | √                | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033)) |
| PTTL      | √                | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033)) |
| TTL       | √                |                                                                                                              |
| TYPE      | √                |                                                                                                              |
| SCAN      | √                |                                                                                                              |
| RENAME    | X                |                                                                                                              |
| RANDOMKEY | √                |                                                                                                              |
| UNLINK    | √                |                                                                                                              |
| MOVE      | √                | if the key does not exist, the command returns 0, otherwise it will always return 1                          |

## Bit commands

| Command  | Supported OR Not | Desc |
|----------|------------------|------|
| GETBIT   | √                |      |
| SETBIT   | √                |      |
| BITCOUNT | √                |      |
| BITPOS   | √                |      |
| BITFIELD | X                |      |
| BITOP    | √                |      |

:::note

String and bitmap are different types in Kvrocks, so you _cannot_ do bit operations with string, and vice versa.

:::

## Script commands

| Command    | Supported OR Not | Desc                                               |
|------------|------------------|----------------------------------------------------|
| EVAL       | √                |                                                    |
| EVALSHA    | √                |                                                    |
| EVAL_RO    | √                |                                                    |
| EVALSHA_RO | √                |                                                    |
| SCRIPT     | √                | SCRIPT KILL and DEBUG subcommand are not supported |

## PubSub commands

| Command      | Supported OR Not | Desc |
|--------------|------------------|------|
| PSUBSCRIBE   | √                |      |
| PUBLISH      | √                |      |
| MPUBLISH     | √                |      |
| PUBSUB       | √                |      |
| PUNSUBSCRIBE | √                |      |
| SUBSCRIBE    | √                |      |
| UNSUBSCRIBE  | √                |      |

## Transaction commands

| Command | Supported OR Not | Desc |
|---------|------------------|------|
| MULTI   | √                |      |
| EXEC    | √                |      |
| DISCARD | √                |      |
| WATCH   | √                |      |
| UNWATCH | √                |      |

## SortedInt commands

| Command           | Supported OR Not | Desc                                                |
|-------------------|------------------|-----------------------------------------------------|
| SICARD            | √                | like SCARD                                          |
| SIADD             | √                | like SADD, but members are integers                 |
| SIREM             | √                | like SREM, but members are integers                 |
| SIRANGE           | √                | `SIRANGE key offset count cursor since_id`          |
| SIREVRANGE        | √                | `SIREVRANGE key offset count cursor max_id`         |
| SIEXISTS          | √                | `SIEXISTS key member1 [member2 ...]`                |
| SIRANGEBYVALUE    | √                | `SIRANGEBYVALUE key min max [LIMIT offset count]`   |
| SIREVRANGEBYVALUE | √                | `SIREVRANGEBYVALUE key max min [LIMIT offset count]`|

## Cluster commands

These commands are subcommands for `CLUSTER`, using as `CLUSTER INFO` etc.

| SUBCOMMAND | Supported OR Not | Desc |
|------------|------------------|------|
| INFO       | √                |      |
| NODES      | √                |      |
| SLOTS      | √                |      |
| KEYSLOT    | √                |      |

## Server commands

| Command     | Supported OR Not | Desc                                                                                                                    |
|-------------|------------------|-------------------------------------------------------------------------------------------------------------------------|
| BGSAVE      | √                |                                                                                                                         |
| LASTSAVE    | √                |                                                                                                                         |
| PING        | √                |                                                                                                                         |
| SELECT      | √                | simply returns OK                                                                                                       |
| ECHO        | √                |                                                                                                                         |
| MONITOR     | √                |                                                                                                                         |
| SHUTDOWN    | √                |                                                                                                                         |
| INFO        | √                |                                                                                                                         |
| ROLE        | √                |                                                                                                                         |
| CONFIG      | √                |                                                                                                                         |
| DBSIZE      | √                |                                                                                                                         |
| DISK        | √                | `DISK USAGE user_key` to get the disk usage of the `user_key`, see [#874](https://github.com/apache/kvrocks/issues/874) |
| MEMORY      | √                | MEMORY USAGE command is an alias to DISK USAGE command                                                                  |
| DEBUG       | √                | only DEBUG SLEEP is supported                                                                                           |
| NAMESPACE   | √                |                                                                                                                         |
| FLUSHDB     | √                |                                                                                                                         |
| FLUSHALL    | √                |                                                                                                                         |
| FLUSHBACKUP | √                |                                                                                                                         |
| command     | √                |                                                                                                                         |
| CLIENT      | √                |                                                                                                                         |
| AUTH        | √                |                                                                                                                         |
| QUIT        | √                |                                                                                                                         |
| SLAVEOF     | √                |                                                                                                                         |
| SLOWLOG     | √                |                                                                                                                         |
| PERFLOG     | √                |                                                                                                                         |
| HELLO       | √                |                                                                                                                         |
| TIME        | √                |                                                                                                                         |
| STATS       | √                | dump the rocksdb statistics in JSON format                                                                              |
| RESTORE     | √                | create the new key with Redis serialized value, now supports String/List/Hash/Set/ZSet data types                       |
| COMPACT     | √                |                                                                                                                         |
| RDB         | √                | RDB LOAD command is used to load RDB file from local path into Kvrocks                                                  |


:::note

The db size is updated async after execute `DBSIZE SCAN` command.

:::

## GEO commands

| Command              | Supported OR Not | Desc |
|----------------------|------------------|------|
| GEOADD               | √                |      |
| GEODIST              | √                |      |
| GEOHASH              | √                |      |
| GEOPOS               | √                |      |
| GEORADIUS            | √                |      |
| GEORADIUS_ro         | √                |      |
| GEORADIUSBYMEMBER    | √                |      |
| GEORADIUSBYMEMBER_ro | √                |      |
| GEOSEARCH            | √                |      |
| GETSEARCHSTORE       | √                |      |

## Stream commands

| Command    | Supported OR Not | Desc        |
|------------|------------------|-------------|
| XADD       | √                |             |
| XDEL       | √                |             |
| XINFO      | √                | STREAM only |
| XLEN       | √                |             |
| XRANGE     | √                |             |
| XREAD      | √                |             |
| XREVRANGE  | √                |             |
| XTRIM      | √                |             |
| XCLAIM     | X                |             |
| XAUTOCLAIM | X                |             |
| XGROUP     | X                |             |
| XPENDING   | X                |             |
| XREADGROUP | X                |             |
| XSETID     | √                |             |

## BloomFilter commands

| Command    | Supported OR Not | Desc        |
|------------|------------------|-------------|
| BF.RESERVE | √                |             |
| BF.ADD     | √                |             |
| BF.EXISTS  | √                |             |
| BF.CARD    | √                |             |
| BF.INFO    | √                |             |
| BF.MADD    | √                |             |
| BF.INSERT  | √                |             |
| BF.MEXIST  | √                |             |

## Function commands

| Command    | Supported OR Not | Desc        |
|------------|------------------|-------------|
| FUNCTION   | √                |             |
| FCALL      | √                |             |
| FCALL_RO   | √                |             |

:::note

Currently only `LOAD`, `DELETE`, `LIST` subcommands are supported in `FUNCTION`.
In addition, `LISTFUNC` subcommand is added as an extension to list all functions and their libraries in which they are located.

:::

## JSON commands

| Command          | Supported OR Not | Desc        |
|------------------|------------------|-------------|
| JSON.ARRAPPEND   | √                |             |
| JSON.ARRINDEX    | X                |             |
| JSON.ARRINSERT   | X                |             |
| JSON.ARRLEN      | √                |             |
| JSON.ARRPOP      | X                |             |
| JSON.ARRTRIM     | X                |             |
| JSON.CLEAR       | √                |             |
| JSON.DEL         | X                |             |
| JSON.FORGET      | X                |             |
| JSON.GET         | √                |             |
| JSON.MERGE       | X                |             |
| JSON.MGET        | X                |             |
| JSON.MSET        | X                |             |
| JSON.NUMINCRBY   | X                |             |
| JSON.NUMMULTBY   | X                |             |
| JSON.OBJKEYS     | X                |             |
| JSON.OBJLEN      | X                |             |
| JSON.RESP        | X                |             |
| JSON.SET         | √                |             |
| JSON.STRAPPEND   | X                |             |
| JSON.STRLEN      | X                |             |
| JSON.TOGGLE      | X                |             |
| JSON.TYPE        | √                |             |

