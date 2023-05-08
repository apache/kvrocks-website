# FAQ

**Question: How to get keys num in Kvrocks?**

Kvrocks didn't store the key number directly, it needs to scan the DB before retrieving the key number by using the `dbsize scan` command.

```shell
127.0.0.1:6666> dbsize scan
OK

127.0.0.1:6666> info keyspace
# Keyspace
# Last scan db time: Thu Mar 24 06:38:39 2022
db0:keys=1,expires=0,avg_ttl=0,expired=0
```

**Question: Why Kvrocks disk size didn't release after the FLUSHALL/FLUSHDB command was executed?**

To prevent the FLUSHALL/FLUSHDB command blocking the request, Kvrocks uses the RocksDB' DeleteRange API to implement the flush command,
which only marks the key range as deleted without reclaiming the disk space at once. And those deleted keys would be recycled when the
background compaction was triggered. You can use the `compact` command to release the disk space after flushing.

```shell
127.0.0.1:6666> flushall
OK

# Send the compact command to release the disk space
127.0.0.1:6666> compact
OK
```

