# Supported Commands

## String Commands

| Command     | Supported OR Not | Desc                                           |
|-------------|------------------|------------------------------------------------|
| append      | √                |                                                |
| decr        | √                |                                                |
| decrby      | √                |                                                |
| get         | √                |                                                |
| getex       | √                |                                                |
| getrange    | √                |                                                |
| getset      | √                |                                                |
| incr        | √                |                                                |
| incrby      | √                |                                                |
| incrbyfloat | √                |                                                |
| mget        | √                |                                                |
| mset        | √                |                                                |
| msetnx      | √                |                                                |
| psetex      | √                | precision is in seconds                        |
| set         | √                |                                                |
| setex       | √                |                                                |
| setnx       | √                |                                                |
| setrange    | √                |                                                |
| strlen      | √                |                                                |
| unlink      | √                |                                                |
| cas         | √                | see https://github.com/apache/kvrocks/pull/415 |
| cad         | √                | see https://github.com/apache/kvrocks/pull/415 |
| getdel      | √                |                                                |

## Hash Commands

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
| hrange       | √                |      |
| hset         | √                |      |
| hsetnx       | √                |      |
| hstrlen      | √                |      |
| hvals        | √                |      |
| hscan        | √                |      |

## List Commands

| Command    | Supported OR Not | Desc                                                                        |
|------------|------------------|-----------------------------------------------------------------------------|
| blpop      | √                |                                                                             |
| brpop      | √                |                                                                             |
| brpoplpush | X                |                                                                             |
| lindex     | √                | Caution: linsert is O(N) operation, don't use it when list was extreme long |
| linsert    | √                |                                                                             |
| llen       | √                |                                                                             |
| lpop       | √                |                                                                             |
| lpush      | √                |                                                                             |
| lpushx     | √                |                                                                             |
| lrange     | √                |                                                                             |
| lrem       | √                | Caution: lrem is O(N) operation, don't use it when list was extreme long    |
| lset       | √                |                                                                             |
| ltrim      | √                | Caution: ltrim is O(N) operation, don't use it when list was extreme long   |
| rpop       | √                |                                                                             |
| rpoplpush  | √                |                                                                             |
| rpush      | √                |                                                                             |
| rpushx     | √                |                                                                             |
| lmove      | √                |                                                                             |

## Set Commands

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

## ZSet Commands

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

## Key Commands

| Command   | Supported OR Not | Desc                    |
|-----------|------------------|-------------------------|
| del       | √                |                         |
| dump      | X                |                         |
| exists    | √                |                         |
| expire    | √                |                         |
| expireat  | √                |                         |
| keys      | √                |                         |
| persist   | √                |                         |
| pexpire   | √                | precision is in seconds |
| pexpireat | √                | precision is in seconds |
| pttl      | √                | precision is in seconds |
| ttl       | √                |                         |
| type      | √                |                         |
| scan      | √                |                         |
| rename    | X                |                         |
| randomkey | √                |                         |

## Bit Commands

| Command  | Supported OR Not | Desc |
|----------|------------------|------|
| getbit   | √                |      |
| setbit   | √                |      |
| bitcount | √                |      |
| bitpos   | √                |      |
| bitfield | X                |      |
| bitop    | √                |      |

:::note

String and bitmap are different types in kvrocks, so you _cannot_ do bit operations with string, and vice versa.

:::

## Script Commands

| Command | Supported OR Not | Desc                                               |
|---------|------------------|----------------------------------------------------|
| eval    | √                |                                                    |
| evalsha | √                |                                                    |
| script  | √                | script kill and debug subcommand are not supported |

## Pub/Sub Commands

| Command      | Supported OR Not | Desc |
|--------------|------------------|------|
| psubscribe   | √                |      |
| publish      | √                |      |
| pubsub       | √                |      |
| punsubscribe | √                |      |
| subscribe    | √                |      |
| unsubscribe  | √                |      |

## Transaction Commands

| Command | Supported OR Not | Desc |
|---------|------------------|------|
| multi   | √                |      |
| exec    | √                |      |
| discard | √                |      |
| watch   | X                |      |
| unwatch | X                |      |

## Sortedint Commands

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

## Cluster Subcommands

| Subcommand | Supported OR Not | Desc |
|------------|------------------|------|
| info       | √                |      |
| nodes      | √                |      |
| slots      | √                |      |
| keyslot    | √                |      |

## Server Commands

| Command   | Supported OR Not | Desc                                                                                                                     |
|-----------|------------------|--------------------------------------------------------------------------------------------------------------------------|
| monitor   | √                |                                                                                                                          |
| info      | √                |                                                                                                                          |
| role      | √                |                                                                                                                          |
| config    | √                |                                                                                                                          |
| dbsize    | √                |                                                                                                                          |
| disk      | √                | `disk usage user_key` to get the disk usage of the `user_key`, see details: https://github.com/apache/kvrocks/issues/874 |
| namespace | √                |                                                                                                                          |
| flushdb   | √                |                                                                                                                          |
| flushall  | √                |                                                                                                                          |
| command   | √                |                                                                                                                          |
| client    | √                |                                                                                                                          |
| auth      | √                |                                                                                                                          |
| quit      | √                |                                                                                                                          |
| slowlog   | √                |                                                                                                                          |
| perflog   | √                |                                                                                                                          |
| hello     | √                |                                                                                                                          |


:::note

The db size is updated async after execute `dbsize scan` command.

:::

## GEO Commands

| Command           | Supported OR Not | Desc |
|-------------------|------------------|------|
| geoadd            | √                |      |
| geodist           | √                |      |
| geohash           | √                |      |
| geopos            | √                |      |
| georadius         | √                |      |
| georadiusbymember | √                |      |

## Stream Commands

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
| xsetid     | X                |             |

## Hyperloglog Commands

[Not supported yet](https://redis.io/commands/?group=hyperloglog).

## FUNCTION Commands

[Not supported yet](https://redis.io/commands/?name=FUNCTION).
