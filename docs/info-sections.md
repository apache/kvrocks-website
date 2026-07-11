# INFO sections

The INFO command returns information and statistics about the Apache Kvrocks™ server in a format that is simple to parse by computers and easy to read by humans.

The optional section parameters can be used to select one or more sections with `INFO [section [section ...]]`. Section names are case-insensitive. With no section parameter, or with the `all` parameter, all sections are returned.

| Parameter    | Desc                                               |
|--------------|----------------------------------------------------|
| all          | All sections                                       |
| server       | General information about the Kvrocks server       |
| clients      | Client connection information                      |
| memory       | Memory consumption information                     |
| persistence  | Backup and loading information                     |
| stats        | General statistics                                 |
| replication  | Primary/replica replication information            |
| cpu          | CPU consumption statistics                         |
| commandstats | Per-command execution and latency statistics       |
| cluster      | Cluster mode information                           |
| keyspace     | Database and disk usage statistics                 |
| rocksdb      | RocksDB statistics                                 |

### Return value

With RESP2, the return value of `INFO` is a bulk string. With RESP3, it is a `txt` verbatim string. In either case, the content is a collection of text lines.

Each line contains either a section name (starting with `#`) or a property in the form `field:value`. Sections are separated by an empty line.

An abridged sample return value is shown below. Values depend on the build, configuration, workload, and host. Repeated per-column-family RocksDB fields and conditional fields are omitted here and described in the sections below.

```properties
# Server
version:2.16.0
kvrocks_version:2.16.0
redis_version:7.0.0
git_sha1:28440b5
kvrocks_git_sha1:28440b5
redis_mode:standalone
kvrocks_mode:standalone
os:Linux 6.8.0 x86_64
gcc_version:13.3.0
rocksdb_version:11.1.1
arch_bits:64
process_id:12345
tcp_port:6666
server_time_usec:1783785600000000
uptime_in_seconds:42
uptime_in_days:0
executable:/usr/local/bin/kvrocks
config_file:/etc/kvrocks/kvrocks.conf

# Clients
maxclients:10000
connected_clients:1
monitor_clients:0
blocked_clients:0

# Memory
used_memory_rss:19558400
used_memory_rss_human:18.65M
used_memory_lua:35840
used_memory_lua_human:35.00K
used_memory_startup:20357120
mem_allocator:libc

# Persistence
loading:0
bgsave_in_progress:0
last_bgsave_time:1783785580
last_bgsave_status:ok
last_bgsave_time_sec:0

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
keyspace_hits:0
keyspace_misses:0
pubsub_channels:0
pubsub_patterns:0

# Replication
role:master
connected_slaves:0
master_repl_offset:0

# CPU
used_cpu_sys:0
used_cpu_user:0
worker_cpu_time:[0.000000,0.000000,0.000000,0.000000]

# CommandStats
cmdstat_command:calls=1,usec=904,usec_per_call=904
cmdstat_info:calls=1,usec=0,usec_per_call=0

# Cluster
cluster_enabled:0

# Keyspace
last_dbsize_scan_timestamp:0
db0:keys=0,expires=0,avg_ttl=0,expired=0
sequence:0
used_db_size:0
max_db_size:0
used_percent:0%
disk_capacity:499963174912
used_disk_size:266419978240
used_disk_percent:53%

# RocksDB
block_cache_usage:0
block_cache_pinned_usage[default]:0
estimate_keys[default]:0
index_and_filter_cache_usage[default]:0
level0_file_limit_slowdown[default]:
level0_file_limit_stop[default]:
pending_compaction_bytes_slowdown[default]:
pending_compaction_bytes_stop[default]:
level0_file_limit_stop_with_ongoing_compaction[default]:
level0_file_limit_slowdown_with_ongoing_compaction[default]:
memtable_count_limit_slowdown[default]:
memtable_count_limit_stop[default]:
num_files_at_level[default]:[0,0,0,0,0,0,0]
estimate_pending_compaction_bytes[default]:0
block_cache_data_hit:0
block_cache_data_miss:0
block_cache_filter_hit:0
block_cache_filter_miss:0
block_cache_hit:0
block_cache_index_hit:0
block_cache_index_miss:0
block_cache_miss:0
all_mem_tables:3520
cur_mem_tables:3520
snapshots:0
num_immutable_tables:0
num_running_flushes:0
memtable_flush_pending:0
compaction_pending:0
num_running_compactions:0
num_live_versions:5
num_super_version:5
num_background_errors:0
flush_count:0
compaction_count:0
put_per_sec:0
get_per_sec:0
seek_per_sec:0
next_per_sec:0
prev_per_sec:0
is_bgsaving:no
is_compacting:no
```

## Server section

Here is the meaning of all fields in the server section:

| Property          | Desc                                                                                 |
|-------------------|--------------------------------------------------------------------------------------|
| version           | Deprecated alias of `kvrocks_version`                                                |
| kvrocks_version   | Version of the Kvrocks server                                                        |
| redis_version     | Redis compatibility version reported by Kvrocks                                     |
| git_sha1          | Deprecated alias of `kvrocks_git_sha1`                                               |
| kvrocks_git_sha1  | Git commit SHA used to build the server                                              |
| redis_mode        | Redis-compatible mode name: `standalone` or `cluster`                               |
| kvrocks_mode      | Kvrocks mode: `standalone` or `cluster`                                              |
| os                | Operating system hosting the Kvrocks server                                          |
| gcc_version       | GCC version used to compile Kvrocks; present only in GCC builds                      |
| clang_version     | Clang version used to compile Kvrocks; present only in Clang builds                  |
| rocksdb_version   | Version of RocksDB used by Kvrocks                                                   |
| arch_bits         | Architecture (32 or 64 bits)                                                         |
| process_id        | PID of the server process                                                            |
| tcp_port          | TCP/IP listening port                                                                |
| server_time_usec  | Current Unix timestamp on the server, in microseconds                                |
| uptime_in_seconds | Number of seconds since the Kvrocks server started                                   |
| uptime_in_days    | Uptime expressed in whole days                                                       |
| executable        | Absolute path of the server executable; present only on Linux                        |
| config_file       | Path of the configuration file used by the server                                   |

## Clients section

Here is the meaning of all fields in the clients section:

| Property          | Desc                                                               |
|-------------------|--------------------------------------------------------------------|
| maxclients        | The value of the `maxclients` configuration directive              |
| connected_clients | Number of client connections (excluding connections from replicas) |
| monitor_clients   | Number of monitor client connections                               |
| blocked_clients   | Number of blocked client connections                               |

## Memory section

Here is the meaning of all fields in the memory section:

| Property              | Desc                                                                                                                                                             |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| used_memory_rss       | Resident set size (RSS) of the Kvrocks process in bytes, as reported by the operating system                                                                     |
| used_memory_rss_human | Human-readable representation of `used_memory_rss`                                                                                                               |
| used_memory_lua       | Number of bytes used by the Lua engines across worker threads                                                                                                    |
| used_memory_lua_human | Human-readable representation of `used_memory_lua`                                                                                                               |
| used_memory_startup   | Resident set size of Kvrocks at startup in bytes                                                                                                                 |
| mem_allocator         | Name of the memory allocator used by the server                                                                                                                  |

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
| keyspace_hits              | Number of successful key lookups                            |
| keyspace_misses            | Number of failed key lookups                                |
| pubsub_channels            | Global number of pub/sub channels with client subscriptions |
| pubsub_patterns            | Global number of pub/sub patterns with client subscriptions |

## CommandStats section

The commandstats section provides per-command statistics: the number of calls that reached command execution, total execution time in microseconds, and average execution time per call in microseconds.

For each command type, the following line is added:

```properties
cmdstat_XXX:calls=XXX,usec=XXX,usec_per_call=XXX
```

If `histogram-bucket-boundaries` is configured, a latency histogram is also added for each command that has been called:

```properties
cmdstathist_XXX:BOUNDARY=COUNT,...,inf=COUNT,sum=USEC,count=CALLS
```

Each boundary and `inf` value is the count for that latency bucket. `sum` is the total latency in microseconds, and `count` is the number of calls.

## Persistence section

Here is the meaning of all fields in the persistence section:

| Property              | Desc                                                     |
|-----------------------|----------------------------------------------------------|
| loading               | Whether the server is loading data from a backup         |
| bgsave_in_progress    | Whether a background save is in progress                 |
| last_bgsave_time      | Unix timestamp when the most recent background save began; server start time if no save has run |
| last_bgsave_status    | Status of the most recent background save: `ok` or `err` |
| last_bgsave_time_sec  | Duration of the most recent background save in seconds; `-1` if no save has run |

## Replication section

Here is the meaning of all fields in the replication section:

While the server is loading a backup, the section heading is returned without replication fields.

| Property           | Desc                                                                                                                                                                                                 |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| role               | `master` if the instance does not replicate another server, or `slave` if it does. A replica can still serve its own replicas in a chained replication topology.                                    |
| connected_slaves   | Number of replicas connected to this server                                                                                                                                                          |
| slaveN             | State of connected replica N in the form `ip=IP,port=PORT,offset=OFFSET,lag=LAG`; one field is returned per active replica, starting at `slave0`                                                    |
| master_repl_offset | Current RocksDB sequence number used as the server's replication offset                                                                                                                              |

If the instance is a replica, these additional fields are provided:

| Property                        | Desc                                                     |
|---------------------------------|----------------------------------------------------------|
| master_host                     | Host or IP address of the master                         |
| master_port                     | Master listening TCP port                                |
| master_link_status              | Status of the link (up/down)                             |
| master_sync_unrecoverable_error | Whether replication encountered an unrecoverable error (`yes`/`no`) |
| master_last_io_seconds_ago      | Number of seconds since the last interaction with master |
| master_sync_in_progress         | Whether a full synchronization from the primary is in progress (`0`/`1`) |
| slave_repl_offset               | The replication offset of the replica instance           |
| slave_priority                  | The priority of the instance as a candidate for failover |

## CPU section

Here is the meaning of all fields in the cpu section:

| Property        | Desc                                                                                                                                                         |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| used_cpu_sys    | System CPU time consumed by all threads of the Kvrocks process, in seconds                                                                                   |
| used_cpu_user   | User CPU time consumed by all threads of the Kvrocks process, in seconds                                                                                     |
| worker_cpu_time | CPU time consumed by each worker thread, in seconds, represented as an array in worker order                                                                 |

## Cluster section

Here is the meaning of all fields in the cluster section:

| Property        | Desc                                            |
|-----------------|-------------------------------------------------|
| cluster_enabled | Whether Kvrocks cluster mode is enabled (`0`/`1`) |

## Keyspace section

The keyspace section provides key-count statistics for `db0` in the current connection's namespace, as well as RocksDB and filesystem size information. Key counts are cached rather than maintained in memory for every write. Run `DBSIZE scan` to start an asynchronous scan that refreshes them.

```properties
last_dbsize_scan_timestamp:1635671594
db0:keys=0,expires=0,avg_ttl=0,expired=0
```

`last_dbsize_scan_timestamp` is updated when that scan completes. A value of `0` means that no scan has completed.

| Property                     | Desc                                                                                                  |
|------------------------------|-------------------------------------------------------------------------------------------------------|
| last_dbsize_scan_timestamp   | Unix timestamp in seconds when the most recent `DBSIZE scan` completed                                |
| db0                          | Cached key statistics in the form `keys=...,expires=...,avg_ttl=...,expired=...`                      |
| sequence                     | Latest RocksDB sequence number                                                                        |
| used_db_size                 | Approximate bytes used by the current namespace; for the default namespace, total managed SST size; excludes the WAL |
| max_db_size                  | Maximum database size in bytes; `0` means unlimited                                                   |
| used_percent                 | Percentage of the configured maximum database size used; `0%` when `max_db_size` is unlimited         |
| disk_capacity                | Capacity in bytes of the filesystem containing the database directory; omitted if the query fails     |
| used_disk_size               | Bytes used on that filesystem by all files, not only Kvrocks; omitted if the query fails               |
| used_disk_percent            | Percentage of that filesystem's capacity in use; omitted if the query fails                            |

## RocksDB section

Here is the meaning of all fields in the rocksdb section:

The RocksDB section provides statistics for individual column families and for the database as a whole. Most values come from RocksDB properties and statistics.

While the server is loading a backup, the Keyspace and RocksDB section headings are returned without fields.

Kvrocks 2.16.0 has eight column families:

| Column Family | Desc                                                                                                 |
|---------------|------------------------------------------------------------------------------------------------------|
| default       | Stores subkeys of aggregate data types such as hashes, sets, lists, sorted sets, and geospatial data |
| metadata      | Stores metadata for data types and string values                                                     |
| zset_score    | Stores sorted-set score-to-member mappings to support efficient score-range operations              |
| pubsub        | Stores Pub/Sub messages that are propagated to replicas                                             |
| propagate     | Stores non-Pub/Sub commands that are propagated to replicas                                         |
| stream        | Stores stream data                                                                                    |
| search        | Stores Kvrocks Search index metadata and data                                                       |
| index         | Stores secondary indexes, such as the time-series label reverse index                               |

In the properties below, `xxx` is a column-family name. These properties are returned once for each of the eight column families:

| Property                                                    | Desc                                                                                                      |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| estimate_keys[xxx]                                          | Estimated number of keys; may include tombstones and expired keys                                         |
| index_and_filter_cache_usage[xxx]                            | Estimated bytes used by table readers, including index and filter blocks                                  |
| level0_file_limit_slowdown[xxx]                              | Write slowdowns caused by the level-0 file-count limit                                                     |
| level0_file_limit_stop[xxx]                                  | Write stops caused by the level-0 file-count limit                                                         |
| pending_compaction_bytes_slowdown[xxx]                       | Write slowdowns caused by the pending-compaction-bytes limit                                               |
| pending_compaction_bytes_stop[xxx]                           | Write stops caused by the pending-compaction-bytes limit                                                   |
| level0_file_limit_slowdown_with_ongoing_compaction[xxx]      | Level-0 file-count slowdowns while a compaction was already in progress                                    |
| level0_file_limit_stop_with_ongoing_compaction[xxx]          | Level-0 file-count stops while a compaction was already in progress                                        |
| memtable_count_limit_slowdown[xxx]                           | Write slowdowns caused by the memtable-count limit                                                         |
| memtable_count_limit_stop[xxx]                               | Write stops caused by the memtable-count limit                                                             |
| num_files_at_level[xxx]                                     | Number of SST files at levels 0 through 6, represented as a seven-element array                            |
| estimate_pending_compaction_bytes[xxx]                       | Estimated number of bytes awaiting compaction                                                              |

The shared block-cache fields are:

| Property                            | Desc                                                                                              |
|-------------------------------------|---------------------------------------------------------------------------------------------------|
| block_cache_usage                   | Total bytes used by the shared block cache                                                        |
| block_cache_pinned_usage[default]   | Bytes pinned in the shared block cache; obtained through the `default` column family              |
| block_cache_hit                     | Total block-cache hits                                                                            |
| block_cache_miss                    | Total block-cache misses                                                                          |
| block_cache_index_hit               | Block-cache hits for index blocks                                                                 |
| block_cache_index_miss              | Block-cache misses for index blocks                                                               |
| block_cache_filter_hit              | Block-cache hits for filter blocks                                                                |
| block_cache_filter_miss             | Block-cache misses for filter blocks                                                              |
| block_cache_data_hit                | Block-cache hits for data blocks                                                                  |
| block_cache_data_miss               | Block-cache misses for data blocks                                                                |

The hit and miss counters are present when RocksDB statistics are enabled. The remaining database-wide fields are:

| Property                | Desc                                                                                                                                       |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| all_mem_tables          | Approximate size of active, unflushed immutable, and pinned immutable memtables in bytes.                                                  |
| cur_mem_tables          | Approximate size of active and unflushed immutable memtable in bytes.                                                                      |
| snapshots               | Number of RocksDB snapshots                                                                                                                |
| num_immutable_tables    | Number of immutable memtables                                                                                                              |
| num_running_flushes     | Number of currently running flushes.                                                                                                       |
| memtable_flush_pending  | This metric returns 1 if a memtable flush is pending; otherwise it returns 0.                                                              |
| compaction_pending      | This metric returns 1 if at least one compaction is pending; otherwise, the metric reports 0.                                              |
| num_running_compactions | Number of currently running compactions.                                                                                                   |
| num_live_versions       | Number of live versions. More live versions often mean more SST files are held from being deleted, by iterators or unfinished compactions. |
| num_super_version       | Current RocksDB super-version number                                                                                                       |
| num_background_errors   | Accumulated number of background errors                                                                                                    |
| flush_count             | Number of completed flushes                                                                                                                |
| compaction_count        | Number of completed compactions                                                                                                            |
| put_per_sec             | Number of RocksDB `Put` and `Write` calls per second                                                                                       |
| get_per_sec             | Combined number of RocksDB `Get` and `MultiGet` calls per second                                                                           |
| seek_per_sec            | Number of RocksDB iterator `Seek` calls per second                                                                                         |
| next_per_sec            | Number of RocksDB iterator `Next` calls per second                                                                                         |
| prev_per_sec            | Number of RocksDB iterator `Prev` calls per second                                                                                         |
| is_bgsaving             | Whether a background save is running (`yes`/`no`)                                                                                          |
| is_compacting           | Whether a compaction is running (`yes`/`no`)                                                                                               |
