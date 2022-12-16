# INFO sections

The INFO command returns information and statistics about the server in a format that is simple to parse by computers and easy to read by humans.

The optional section parameter can be used to select a specific section of information in form `INFO section section ...`:

| Parameter    | Desc                                         |
|--------------|----------------------------------------------|
| server       | General information about the Kvrocks server |
| clients      | Client connections information               |
| memory       | Memory consumption related information       |
| stats        | General statistics                           |
| replication  | Master/replica replication information       |
| cpu          | CPU consumption statistics                   |
| commandstats | Kvrocks command statistics                   |
| keyspace     | Database related statistics                  |
| rocksdb      | RocksDB related statistics                   |

### Return value

The return value of `INFO` command is bulk string: as a collection of text lines.

Lines can contain a section name (starting with a # character) or a property. All the properties are in the form of `field:value` terminated by an empty line.

Sample return value:

```properties
# Server
version:999.999.999
git_sha1:d2c0afb
os:Darwin 19.4.0 x86_64
gcc_version:4.2.1
arch_bits:64
process_id:1467
tcp_port:6666
uptime_in_seconds:8
uptime_in_days:0

# Clients
connected_clients:1
monitor_clients:0
# Memory
used_memory_rss:19558400
used_memory_human:18.65M
used_memory_lua:35840
used_memory_lua_human:35.00K

# Persistence
loading:0

# Stats
total_connections_received:1
total_commands_processed:2
instantaneous_ops_per_sec:0
total_net_input_bytes:23
total_net_output_bytes:8231
instantaneous_input_kbps:0
instantaneous_output_kbps:0
sync_full:0
sync_partial_ok:0
sync_partial_err:0
pubsub_channels:0
pubsub_patterns:0

# Replication
role:master
connected_slaves:0
master_repl_offset:0

# CPU
used_cpu_sys:0
used_cpu_user:0

# Commandstats
cmdstat_command:calls=1,usec=904,usec_per_call=904
cmdstat_info:calls=1,usec=0,usec_per_call=0

# Keyspace
# Last scan db time: Thu Jan  1 08:00:00 1970
db0:keys=0,expires=0,avg_ttl=0,expired=0
sequence:0
used_db_size:0
max_db_size:0
used_percent: 0%
disk_capacity:499963174912
used_disk_size:266419978240
used_disk_percent: 53%

# RocksDB
estimate_keys[default]:0
block_cache_usage[default]:0
block_cache_pinned_usage[default]:0
index_and_filter_cache_usage:[default]:0
estimate_keys[metadata]:0
block_cache_usage[metadata]:0
block_cache_pinned_usage[metadata]:0
index_and_filter_cache_usage:[metadata]:0
estimate_keys[zset_score]:0
block_cache_usage[zset_score]:0
block_cache_pinned_usage[zset_score]:0
index_and_filter_cache_usage:[zset_score]:0
estimate_keys[pubsub]:0
block_cache_usage[pubsub]:0
block_cache_pinned_usage[pubsub]:0
index_and_filter_cache_usage:[pubsub]:0
estimate_keys[propagate]:0
block_cache_usage[propagate]:0
block_cache_pinned_usage[propagate]:0
index_and_filter_cache_usage:[propagate]:0
all_mem_tables:3520
cur_mem_tables:3520
snapshots:0
num_immutable_tables:0
num_running_flushes:0
memtable_flush_pending:0
compaction_pending:0
num_running_compactions:0
num_live_versions:5
num_superversion:5
num_background_errors:0
flush_count:0
compaction_count:0
is_bgsaving:no
is_compacting:no
```

## Server section

Here is the meaning of all fields in the server section:

| Property          | Desc                                                           |
|-------------------|----------------------------------------------------------------|
| version           | Version of the Kvrocks server                                  |
| git_sha1          | Git SHA1                                                       |
| os                | Operating system hosting the Kvrocks server                    |
| arch_bits         | Architecture (32 or 64 bits)                                   |
| gcc_version       | Version of the GCC compiler used to compile the Kvrocks server |
| process_id        | PID of the server process                                      |
| tcp_port          | TCP/IP listen port                                             |
| uptime_in_seconds | Number of seconds since Kvrocks server start                   |
| uptime_in_days    | Same value expressed in days                                   |

## Clients section

Here is the meaning of all fields in the clients section:

| Property          | Desc                                                               |
|-------------------|--------------------------------------------------------------------|
| connected_clients | Number of client connections (excluding connections from replicas) |
| monitor_clients   | Number of monitor client connections                               |

## Memory section

Here is the meaning of all fields in the memory section:

| Property              | Desc                                                                                                                                                             |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| used_memory_rss       | Number of bytes that Kvrocks allocated as seen by the operating system (a.k.a resident set size). This is the number reported by tools such as top(1) and ps(1). |
| used_memory_rss_human | Human-readable representation of previous value                                                                                                                  |
| used_memory_lua       | Number of bytes used by the Lua engine                                                                                                                           |
| used_memory_lua_human | Human-readable representation of previous value                                                                                                                  |

## Stats section

Here is the meaning of all fields in the stats section:

| Property                   | Desc                                                        |
|----------------------------|-------------------------------------------------------------|
| total_connections_received | Total number of connections accepted by the server          |
| total_commands_processed   | Total number of commands processed by the server            |
| instantaneous_ops_per_sec  | Number of commands processed per second                     |
| total_net_input_bytes      | The total number of bytes read from the network             |
| total_net_output_bytes     | The total number of bytes written to the network            |
| instantaneous_input_kbps   | The network's read rate per second in KB/sec                |
| instantaneous_output_kbps  | The network's write rate per second in KB/sec               |
| sync_full                  | The number of full resyncs with replicas                    |
| sync_partial_ok            | The number of accepted partial resync requests              |
| sync_partial_err           | The number of denied partial resync requests                |
| pubsub_channels            | Global number of pub/sub channels with client subscriptions |
| pubsub_patterns            | Global number of pub/sub pattern with client subscriptions  |

## CommandStats section

The commandstats section provides statistics based on the command type, including the number of calls that reached command execution, the total CPU time consumed by these commands, the average CPU consumed per command execution.

For each command type, the following line is added:

```properties
cmdstat_XXX:calls=XXX,usec=XXX,usec_per_call=XXX
```

## Persistence section

Here is the meaning of all fields in the replication section:

| Property | Desc                                                     |
|----------|----------------------------------------------------------|
| loading  | Flag indicating if the restore of the backup is on-going |

## Replication section

Here is the meaning of all fields in the replication section:

| Property           | Desc                                                                                                                                                                                                 |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| role               | Value is "master" if the instance is replica of no one, or "slave" if the instance is a replica of some master instance. Note that a replica can be master of another replica (chained replication). |
| master_repl_offset | The server's current replication offset                                                                                                                                                              |

If the instance is a replica, these additional fields are provided:

| Property                   | Desc                                                     |
|----------------------------|----------------------------------------------------------|
| master_host                | Host or IP address of the master                         |
| master_port                | Master listening TCP port                                |
| master_link_status         | Status of the link (up/down)                             |
| master_last_io_seconds_ago | Number of seconds since the last interaction with master |
| master_sync_in_progress    | Indicate the master is syncing to the replica            |
| slave_repl_offset          | The replication offset of the replica instance           |
| slave_priority             | The priority of the instance as a candidate for failover |

## CPU section

Here is the meaning of all fields in the cpu section:

| Property      | Desc                                                                                                                                                         |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| used_cpu_sys  | System CPU consumed by the Kvrocks server, which is the sum of system CPU consumed by all threads of the server process (main thread and background threads) |
| used_cpu_user | User CPU consumed by the Kvrocks server, which is the sum of user CPU consumed by all threads of the server process (main thread and background threads)     |

## Keyspace section

The keyspace section provides statistics on the main dictionary of each database. The statistics are the number of keys, and the number of keys with an expiration. Note that Kvrocks only have `db0` and keys statistics wasn't manipulated in memory, so we need to use the `dbsize scan` to async scan and calculate the keys number like below:

```properties
# Last scan db time: Sun Oct 31 17:13:14 2021
db0:keys=0,expires=0,avg_ttl=0,expired=0
```

The line starts with `#` means the last scan was executed on `Oct 31 17:13:14 2021`.

| Property          | Desc                                                      |
|-------------------|-----------------------------------------------------------|
| sequence          | The sequence number of the RocksDB                        |
| used_db_size      | The total disk size used by Kvrocks(NOT included the WAL) |
| max_db_size       | Max disk size can be used by Kvrocks, 0 means unlimited.  |
| used_percent      | Percent representation of used_db_size/max_db_size.       |
| disk_capacity     | The capacity of the disk.                                 |
| used_disk_size    | Total used size of the disk(NOT Kvrocks used disk size).  |
| used_disk_percent | Percent representation of used_disk_size/disk_capacity.   |

## RocksDB section

Here is the meaning of all fields in the rocksdb section:

The rocksdb section provides statistics on each RocksDB column family and all fields were exported by RocksDB, if the field was not explained clearly enough, you can also see more information on the RocksDB wiki.

There are five column families on kvrocks:

| Column Family | Desc                                                                                                       |
|---------------|------------------------------------------------------------------------------------------------------------|
| default       | Used to store the subkeys of the complex data structure like hash/set/list/zset/geo.                       |
| metadata      | Used to store the metadata of the complex data structure and string.                                       |
| zset score    | Used to store the mapping of zset's score to member, which would make the range by score operation faster. |
| pubsub        | Used to propagate the pubsub message to replicas.                                                          |
| propagate     | Used to propagate other commands to replicas except pubsub message.                                        |

... and below statistics were column family related:

| Property                      | Desc                                                                                                                                                         |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| estimate_keys[xxx]            | Estimate keys in the column family, may contains the tombstone and expired keys, it's a fast way to know how many keys on the column family but not precise. |
| block_cache_usage[xxx]        | Total block cache bytes used by this column family.                                                                                                          |
| block_cache_pinned_usage[xxx] | Total pinned bytes in this column family.                                                                                                                    |
| index_and_filter_cache_usage  | Total bytes was used to cache the index and filter block.                                                                                                    |

... those statistics were the entire rocksdb side:

| Property                | Desc                                                                                                                                       |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| all_mem_tables          | Approximate size of active, unflushed immutable, and pinned immutable memtables in bytes.                                                  |
| cur_mem_tables          | Approximate size of active and unflushed immutable memtable in bytes.                                                                      |
| snapshots               | Number of snapshots in rocksdb.                                                                                                            |
| num_immutable_tables    | Number of the immutable.                                                                                                                   |
| num_running_flushes     | Number of currently running flushes.                                                                                                       |
| memtable_flush_pending  | This metric returns 1 if a memtable flush is pending; otherwise it returns 0.                                                              |
| compaction_pending      | This metric returns 1 if at least one compaction is pending; otherwise, the metric reports 0.                                              |
| num_running_compactions | Number of currently running compactions.                                                                                                   |
| num_live_versions       | Number of live versions. More live versions often mean more SST files are held from being deleted, by iterators or unfinished compactions. |
| num_background_errors   | Accumulated number of background errors.                                                                                                   |
| flush_count             | Number of flushes.                                                                                                                         |
| compaction_count        | Number of compactions.                                                                                                                     |
| is_bgsaving             | This metric returns 1 if the bgsave was running; otherwise it returns 0.                                                                   |
| is_compacting           | This metric returns 1 if the compaction was running; otherwise it returns 0.                                                               |
