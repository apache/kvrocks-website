# Supported commands

## String commands

| Command     | Supported OR Not | Since Version | Description                                                                                                  |
| ----------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| APPEND      | ✓                | v1.0.0        | Appends a value to a key's existing string value.                                                            |
| DECR        | ✓                | v1.0.0        | Decrements the number stored at a key by one.                                                                |
| DECRBY      | ✓                | v1.0.0        | Decrements the number stored at a key by a specified value.                                                  |
| GET         | ✓                | v1.0.0        | Retrieves the value of a key.                                                                                |
| GETEX       | ✓                | v2.2.0        | Retrieves and optionally sets a new expiration for the value of a key.                                       |
| GETRANGE    | ✓                | v1.0.0        | Retrieves a substring from the string stored at a key.                                                       |
| SUBSTR      | ✓                | v2.4.0        | Returns a substring of the value stored at a key (alias for `GETRANGE`).                                     |
| GETSET      | ✓                | v1.0.0        | Sets the value of a key and returns its old value.                                                           |
| INCR        | ✓                | v1.0.0        | Increments the number stored at a key by one.                                                                |
| INCRBY      | ✓                | v1.0.0        | Increments the number stored at a key by a specified value.                                                  |
| INCRBYFLOAT | ✓                | v1.0.0        | Increments the number stored at a key by a floating-point value.                                             |
| MGET        | ✓                | v1.0.0        | Retrieves the values of multiple keys.                                                                       |
| MSET        | ✓                | v1.0.0        | Sets multiple keys to multiple values.                                                                       |
| MSETNX      | ✓                | v1.3.0        | Sets multiple keys to multiple values only if none of the keys exist.                                        |
| PSETEX      | ✓                | v1.3.0        | Sets the value of a key and sets its expiration time in milliseconds. (precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033))) |
| SET         | ✓                | v1.0.0        | Sets the value of a key. (supported `KEEPTTL` and `GET` options since v2.8.0)                                |
| SETEX       | ✓                | v1.0.0        | Sets the value of a key and sets its expiration time in seconds.                                             |
| SETNX       | ✓                | v1.0.0        | Sets the value of a key only if the key does not already exist.                                              |
| SETRANGE    | ✓                | v1.0.0        | Overwrites part of a string at key starting at the specified offset.                                         |
| STRLEN      | ✓                | v1.0.0        | Returns the length of the string value stored at a key.                                                      |
| CAS         | ✓                | v2.0.5        | Performs a Compare-And-Swap operation, updating a value only if it matches an expected value. (see [#415](https://github.com/apache/kvrocks/pull/415)) |
| CAD         | ✓                | v2.0.5        | Executes a Compare-And-Delete operation, deleting a key only if it matches an expected value. (see [#415](https://github.com/apache/kvrocks/pull/415)) |
| GETDEL      | ✓                | v2.2.0        | Retrieves the value of a key and deletes the key afterward.                                                  |
| LCS         | ✓                | v2.9.0        | Finds the longest common substring between the string stored at a key and another string.                    |

## Hash commands

| Command      | Supported OR Not | Since Version | Description                                                                                                 |
| ------------ | ---------------- | ------------- | ----------------------------------------------------------------------------------------------------------- |
| HDEL         | ✓                | v1.0.0        | Deletes one or more fields from a hash.                                                                     |
| HEXISTS      | ✓                | v1.0.0        | Checks if a field exists in a hash.                                                                         |
| HGET         | ✓                | v1.0.0        | Retrieves the value associated with a field in a hash.                                                      |
| HGETALL      | ✓                | v1.0.0        | Retrieves all fields and values in a hash.                                                                  |
| HINCRBY      | ✓                | v1.0.0        | Increments the integer value of a field in a hash by a specified amount.                                    |
| HINCRBYFLOAT | ✓                | v1.0.0        | Increments the floating-point value of a field in a hash by a specified amount.                             |
| HKEYS        | ✓                | v1.0.0        | Retrieves all the fields in a hash.                                                                         |
| HLEN         | ✓                | v1.0.0        | Returns the number of fields in a hash.                                                                     |
| HMGET        | ✓                | v1.0.0        | Retrieves the values associated with multiple fields in a hash.                                             |
| HMSET        | ✓                | v1.0.0        | Sets multiple fields in a hash to multiple values.                                                          |
| HRANGEBYLEX  | ✓                | v2.3.0        | Returns elements in a sorted set within a specific range defined by lexicographical ordering.               |
| HSET         | ✓                | v1.0.0        | Sets the value of a field in a hash.                                                                        |
| HSETNX       | ✓                | v1.0.0        | Sets the value of a field in a hash only if the field does not exist.                                       |
| HSTRLEN      | ✓                | v1.0.0        | Returns the length of string value for the specific field in a hash.                                        |
| HVALS        | ✓                | v1.0.0        | Returns all values stored in a hash.                                                                        |
| HSCAN        | ✓                | v1.0.0        | SCAN for fields of a hash.                                                                                  |
| HRANDFIELD   | ✓                | v2.6.0        | Returns some random fields in a hash.                                                                       |
| HSETEXPIRE   | ✓                | unstable      | The combination of these two commands: HSET and EXPIRE                                                      |

## List commands

| Command    | Supported OR Not | Since Version | Desc                                                                                                          |
| ---------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| BLPOP      | ✓                | v1.0.0        | Removes and returns the first element of a list, or blocks until one is available.                            |
| BRPOP      | ✓                | v1.0.0        | Removes and returns the last element of a list, or blocks until one is available.                             |
| BRPOPLPUSH | 𐄂                | -             | Pops the last element from a list, pushes it to another list, and returns it; blocks until an element is available.(DEPRECATED) |
| LINDEX     | ✓                | v1.0.0        | Returns the element at a specified index in a list. (`O(N)` operation, do not use it when the list is too long) |
| LINSERT    | ✓                | v1.0.0        | Inserts an element before or after another element in a list. (`O(N)` operation, do not use it when the list is too long) |
| LLEN       | ✓                | v1.0.0        | Returns the length of a list.                                                                                 |
| LPOP       | ✓                | v1.0.0        | Removes and returns the first element of a list.                                                              |
| LPUSH      | ✓                | v1.0.0        | Inserts one or more elements at the head of a list.                                                           |
| LPUSHX     | ✓                | v1.0.0        | Inserts an element at the head of a list, only if the list exists.                                            |
| LRANGE     | ✓                | v1.0.0        | Returns a range of elements from a list.                                                                      |
| LREM       | ✓                | v1.0.0        | Removes elements from a list that match a specified value. (`O(N)` operation, do not use it when the list is too long) |
| LSET       | ✓                | v1.0.0        | Sets the value of an element in a list by its index.                                                          |
| LTRIM      | ✓                | v1.0.0        | Trims a list to the specified range of elements. (`O(N)` operation, do not use it when the list is too long)  |
| RPOP       | ✓                | v1.0.0        | Removes and returns the last element of a list.                                                               |
| RPOPLPUSH  | ✓                | v1.0.0        | Removes the last element from a list and pushes it onto another list.                                         |
| RPUSH      | ✓                | v1.0.0        | Inserts one or more elements at the tail of a list.                                                           |
| RPUSHX     | ✓                | v1.0.0        | Inserts an element at the tail of a list, only if the list exists.                                            |
| LMOVE      | ✓                | v2.1.0        | Atomically transfers the first/last element of a list to the first/last element of another list.              |
| BLMOVE     | ✓                | v2.6.0        | Blocks and then atomically transfers the first/last element of a list to the first/last element of another list. |
| LPOS       | ✓                | v2.6.0        | Returns the index of the first matching element in a list.                                                    |
| LMPOP      | ✓                | v2.6.0        | Removes and returns the first or last element(s) of a list.                                                   |
| BLMPOP     | ✓                | v2.7.0        | Blocks and then removes and returns the first or last element(s) of a list.                                   |

## Set commands

| Command     | Supported OR Not | Since Version | Desc                                  |
| ----------- | ---------------- | ------------- | ------------------------------------- |
| SADD        | ✓                | v1.0.0        | Adds one or more members to a set.                                                                           |
| SCARD       | ✓                | v1.0.0        | Returns the number of members in a set.                                                                      |
| SDIFF       | ✓                | v1.0.0        | Returns the difference between sets.                                                                         |
| SDIFFSTORE  | ✓                | v1.0.0        | Stores the difference between sets in a destination set.                                                     |
| SINTER      | ✓                | v1.0.0        | Returns the intersection of sets.                                                                            |
| SINTERCARD  | ✓                | v2.5.0        | Returns the cardinality (number of elements) in the intersection of sets.                                    |
| SINTERSTORE | ✓                | v1.0.0        | Computes the intersection of multiple sets and stores the result in a destination set.                       |
| SISMEMBER   | ✓                | v1.0.0        | Checks if a member is part of a set.                                                                         |
| SMEMBERS    | ✓                | v1.0.0        | Returns all the members in a set.                                                                            |
| SMOVE       | ✓                | v1.0.0        | Moves a member from one set to another.                                                                      |
| SPOP        | ✓                | v1.0.0        | Pop members in the order of keys                                                                             |
| SRANDMEMBER | ✓                | v1.0.0        | Returns one or more random members from a set without removing them. (always first N members if not changed) |
| SREM        | ✓                | v1.0.0        | Removes one or more members from a set.                                                                      |
| SUNION      | ✓                | v1.0.0        | Returns the union of multiple sets.                                                                          |
| SUNIONSTORE | ✓                | v1.0.0        | Computes the union of multiple sets and stores the result in a destination set.                              |
| SSCAN       | ✓                | v1.0.0        | Incrementally iterates over members of a set.                                                                |

## ZSet commands

| Command          | Supported OR Not | Since Version | Description                                                                                             |
| ---------------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| BZMPOP           | ✓                | v2.5.0        | Blocks until one or more elements are popped from one or more sorted sets.                              |
| BZPOPMIN         | ✓                | v2.5.0        | Blocks until the element with the lowest score is popped from one or more sorted sets.                  |
| BZPOPMAX         | ✓                | v2.5.0        | Blocks until the element with the highest score is popped from one or more sorted sets.                 |
| ZADD             | ✓                | v1.0.0        | Adds one or more members to a sorted set, or updates the score of existing members.                     |
| ZCARD            | ✓                | v1.0.0        | Returns the number of members in a sorted set.                                                          |
| ZCOUNT           | ✓                | v1.0.0        | Counts the members in a sorted set with scores within a given range.                                    |
| ZINCRBY          | ✓                | v1.0.0        | Increments the score of a member in a sorted set.                                                       |
| ZINTERSTORE      | ✓                | v1.0.0        | Computes the intersection of multiple sorted sets and stores the result in a destination sorted set.    |
| ZLEXCOUNT        | ✓                | v1.0.0        | Counts the members in a sorted set within a given lexicographical range.                                |
| ZMPOP            | ✓                | v2.5.0        | Removes and returns one or more members with the lowest or highest scores from one or more sorted sets. |
| ZMSCORE          | ✓                | v1.1.20       | Returns the scores of one or more members in a sorted set. (multi ZSCORE)                               |
| ZPOPMIN          | ✓                | v1.0.0        | Removes and returns the member with the lowest score in a sorted set.                                   |
| ZPOPMAX          | ✓                | v1.0.0        | Removes and returns the member with the highest score in a sorted set.                                  |
| ZRANGESTORE      | ✓                | v2.5.0        | Stores a range of members from a sorted set into another sorted set.                                    |
| ZRANGE           | ✓                | v1.0.0        | Returns a range of members in a sorted set, by index.                                                   |
| ZRANGEBYLEX      | ✓                | v1.0.0        | Returns a range of members in a sorted set, by lexicographical range.                                   |
| ZRANGEBYSCORE    | ✓                | v1.0.0        | Returns a range of members in a sorted set, by score.                                                   |
| ZRANK            | ✓                | v1.0.0        | Determines the index of a member in a sorted set, based on score.                                       |
| ZREM             | ✓                | v1.0.0        | Removes one or more members from a sorted set.                                                          |
| ZREMRANGEBYLEX   | ✓                | v1.0.0        | Removes all members in a sorted set within the given lexicographical range.                             |
| ZREMRANGEBYRANK  | ✓                | v1.0.0        | Removes all members in a sorted set within the given index range.                                       |
| ZREMRANGEBYSCORE | ✓                | v1.0.0        | Removes all members in a sorted set within the given score range.                                       |
| ZREVRANK         | ✓                | v1.0.0        | Determines the index of a member in a sorted set, in reverse order, based on score.                     |
| ZREVRANGE        | ✓                | v1.0.0        | Returns a range of members in a sorted set, in reverse order, by index.                                 |
| ZREVRANGEBYLEX   | ✓                | v2.0.5        | Returns a range of members in a sorted set, in reverse order, by lexicographical range.                 |
| ZREVRANGEBYSCORE | ✓                | v1.0.0        | Returns a range of members in a sorted set, in reverse order, by score.                                 |
| ZSCAN            | ✓                | v1.0.0        | Incrementally iterates over elements in a sorted set.                                                   |
| ZSCORE           | ✓                | v1.0.0        | Returns the score of a member in a sorted set.                                                          |
| ZUNION           | ✓                | v2.5.0        | Returns the union of multiple sorted sets.                                                              |
| ZUNIONSTORE      | ✓                | v1.0.0        | Computes the union of multiple sorted sets and stores the result in a destination sorted set.           |
| ZINTER           | ✓                | v2.8.0        | Returns the intersection of multiple sorted sets.                                                       |
| ZINTERCARD       | ✓                | v2.8.0        | Computes the cardinality (number of elements) in the intersection of multiple sorted sets.              |
| ZRANDMEMBER      | ✓                | v2.8.0        | Returns one or more random members from a sorted set.                                                   |

## Key commands

| Command     | Supported OR Not | Since Version | Desc                                                                                                         |
| ----------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| DEL         | ✓                | v1.0.0        | Deletes one or more keys.                                                                                    |
| EXISTS      | ✓                | v1.0.0        | Checks if a key exists.                                                                                      |
| EXPIRE      | ✓                | v1.0.0        | Sets a key's time to live in seconds.                                                                        |
| EXPIREAT    | ✓                | v1.0.0        | Sets a key's time to live based on a Unix timestamp.                                                         |
| EXPIRETIME  | ✓                | v2.8.0        | Returns the expiration Unix timestamp of a key.                                                              |
| PEXPIRETIME | ✓                | v2.8.0        | Returns the expiration Unix timestamp of a key in milliseconds.                                              |
| KEYS        | ✓                | v1.0.0        | Returns all keys matching a pattern.                                                                         |
| PERSIST     | ✓                | v1.0.0        | Removes the expiration from a key.                                                                           |
| PEXPIRE     | ✓                | v1.0.0        | Sets a key's time to live in milliseconds. (Precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033))) |
| PEXPIREAT   | ✓                | v1.0.0        | Sets a key's time to live based on a Unix timestamp in milliseconds. (Precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033))) |
| PTTL        | ✓                | v1.0.0        | Returns the remaining time to live of a key in milliseconds. (precision is in seconds if old encoding is used (see [#1033](https://github.com/apache/kvrocks/issues/1033))) |
| TTL         | ✓                | v1.0.0        | Returns the remaining time to live of a key in seconds.                                                      |
| OBJECT      | ✓                | v1.0.1        | This is a container command for object introspection commands.                                               |
| TYPE        | ✓                | v1.0.0        | Returns the data type of the value stored at a key.                                                          |
| SCAN        | ✓                | v1.0.0        | Incrementally iterates over keys in the keyspace.                                                            |
| RENAME      | ✓                | v2.8.0        | Renames a key.                                                                                               |
| RENAMENX    | ✓                | v2.8.0        | Renames a key only if the new key does not exist.                                                            |
| RANDOMKEY   | ✓                | v1.0.0        | Returns a random key from the keyspace.                                                                      |
| UNLINK      | ✓                | v2.1.0        | Asynchronously deletes a key (non-blocking).                                                                 |
| MOVE        | ✓                | v2.6.0        | Moves a key to another database. (If the key does not exist, the command returns 0, otherwise it will always return 1)             |
| MOVEX       | ✓                | v2.9.0        | Move a key between namespaces, see [#2225](https://github.com/apache/kvrocks/pull/2225)                      |
| COPY        | ✓                | v2.9.0        | Copies a key to a new key.                                                                                   |
| SORT        | ✓                | v2.9.0        | Sorts the elements in a list, set, or sorted set.                                                            |

### OBJECT subcommands

These commands are subcommands for `OBJECT`, using as `OBJECT DUMP` etc.

| SUBCOMMAND | Supported OR Not | Since Version | Description                                                                                                   |
| ---------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| DUMP       | ✓                | v1.0.1        | Dump the detailed information of the key.                                                                     |
| ENCODING   | x                | -             | Returns the internal encoding of a object.                                                                    |
| FREQ       | x                | -             | Returns the logarithmic access frequency counter of a object.                                                 |
| IDLETIME   | x                | -             | Returns the time since the last access to a object.                                                           |
| REFCOUNT   | x                | -             | Returns the reference count of a value of  key.                                                               |

## Bit commands

| Command     | Supported OR Not | Since Version | Description                                                                                                  |
| ----------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| GETBIT      | ✓                | v1.0.0        | Returns the bit value at a specified offset in the string stored at a key.                                   |
| SETBIT      | ✓                | v1.0.0        | Sets or clears the bit at a specified offset in the string stored at a key.                                  |
| BITCOUNT    | ✓                | v1.0.0        | Counts the number of set bits (1s) in a string.                                                              |
| BITPOS      | ✓                | v1.0.0        | Returns the position of the first bit set to 1 or 0 in a string.                                             |
| BITFIELD    | ✓                | v2.7.0        | Performs arbitrary bitfield operations on string values.                                                     |
| BITFIELD_RO | ✓                | v2.8.0        | Reads the values of specific bit fields in a string without modifying them (read-only variant of BITFIELD).  |
| BITOP       | ✓                | v2.1.0        | Performs bitwise operations (AND, OR, XOR, NOT) on multiple keys containing string values and stores the result in a destination key. |

### BITFIELD subcommands

These commands are subcommands for `BITFIELD`, using as `BITFIELD key GET` etc.

| SUBCOMMAND | Supported OR Not | Since Version | Description                                                                                                   |
| ---------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| GET        | ✓                | v2.7.0        | Returns the specified bit field.                                                                              |
| SET        | ✓                | v2.7.0        | Set the specified bit field and returns its old value.                                                        |
| INCRBY     | ✓                | v2.7.0        | Increments or decrements (if a negative increment is given) the specified bit field and returns the new value.|
| OVERFLOW   | ✓                | v2.7.0        | Changes the behavior of successive INCRBY and SET subcommands calls by setting the overflow behavior: (WRAP/ SAT/ FAIL).  |

### BITFIELD_RO subcommands

These commands are subcommands for `BITFIELD_RO`, using as `BITFIELD_RO key GET` etc.

| SUBCOMMAND | Supported OR Not | Since Version | Description                                                                                                   |
| ---------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| GET       | ✓                | v2.8.0        | Read-only variant of the BITFIELD command, can safely be used in read-only replicas.                           |

:::note

String and bitmap are different types in Kvrocks, so you _cannot_ do bit operations with string, and vice versa.

:::

## Script commands

| Command    | Supported OR Not | Since Version | Description                                                                                                   |
| ---------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| EVAL       | ✓                | v2.0.4        | Executes a Lua script server-side, accepting keys and arguments as parameters.                                |
| EVALSHA    | ✓                | v2.0.4        | Executes a Lua script using its SHA1 hash, which is useful when the script is already cached on the server.   |
| EVAL_RO    | ✓                | v2.2.0        | Executes a Lua script server-side in read-only mode, allowing it in replica instances (similar to EVAL, but read-only). |
| EVALSHA_RO | ✓                | v2.2.0        | Executes a Lua script in read-only mode using its SHA1 hash (similar to EVALSHA, but read-only).              |
| SCRIPT     | ✓                | v2.0.4        | Manages the Redis script cache, with subcommands for loading, flushing, and checking for script existence. (SCRIPT KILL and DEBUG subcommand are not supported) |

## PubSub commands

| Command      | Supported OR Not | Since Version | Description                                                                                                 |
| ------------ | ---------------- | ------------- | ----------------------------------------------------------------------------------------------------------- |
| PSUBSCRIBE   | ✓                | v1.0.0        | Subscribes to channels using pattern matching. Receives messages sent to channels that match the pattern.   |
| PUBLISH      | ✓                | v1.0.0        | Sends a message to a specific channel.                                                                      |
| MPUBLISH     | ✓                | v2.6.0        | Publishes a message to multiple channels at once.                                                           |
| PUBSUB       | ✓                | v1.0.0        | Provides information about the current Pub/Sub system, including channels and subscriptions.                |
| PUNSUBSCRIBE | ✓                | v1.0.0        | Unsubscribes from channels using pattern matching, stopping the receipt of messages.                        |
| SUBSCRIBE    | ✓                | v1.0.0        | Subscribes to a specific channel to receive messages sent to that channel.                                  |
| UNSUBSCRIBE  | ✓                | v1.0.0        | Unsubscribes from one or more channels, stopping the receipt of messages.                                   |
| SSUBSCRIBE   | ✓                | v2.8.0        | Subscribes the client to the specified shard channels.                                                      |
| SUNSUBSCRIBE | ✓                | v2.8.0        | Unsubscribes the client from the specified shard channels.                                                  |

### PUBSUB subcommands

These commands are subcommands for `PUBSUB`, using as `PUBSUB CHANNELS` etc.

| SUBCOMMAND    | Supported OR Not | Since Version | Description                                                                                                   |
| ------------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| CHANNELS      | ✓                | v1.0.0        | Returns the active channels.                                                                                  |
| NUMPAT        | ✓                | v1.0.0        | Returns a count of the unique pattern subscriptions.                                                          |
| NUMSUB        | ✓                | v1.0.0        | Returns a count of subscribers to channels.                                                                   |
| SHARDCHANNELS | ✓                | v1.0.0        | Returns the active shared channels.                                                                           |
| SHARDNUMSUB   | ✓                | v1.0.0        | Returns the count of subscribers of shard channels.                                                           |

## Transaction commands

| Command | Supported OR Not | Since Version | Description                                                                                                      |
| ------- | ---------------- | ------------- | ---------------------------------------------------------------------------------------------------------------- |
| MULTI   | ✓                | v2.0.2        | Marks the start of a transaction block in Redis.                                                                 |
| EXEC    | ✓                | v2.0.2        | Executes all commands issued after a MULTI command in a transaction.                                             |
| DISCARD | ✓                | v2.0.2        | Cancels a transaction block, discarding all queued commands.                                                     |
| WATCH   | ✓                | v2.4.0        | Watches one or more keys for changes, allowing for conditional transactions.                                     |
| UNWATCH | ✓                | v2.4.0        | Cancels the effect of all WATCH commands, making the transaction unconditional.                                  |

## SortedInt commands

| Command           | Supported OR Not | Since Version | Description                                                                                            |
| ----------------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------ |
| SICARD            | ✓                | v1.0.2        | Returns the number of elements in a sorted integer set. (similar to SCARD)                             |
| SIADD             | ✓                | v1.0.2        | Adds one or more integers to a sorted integer set. (like SADD, but members are integers)               |
| SIREM             | ✓                | v1.0.2        | Removes one or more integers from a sorted integer set. (like SREM, but members are integers)          |
| SIRANGE           | ✓                | v1.0.2        | Returns a range of elements from a sorted integer set by index. (`SIRANGE key offset count cursor since_id`) |
| SIREVRANGE        | ✓                | v1.0.2        | Returns a range of elements from a sorted integer set by index, in reverse order. (`SIREVRANGE key offset count cursor max_id`)  |
| SIEXISTS          | ✓                | v1.1.20       | Checks if an integer exists in a sorted integer set. (`SIEXISTS key member1 [member2 ...]`)            |
| SIRANGEBYVALUE    | ✓                | v1.1.31       | Returns elements in a sorted integer set within a specified range of values. (`SIRANGEBYVALUE key min max [LIMIT offset count]`) |
| SIREVRANGEBYVALUE | ✓                | v1.1.31       | Returns elements in a sorted integer set within a specified range of values, in reverse order. (`SIREVRANGEBYVALUE key max min [LIMIT offset count]`) |

## Cluster commands

| SUBCOMMAND | Supported OR Not | Since Version | Description                                                                                                   |
| ---------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| CLUSTER    | ✓                | v2.0.2        | Provides a range of subcommands to manage and query a Redis Cluster.                                          |
| CLUSTERX   | ✓                | v2.0.2        | A specialized command set used for managing cluster topology in a controlled manner.                          |
| READONLY   | ✓                | v2.9.0        | In a Redis Cluster, marks the client as read-only, allowing it to read data from replicas.                    |
| READWRITE  | ✓                | v2.9.0        | Resets the client from read-only mode back to the default read-write mode.                                    |
| ASKING     | ✓                | v2.9.0        | Used during a manual resharding process to indicate that the client should accept redirection to a new master node without changing its hash slot mapping.  |

### CLUSTER subcommands

These commands are subcommands for `CLUSTER`, using as `CLUSTER INFO` etc.

| SUBCOMMAND | Supported OR Not | Since Version | Description                                                                                                   |
| ---------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| INFO       | ✓                | v2.0.2        | Provides information about the state of the cluster.                                                          |
| NODES      | ✓                | v2.0.2        | Returns the current nodes and their status in the cluster.                                                    |
| SLOTS      | ✓                | v2.0.2        | Lists all slots and their associated nodes.                                                                   |
| KEYSLOT    | ✓                | v2.0.2        | Returns the hash slot for a given key.                                                                        |
| RESET      | ✓                | v2.9.0        | Resets a node's cluster state, making it forget its cluster configuration.                                    |
| REPLICAS   | ✓                | v2.9.0        | Lists the replicas for a specific node in the cluster.                                                        |

### CLUSTERX subcommands

These commands are subcommands for `CLUSTERX`, using as `CLUSTERX VERSION` etc.

| SUBCOMMAND | Supported OR Not | Since Version | Description                                                                                                   |
| ---------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| VERSION    | ✓                | v2.0.2        | Displays the version of the CLUSTERX command set or protocol.                                                 |
| SETNODEID  | ✓                | v2.0.2        | Sets or updates the node ID in the cluster configuration.                                                     |
| SETNODES   | ✓                | v2.0.2        | Configures the nodes in the cluster, often used for initializing or changing the cluster's topology.          |
| SETSLOT    | ✓                | v2.0.6        | Manages slot assignments, moving slots between nodes.                                                         |
| MIGRATE    | ✓                | v2.0.6        | Migrate slots between cluster nodes. |

:::note

To guarantee the correctness of client SDK, we rename the `CLUSTER` command to `CLUSTERX` to prevent the topology can being modified casually, but we can still use the `CLUSTER` command to fetch the cluster topology information.

:::

## Server commands

| Command     | Supported OR Not | Since Version | Description                                                                                                  |
| ----------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| BGSAVE      | ✓                | v1.0.0        | Initiates a background save of the dataset to disk.                                                          |
| LASTSAVE    | ✓                | v2.6.0        | Returns the timestamp of the last successful save to disk. Additionally, `LASTSAVE ISO8601` returns the time in ISO8601 format. |
| PING        | ✓                | v1.0.0        | Checks if the server is alive, responding with "PONG."                                                       |
| SELECT      | ✓                | v1.0.0        | simply returns OK.                                                                                           |
| ECHO        | ✓                | v2.0.6        | Echoes back the input string, useful for testing.                                                            |
| MONITOR     | ✓                | v1.0.0        | Streams every command processed by the server in real time.                                                  |
| SHUTDOWN    | ✓                | v1.0.0        | Stops the server, optionally saving the dataset to disk.                                                     |
| INFO        | ✓                | v1.0.0        | Provides detailed information about the server.                                                              |
| ROLE        | ✓                | v1.1.30       | Displays the role of the instance (master, slave, etc.)                                                      |
| CONFIG      | ✓                | v1.0.0        | Manages the server's configuration parameters.                                                               |
| DBSIZE      | ✓                | v1.0.0        | Returns the number of keys in the currently selected database.                                               |
| DISK        | ✓                | v2.2.0        | `DISK USAGE user_key` to get the disk usage of the `user_key`, see [#874](https://github.com/apache/kvrocks/issues/874) |
| MEMORY      | ✓                | v2.4.0        | MEMORY USAGE command is an alias to DISK USAGE command.                                                      |
| DEBUG       | ✓                | v1.3.0        | A collection of debugging commands for developers and administrators. (Only DEBUG SLEEP is supported.)       |
| NAMESPACE   | ✓                | v1.0.0        | Used to manage namespaces.                                                                                   |
| FLUSHDB     | ✓                | v1.0.0        | Removes all keys from the currently selected database.                                                       |
| FLUSHALL    | ✓                | v1.0.0        | Removes all keys from all databases.                                                                         |
| FLUSHBACKUP | ✓                | v1.3.1        | Flushes backup data.                                                                                         |
| COMMAND     | ✓                | v2.0.1        | Returns details about available commands.                                                                    |
| CLIENT      | ✓                | v1.0.0        | Manages client connections and their settings.                                                               |
| AUTH        | ✓                | v1.0.0        | Authenticates a client to the server with a password.                                                        |
| QUIT        | ✓                | v1.0.0        | Closes the connection with the server.                                                                       |
| SLAVEOF     | ✓                | v1.0.0        | Configures the server to replicate from a specified master.                                                  |
| REPLICAOF   | ✓                | v2.11.0       | Configures the server to replicate from a specified master.                                                  |
| SLOWLOG     | ✓                | v1.0.0        | Manages and retrieves the slow query log.                                                                    |
| PERFLOG     | ✓                | v1.0.0        | Manages performance logging.                                                                                 |
| HELLO       | ✓                | v2.2.0        | Negotiates the protocol version with the server.                                                             |
| TIME        | ✓                | v2.4.0        | Returns the current server time as a Unix timestamp and microseconds.                                        |
| STATS       | ✓                | v1.0.0        | Dump the RocksDB statistics in JSON format.                                                                  |
| RESTORE     | ✓                | v2.6.0        | Create the new key with Redis serialized value, now supports String/List/Hash/Set/ZSet data types            |
| COMPACT     | ✓                | v1.0.0        | Compacts database storage. (RocksDB)                                                                         |
| RDB         | ✓                | v2.7.0        | RDB LOAD command is used to load RocksDB file from local path into Kvrocks                                   |
| DUMP        | ✓                | v2.9.0        | Serializes a key and returns it to the client.                                                               |

:::note

The db size is updated async after execute `DBSIZE SCAN` command.

:::

### COMMAND subcommands

These commands are subcommands for `COMMAND`, using as `COMMAND COUNT` etc.

| SUBCOMMAND | Supported OR Not | Since Version | Description                                                                                                   |
| ---------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| COUNT      | ✓                | v2.0.1        | Returns a count of commands.                                                                                  |
| GETKEYS    | ✓                | v2.0.1        | Extracts the key names from an arbitary command.                                                              |
| INFO       | ✓                | v2.0.1        | Returns information about one, multiple or all commands.                                                      |

### CONFIG subcommands

These commands are subcommands for `CONFIG`, using as `CONFIG GET` etc.

| SUBCOMMAND | Supported OR Not | Since Version | Description                                                                                                   |
| ---------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| GET        | ✓                | v1.0.0        | Returns the effective values of configuration parameters.                                                     |
| SET        | ✓                | v1.0.0        | Sets configuration parameters in-flight.                                                                      |
| REWRITE    | ✓                | v1.0.0        | Persists the effective configuration to the file.                                                             |
| RESETSTAT  | x                | -             | Resets the server's statistics.                                                                               |

### CLIENT subcommands

These commands are subcommands for `CLIENT`, using as `CLIENT INFO` etc.

| SUBCOMMAND   | Supported OR Not | Since Version | Description                                                                                                   |
| ------------ | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| CACHING      | x                | -             | Instructs the server whether to track the keys in the next request.                                           |
| GETNAME      | ✓                | v1.0.0        | Returns the name of the connection.                                                                           |
| GETREDIR     | x                | -             | Returns the client ID to which the connection's tracking notifications are redirected.                        |
| ID           | ✓                | v1.0.0        | Returns the unique client ID of the connection.                                                               |
| INFO         | ✓                | v2.4.0        | Returns information about the connection.                                                                     |
| KILL         | ✓                | v1.0.0        | Terminates open connections.                                                                                  |
| LIST         | ✓                | v1.0.0        | List open connections.                                                                                        |
| NO-EVICT     | x                | -             | Set the client eviction mode of the connection.                                                               |
| NO-TOUCH     | x                | -             | Controls whether commands sent by the client affect the LRU/LFU of the accessed keys.                         |
| PAUSE        | x                | -             | Suspends commands processing.                                                                                 |
| REPLY        | x                | -             | Instructs the server whether to reply to commands.                                                            |
| SETINFO      | x                | -             | Sets information specific to the client or connection.                                                        |
| SETNAME      | ✓                | v1.0.0        | Sets the connection name.                                                                                     |
| TRACKING     | x                | -             | Controls server-assisted client-side caching for the connection.                                              |
| TRACKINGINFO | x                | -             | Returns information about the server-assisted client-side caching for the connection.                         |
| UNBLOCK      | x                | -             | Unblocks a client blocked by a blocking command from a different connection.                                  |
| UNPAUSE      | x                | -             | Resumes processing commands from paused clients.                                                              |

### SLOWLOG subcommands

These commands are subcommands for `SLOWLOG`, using as `SLOWLOG GET` etc.

| SUBCOMMAND | Supported OR Not | Since Version | Description                                                                                                   |
| ---------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| GET        | ✓                | v1.0.0        | Returns the slow log's entries.                                                                               |
| LEN        | ✓                | v1.0.0        | Returns the number of entries in the slow log.                                                                |
| RESET      | ✓                | v1.0.0        | Clears all entries from the slow log.                                                                         |

## GEO commands

| Command              | Supported OR Not | Since Version | Description                                                                                         |
| -------------------- | ---------------- | ------------- | --------------------------------------------------------------------------------------------------- |
| GEOADD               | ✓                | v1.1.12       | Adds geospatial items (latitude, longitude, and member) to a geospatial index (a sorted set).       |
| GEODIST              | ✓                | v1.1.12       | Returns the distance between two members of a geospatial index.                                     |
| GEOHASH              | ✓                | v1.1.12       | Returns the Geohash representation of one or more members in a geospatial index.                    |
| GEOPOS               | ✓                | v1.1.12       | Returns the longitude and latitude of one or more members in a geospatial index.                    |
| GEORADIUS            | ✓                | v1.1.12       | Returns members of a geospatial index within a radius around a given point.                         |
| GEORADIUS_RO         | ✓                | v1.1.12       | A read-only variant of GEORADIUS, for use with read replicas.                                       |
| GEORADIUSBYMEMBER    | ✓                | v1.1.12       | Returns members of a geospatial index within a radius around a member's location.                   |
| GEORADIUSBYMEMBER_RO | ✓                | v1.1.12       | A read-only variant of GEORADIUSBYMEMBER, for use with read replicas.                               |
| GEOSEARCH            | ✓                | v2.6.0        | Performs more complex geospatial searches, supporting multiple criteria like bounding boxes and ordering by distance.   |
| GEOSEARCHSTORE       | ✓                | v2.6.0        | Stores the result of a GEOSEARCH query in a new key.                                                |

## Stream commands

| Command    | Supported OR Not | Since Version | Description                                                                                                   |
| ---------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| XADD       | ✓                | v2.2.0        | Appends a new entry to a stream.                                                                              |
| XDEL       | ✓                | v2.2.0        | Removes one or more entries from a stream by ID.                                                              |
| XINFO      | ✓                | v2.2.0        | Provides information about STREAM only.                                                                       |
| XLEN       | ✓                | v2.2.0        | Returns the number of entries in a stream.                                                                    |
| XRANGE     | ✓                | v2.2.0        | Returns a range of entries from a stream, within a specified ID range.                                        |
| XREAD      | ✓                | v2.2.0        | Reads entries from one or more streams.                                                                       |
| XREVRANGE  | ✓                | v2.2.0        | Returns a range of entries from a stream in reverse order.                                                    |
| XTRIM      | ✓                | v2.2.0        | Trims a stream to a specified number of entries or to a maximum ID.                                           |
| XCLAIM     | ✓                | v2.10.0       | Changes the ownership of pending stream entries to a different consumer.                                      |
| XAUTOCLAIM | ✓                | v2.10.0       | Automatically claims pending entries in a stream, returning them to a consumer.                               |
| XGROUP     | ✓                | v2.10.0       | Manages consumer groups for streams.                                                                          |
| XPENDING   | ✓                | v2.10.0       | Shows information about pending entries in a stream for a specific consumer group.                            |
| XREADGROUP | ✓                | v2.10.0       | Reads entries from a stream as part of a consumer group.                                                      |
| XACK       | ✓                | v2.10.0       | Acknowledges the processing of one or more entries in a stream.                                               |
| XSETID     | ✓                | v2.3.0        | Sets the last delivered ID of a stream to a specific value.                                                   |

## BloomFilter commands

| Command    | Supported OR Not | Since Version | Description                                                                                                   |
| ---------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| BF.RESERVE | ✓                | v2.6.0        | Creates a new Bloom filter with specified parameters.                                                         |
| BF.ADD     | ✓                | v2.6.0        | Adds an item to a Bloom filter.                                                                               |   
| BF.EXISTS  | ✓                | v2.6.0        | Checks if an item may exist in the Bloom filter.                                                              |
| BF.CARD    | ✓                | v2.6.0        | Returns the number of unique elements that were added to the filter.                                          |
| BF.INFO    | ✓                | v2.6.0        | Returns information about the Bloom filter's configuration and status.                                        |
| BF.MADD    | ✓                | v2.6.0        | Adds multiple items to a Bloom filter.                                                                        |
| BF.INSERT  | ✓                | v2.7.0        | Adds one or more items to a Bloom filter, with the option to create a filter if it doesn't exist.             |
| BF.MEXISTS | ✓                | v2.6.0        | Checks if multiple items may exist in the Bloom filter.                                                       |

## Function commands

| Command  | Supported OR Not | Since Version | Description                                                                                                     |
| -------- | ---------------- | ------------- | --------------------------------------------------------------------------------------------------------------- |
| FUNCTION | ✓                | v2.7.0        | Manages functions in Redis, including loading, listing, and deleting functions.                                 |
| FCALL    | ✓                | v2.7.0        | Calls a function by its name with specified arguments, allowing for custom script execution.                    |
| FCALL_RO | ✓                | v2.7.0        | Calls a read-only function, ensuring it does not modify data, suitable for use in replicas.                     |

:::note

Currently only `LOAD`, `DELETE`, `LIST` subcommands are supported in `FUNCTION`.
In addition, `LISTFUNC` subcommand is added as an extension to list all functions and their libraries in which they are located.

:::

## JSON commands

| Command        | Supported OR Not | Since Version | Description                                                                                               |
| -------------- | ---------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| JSON.ARRAPPEND | ✓                | v2.7.0        | Appends elements to a JSON array.                                                                         |
| JSON.ARRINDEX  | ✓                | v2.7.0        | Searches for the first occurrence of a value in a JSON array.                                             |
| JSON.ARRINSERT | ✓                | v2.7.0        | Inserts an element into a JSON array at a specified index.                                                |
| JSON.ARRLEN    | ✓                | v2.7.0        | Returns the length of a JSON array.                                                                       |
| JSON.ARRPOP    | ✓                | v2.7.0        | Removes and returns an element from a JSON array by index.                                                |
| JSON.ARRTRIM   | ✓                | v2.7.0        | Trims a JSON array to the specified range.                                                                |
| JSON.CLEAR     | ✓                | v2.7.0        | Clears the contents of a JSON object or array, leaving it empty.                                          |
| JSON.DEL       | ✓                | v2.7.0        | Deletes a JSON value.                                                                                     |
| JSON.FORGET    | ✓                | v2.7.0        | Alias for `JSON.DEL`, removes a JSON key.                                                                 |
| JSON.GET       | ✓                | v2.7.0        | Retrieves a JSON value by key.                                                                            |
| JSON.MERGE     | ✓                | v2.7.0        | Merges two JSON documents into one.                                                                       |
| JSON.MGET      | ✓                | v2.8.0        | Retrieves JSON values from multiple keys.                                                                 |
| JSON.MSET      | ✓                | v2.9.0        | Sets JSON values at multiple keys.                                                                        |
| JSON.NUMINCRBY | ✓                | v2.7.0        | Increments a numeric value in a JSON document.                                                            |
| JSON.NUMMULTBY | ✓                | v2.7.0        | Multiplies a numeric value in a JSON document.                                                            |
| JSON.OBJKEYS   | ✓                | v2.7.0        | Returns the keys in a JSON object.                                                                        |
| JSON.OBJLEN    | ✓                | v2.7.0        | Returns the number of keys in a JSON object.                                                              |
| JSON.RESP      | ✓                | v2.10.0       | Converts a JSON value to RESP (Redis Serialization Protocol) format.                                      |
| JSON.SET       | ✓                | v2.7.0        | Sets the value of a JSON key.                                                                             |
| JSON.STRAPPEND | ✓                | v2.7.0        | Appends a string to a value in a JSON document.                                                           |
| JSON.STRLEN    | ✓                | v2.7.0        | Returns the length of a string in a JSON document.                                                        |
| JSON.TOGGLE    | ✓                | v2.7.0        | Toggles a boolean value in a JSON document.                                                               |
| JSON.TYPE      | ✓                | v2.7.0        | Returns the type of a JSON value (e.g., object, array, string).                                           |
| JSON.DEBUG     | ✓                | v2.9.0        | Provides debugging information about a JSON value. (supported subcommands: MEMORY)                        |

## Search commands

| Command        | Supported OR Not | Since Version | Description                                                                                               |
| -------------- | ---------------- | ------------- | --------------------------------------------------------------------------------------------------------- |    
| FT.CREATE      | ✓                | v2.11.0       | Creates a new full-text search index.                                                                     |
| FT.DROPINDEX   | ✓                | v2.11.0       | Deletes a full-text search index.                                                                         |
| FT.INFO        | ✓                | v2.11.0       | Provides information about a full-text search index.                                                      |
| FT._LIST       | ✓                | v2.11.0       | Lists all available full-text search indexes.                                                             |
| FT.SEARCH      | ✓                | v2.11.0       | Searches a full-text index for documents matching a query.                                                |
| FT.SEARCHSQL   | ✓                | v2.11.0       | Extension for SQL queries: `FT.SEARCHSQL <sql>`                                                           |
| FT.EXPLAIN     | ✓                | v2.11.0       | Explains how a full-text search query is executed.                                                        |
| FT.EXPLAINSQL  | ✓                | v2.11.0       | Extension for SQL queries: `FT.EXPLAINSQL <sql>`                                                          |
| FT.TAGVALS     | ✓                | v2.11.0       | Returns all distinct tags in a tag index.                                                                 |

## HyperLogLog commands

| Command        | Supported OR Not | Since Version | Description                                                                                               |
| -------------- | ---------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| PFADD          | ✓                | v2.10.0       | Adds elements to a HyperLogLog data structure.                                                            |
| PFCOUNT        | ✓                | v2.10.0       | Returns the approximate cardinality (number of unique elements) in a HyperLogLog.                         |
| PFMERGE        | ✓                | v2.10.0       | Merges multiple HyperLogLog structures into a single structure.                                           |

## TDigest commands

| Command             | Supported OR Not | Since Version | Description                                                |
| ------------------- | ---------------- | ------------- | ---------------------------------------------------------- |
| TDIGEST.CREATE      | ✓                | unstable      |                                                            |
| TDIGEST.INFO        | ✓                | unstable      |                                                            |
| TDIGEST.ADD         | ✓                | unstable      |                                                            |
| TDIGEST.MIN         | ✓                | unstable      |                                                            |
| TDIGEST.MAX         | ✓                | unstable      |                                                            |
| TDIGEST.RESET       | ✓                | unstable      |                                                            |
