## kvrocks2redis

kvrocks2redis is used to migrate the data from Apache Kvrocks™ to Redis (as well as Kvrocks itself). It will read and parse data from the local dir first and then use the psync command to read the remain change streams from the target host.

## How to build

Please refer [Kvrocks#build](https://github.com/apache/kvrocks#build), this step will build `kvrocks2redis` in the build dir as well.

## How to run

```shell
./build/kvrocks2redis -c kvrocks2redis.conf
```

For the configurations in `kvrocks2redis.conf`

```text
# The value should be INFO, WARNING, ERROR, FATAL
log-level INFO

# Determine whether to run on the daemonize mode or not
# Default: no
daemonize no

# Where to read and parse the local DB, it should be same as the `dir` in kvrocks.conf
# Default: ./data
data-dir ./data

# Where to store the output like the sync sequence and AOF file
# Default: ./
output-dir ./

# The source host:port to sync change streams after parsing the local DB
# kvrocks <kvrocks_ip> <kvrocks_port> [<kvrocks_auth>]
kvrocks 127.0.0.1 6666

# If the source Kvrocks enabled the cluster mode, should enable it here as well.
# Default: no
cluster-enabled no

# Synchronize the specified namespace data to the specified Redis DB.
# Warning: It will flush the target redis DB data first before syncing the data.
#
# namespace.{namespace} <redis_ip> <redis_port> [<redis_auth> <redis_db_number>]
# Default redis_db_number is 0
namespace.__namespace 127.0.0.1 6379
```

To be noticed, the `kvrocks2redis` must be deployed on the same machine as the Kvrocks instance since it needs to read the data from the local DB dir.
