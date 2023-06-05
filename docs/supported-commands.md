# Supported commands

## String commands

| Command     | Supported OR Not | Desc                                           |
|-------------|------------------|------------------------------------------------|
| append      | √                |                                                |
| decr        | √                |                                                |
| decrby      | √                |                                                |
| get         | √                |                                                |
| getex       | √                |                                                |
| getrange    | √                |                                                |
| substr      | √                |                                                |
| getset      | √                |                                                |
| incr        | √                |                                                |
| incrby      | √                |                                                |
| incrbyfloat | √                |                                                |
| mget        | √                |                                                |
| mset        | √                |                                                |
| msetnx      | √                |                                                |
| psetex      | √                | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/incubator-kvrocks/issues/1033)) |
| set         | √                |                                                |
| setex       | √                |                                                |
| setnx       | √                |                                                |
| setrange    | √                |                                                |
| strlen      | √                |                                                |
| cas         | √                | see [#415](https://github.com/apache/kvrocks/pull/415) |
| cad         | √                | see [#415](https://github.com/apache/kvrocks/pull/415) |
| getdel      | √                |                                                |

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

## List commands

| Command    | Supported OR Not | Desc                                                                        |
|------------|------------------|-----------------------------------------------------------------------------|
| blpop      | √                |                                                                             |
| brpop      | √                |                                                                             |
| brpoplpush | X                |                                                                             |
| lindex     | √                | `O(N)` operation, do not use it when list is extremely long |
| linsert    | √                | `O(N)` operation, do not use it when list is extremely long |
| llen       | √                |                                                                             |
| lpop       | √                |                                                                             |
| lpush      | √                |                                                                             |
| lpushx     | √                |                                                                             |
| lrange     | √                |                                                                             |
| lrem       | √                | `O(N)` operation, do not use it when list is extremely long   |
| lset       | √                |                                                                             |
| ltrim      | √                | `O(N)` operation, do not use it when list is extremely long  |
| rpop       | √                |                                                                             |
| rpoplpush  | √                |                                                                             |
| rpush      | √                |                                                                             |
| rpushx     | √                |                                                                             |
| lmove      | √                |                                                                             |

## Set commands

| Command     | Supported OR Not | Desc                                  |
|-------------|------------------|---------------------------------------|
| sadd        | √                |                                       |
| scard       | √                |                                       |
| sdiff       | √                |                                       |
| sdiffstore  | √                |                                       |
| sinter      | √                |                                       |
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
| bzpopmin         | X                |              |
| bzpopmax         | X                |              |
| zadd             | √                |              |
| zcard            | √                |              |
| zcount           | √                |              |
| zincrby          | √                |              |
| zinterstore      | √                |              |
| zlexcount        | √                |              |
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
| zmscore          | √                | multi zscore |
| zunionstore      | √                |              |

## Key commands

| Command   | Supported OR Not | Desc                    |
|-----------|------------------|-------------------------|
| del       | √                |                         |
| dump      | X                |                         |
| exists    | √                |                         |
| expire    | √                |                         |
| expireat  | √                |                         |
| keys      | √                |                         |
| persist   | √                |                         |
| pexpire   | √                | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/incubator-kvrocks/issues/1033)) | |
| pexpireat | √                | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/incubator-kvrocks/issues/1033)) | |
| pttl      | √                | precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/incubator-kvrocks/issues/1033)) | |
| ttl       | √                |                         |
| type      | √                |                         |
| scan      | √                |                         |
| rename    | X                |                         |
| randomkey | √                |                         |
| unlink    | √                |                         |

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

| Command | Supported OR Not | Desc                                               |
|---------|------------------|----------------------------------------------------|
| eval    | √                |                                                    |
| evalsha | √                |                                                    |
| script  | √                | script kill and debug subcommand are not supported |

## PubSub commands

| Command      | Supported OR Not | Desc |
|--------------|------------------|------|
| psubscribe   | √                |      |
| publish      | √                |      |
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

| Command   | Supported OR Not | Desc                                                                                                            |
|-----------|------------------|-----------------------------------------------------------------------------------------------------------------|
| monitor   | √                |                                                                                                                 |
| info      | √                |                                                                                                                 |
| role      | √                |                                                                                                                 |
| config    | √                |                                                                                                                 |
| dbsize    | √                |                                                                                                                 |
| disk      | √                | `disk usage user_key` to get the disk usage of the `user_key`, see [#874](https://github.com/apache/kvrocks/issues/874) |
| namespace | √                |                                                                                                                 |
| flushdb   | √                |                                                                                                                 |
| flushall  | √                |                                                                                                                 |
| command   | √                |                                                                                                                 |
| client    | √                |                                                                                                                 |
| auth      | √                |                                                                                                                 |
| quit      | √                |                                                                                                                 |
| slowlog   | √                |                                                                                                                 |
| perflog   | √                |                                                                                                                 |
| hello     | √                |                                                                                                                 |


:::note

The db size is updated async after execute `dbsize scan` command.

:::

## GEO commands

| Command           | Supported OR Not | Desc |
|-------------------|------------------|------|
| geoadd            | √                |      |
| geodist           | √                |      |
| geohash           | √                |      |
| geopos            | √                |      |
| georadius         | √                |      |
| georadiusbymember | √                |      |

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

## Hyperloglog commands

[Not supported yet](https://redis.io/commands/?group=hyperloglog).

## Function commands

[Not supported yet](https://redis.io/commands/?group=scripting).
