# Supported commands

## String commands

| Command     | Supported OR Not | Desc                                                                                                         |
|-------------|------------------|--------------------------------------------------------------------------------------------------------------|
| append      | √                |                                                                                                              |
| decr        | √                |                                                                                                              |
| decrby      | √                |                                                                                                              |
| get         | √                |                                                                                                              |
| getex       | √                |                                                                                                              |
| getrange    | √                |                                                                                                              |
| substr      | √                |                                                                                                              |
| getset      | √                |                                                                                                              |
| incr        | √                |                                                                                                              |
| incrby      | √                |                                                                                                              |
| incrbyfloat | √                |                                                                                                              |
| mget        | √                |                                                                                                              |
| mset        | √                |                                                                                                              |
| msetnx      | √                |                                                                                                              |
| psetex      | √                | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033)) |
| set         | √                |                                                                                                              |
| setex       | √                |                                                                                                              |
| setnx       | √                |                                                                                                              |
| setrange    | √                |                                                                                                              |
| strlen      | √                |                                                                                                              |
| cas         | √                | see [#415](https://github.com/apache/kvrocks/pull/415)                                                       |
| cad         | √                | see [#415](https://github.com/apache/kvrocks/pull/415)                                                       |
| getdel      | √                |                                                                                                              |

## Hash commands

| Command      | Supported OR Not | Desc |
|--------------|------------------|------|
| hdel         | √                |      |
| hexists      | √                |      |
| hget         | √                |      |
| hgetall      | √                |      |
| hincrby      | √                |      |
| hincrbyfloat | √                |      |
| hkeys        | √                |      |
| hlen         | √                |      |
| hmget        | √                |      |
| hmset        | √                |      |
| hrangebylex  | √                |      |
| hset         | √                |      |
| hsetnx       | √                |      |
| hstrlen      | √                |      |
| hvals        | √                |      |
| hscan        | √                |      |
| hrandfield   | √                |      |

## List commands

| Command    | Supported OR Not | Desc                                                        |
|------------|------------------|-------------------------------------------------------------|
| blpop      | √                |                                                             |
| brpop      | √                |                                                             |
| brpoplpush | X                |                                                             |
| lindex     | √                | `O(N)` operation, do not use it when list is extremely long |
| linsert    | √                | `O(N)` operation, do not use it when list is extremely long |
| llen       | √                |                                                             |
| lpop       | √                |                                                             |
| lpush      | √                |                                                             |
| lpushx     | √                |                                                             |
| lrange     | √                |                                                             |
| lrem       | √                | `O(N)` operation, do not use it when list is extremely long |
| lset       | √                |                                                             |
| ltrim      | √                | `O(N)` operation, do not use it when list is extremely long |
| rpop       | √                |                                                             |
| rpoplpush  | √                |                                                             |
| rpush      | √                |                                                             |
| rpushx     | √                |                                                             |
| lmove      | √                |                                                             |
| blmove     | √                |                                                             |
| lpos       | √                |                                                             |
| lmpop      | √                |                                                             |
| blmpop     | √                |                                                             |

## Set commands

| Command     | Supported OR Not | Desc                                  |
|-------------|------------------|---------------------------------------|
| sadd        | √                |                                       |
| scard       | √                |                                       |
| sdiff       | √                |                                       |
| sdiffstore  | √                |                                       |
| sinter      | √                |                                       |
| sintercard  | √                |                                       |
| sinterstore | √                |                                       |
| sismember   | √                |                                       |
| smembers    | √                |                                       |
| smove       | √                |                                       |
| spop        | √                | pop the member with key order         |
| srandmember | √                | always first N members if not changed |
| srem        | √                |                                       |
| sunion      | √                |                                       |
| sunionstore | √                |                                       |
| sscan       | √                |                                       |

## ZSet commands

| Command          | Supported OR Not | Desc         |
|------------------|------------------|--------------|
| bzmpop           | √                |              |
| bzpopmin         | √                |              |
| bzpopmax         | √                |              |
| zadd             | √                |              |
| zcard            | √                |              |
| zcount           | √                |              |
| zincrby          | √                |              |
| zinterstore      | √                |              |
| zlexcount        | √                |              |
| zmpop            | √                |              |
| zmscore          | √                | multi zscore |
| zpopmin          | √                |              |
| zpopmax          | √                |              |
| zrangestore      | √                |              |
| zrange           | √                |              |
| zrangebylex      | √                |              |
| zrangebyscore    | √                |              |
| zrank            | √                |              |
| zrem             | √                |              |
| zremrangebylex   | √                |              |
| zremrangebyrank  | √                |              |
| zremrangebyscore | √                |              |
| zrevrank         | √                |              |
| zrevrange        | √                |              |
| zrevrangebylex   | √                |              |
| zrevrangebyscore | √                |              |
| zscan            | √                |              |
| zscore           | √                |              |
| zunion           | √                |              |
| zunionstore      | √                |              |

## Key commands

| Command   | Supported OR Not | Desc                                                                                                         |
|-----------|------------------|--------------------------------------------------------------------------------------------------------------|
| del       | √                |                                                                                                              |
| dump      | X                |                                                                                                              |
| exists    | √                |                                                                                                              |
| expire    | √                |                                                                                                              |
| expireat  | √                |                                                                                                              |
| keys      | √                |                                                                                                              |
| persist   | √                |                                                                                                              |
| pexpire   | √                | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033)) |
| pexpireat | √                | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033)) |
| pttl      | √                | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033)) |
| ttl       | √                |                                                                                                              |
| type      | √                |                                                                                                              |
| scan      | √                |                                                                                                              |
| rename    | X                |                                                                                                              |
| randomkey | √                |                                                                                                              |
| unlink    | √                |                                                                                                              |
| move      | √                | if key does not exist, the command returns 0, otherwise it will always returns 1                             |

## Bit commands

| Command  | Supported OR Not | Desc |
|----------|------------------|------|
| getbit   | √                |      |
| setbit   | √                |      |
| bitcount | √                |      |
| bitpos   | √                |      |
| bitfield | X                |      |
| bitop    | √                |      |

:::note

String and bitmap are different types in Kvrocks, so you _cannot_ do bit operations with string, and vice versa.

:::

## Script commands

| Command    | Supported OR Not | Desc                                               |
|------------|------------------|----------------------------------------------------|
| eval       | √                |                                                    |
| evalsha    | √                |                                                    |
| eval_ro    | √                |                                                    |
| evalsha_ro | √                |                                                    |
| script     | √                | script kill and debug subcommand are not supported |

## PubSub commands

| Command      | Supported OR Not | Desc |
|--------------|------------------|------|
| psubscribe   | √                |      |
| publish      | √                |      |
| mpublish      | √                |      |
| pubsub       | √                |      |
| punsubscribe | √                |      |
| subscribe    | √                |      |
| unsubscribe  | √                |      |

## Transaction commands

| Command | Supported OR Not | Desc |
|---------|------------------|------|
| multi   | √                |      |
| exec    | √                |      |
| discard | √                |      |
| watch   | √                |      |
| unwatch | √                |      |

## SortedInt commands

| Command           | Supported OR Not | Desc                                               |
|-------------------|------------------|----------------------------------------------------|
| sicard            | √                | like scard                                         |
| siadd             | √                | like sadd, but member is int                       |
| sirem             | √                | like srem, but member is int                       |
| sirange           | √                | sirange key offset count cursor since_id           |
| sirevrange        | √                | sirevrange key offset count cursor max_id          |
| siexists          | √                | siexists key member1 (member2 ...)                 |
| sirangebyvalue    | √                | sirangebyvalue key min max (LIMIT offset count)    |
| sirevrangebyvalue | √                | sirevrangebyvalue key max min (LIMIT offset count) |

## Cluster commands

These commands are subcommands for `CLUSTER`, using as `CLUSTER INFO` etc.

| Subcommand | Supported OR Not | Desc |
|------------|------------------|------|
| info       | √                |      |
| nodes      | √                |      |
| slots      | √                |      |
| keyslot    | √                |      |

## Server commands

| Command     | Supported OR Not | Desc                                                                                                                    |
|-------------|------------------|-------------------------------------------------------------------------------------------------------------------------|
| bgsave      | √                |                                                                                                                         |
| lastsave    | √                |                                                                                                                         |
| ping        | √                |                                                                                                                         |
| select      | √                | simply returns OK                                                                                                       |
| echo        | √                |                                                                                                                         |
| monitor     | √                |                                                                                                                         |
| shutdown    | √                |                                                                                                                         |
| info        | √                |                                                                                                                         |
| role        | √                |                                                                                                                         |
| config      | √                |                                                                                                                         |
| dbsize      | √                |                                                                                                                         |
| disk        | √                | `disk usage user_key` to get the disk usage of the `user_key`, see [#874](https://github.com/apache/kvrocks/issues/874) |
| memory      | √                | MEMORY USAGE command is an alias to DISK USAGE command                                                                  |
| debug       | √                | only DEBUG SLEEP is supported                                                                                           |
| namespace   | √                |                                                                                                                         |
| flushdb     | √                |                                                                                                                         |
| flushall    | √                |                                                                                                                         |
| flushbackup | √                |                                                                                                                         |
| command     | √                |                                                                                                                         |
| client      | √                |                                                                                                                         |
| auth        | √                |                                                                                                                         |
| quit        | √                |                                                                                                                         |
| slaveof     | √                |                                                                                                                         |
| slowlog     | √                |                                                                                                                         |
| perflog     | √                |                                                                                                                         |
| hello       | √                |                                                                                                                         |
| time        | √                |                                                                                                                         |
| stats       | √                | dump the rocksdb statistics in JSON format                                                                              |
| restore     | √                | create the new key with Redis serialized value, now supports String/List/Hash/Set/ZSet data types                       |
| compact     | √                |                                                                                                                         |


:::note

The db size is updated async after execute `dbsize scan` command.

:::

## GEO commands

| Command              | Supported OR Not | Desc |
|----------------------|------------------|------|
| geoadd               | √                |      |
| geodist              | √                |      |
| geohash              | √                |      |
| geopos               | √                |      |
| georadius            | √                |      |
| georadius_ro         | √                |      |
| georadiusbymember    | √                |      |
| georadiusbymember_ro | √                |      |
| geosearch            | √                |      |
| getsearchstore       | √                |      |

## Stream commands

| Command    | Supported OR Not | Desc        |
|------------|------------------|-------------|
| xadd       | √                |             |
| xdel       | √                |             |
| xinfo      | √                | STREAM only |
| xlen       | √                |             |
| xrange     | √                |             |
| xread      | √                |             |
| xrevrange  | √                |             |
| xtrim      | √                |             |
| xclaim     | X                |             |
| xautoclaim | X                |             |
| xgroup     | X                |             |
| xpending   | X                |             |
| xreadgroup | X                |             |
| xsetid     | √                |             |

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

:::note

Currently only `LOAD`, `DELETE`, `LIST` subcommands are supported in `FUNCTION`.
In addition, `LISTFUNC` subcommand is added as an extension to list all functions and their libraries in which they are located.

:::
