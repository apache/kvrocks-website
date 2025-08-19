---
sidebar_label: FAQs
---

# Apache Kvrocks™ FAQs

**Question: How do I get keys num in Kvrocks?**

Kvrocks doesn't store the key number directly. It needs to scan the DB and then retrieve the key number by using the `dbsize scan` command.

```shell
127.0.0.1:6666> dbsize scan
OK

127.0.0.1:6666> info keyspace
# Keyspace
# Last scan db time: Thu Mar 24 06:38:39 2022
db0:keys=1,expires=0,avg_ttl=0,expired=0
```

**Question: Why didn't the Kvrocks disk size change after the FLUSHALL/FLUSHDB command was executed?**

To prevent the FLUSHALL/FLUSHDB command blocking the request, Kvrocks uses the RocksDB DeleteRange API to implement the flush command,
which only marks the key range as deleted without reclaiming the disk space at once. Those deleted keys are recycled when the
background compaction is triggered. You can use the `compact` command to free up the disk space after flushing.

```shell
127.0.0.1:6666> flushall
OK

# Send the compact command to release the disk space
127.0.0.1:6666> compact
OK
```

**Question: Why Kvrocks scan return a string iterator instead of a number**

For the historical design reason, Kvrocks uses the string iterator to return the scan result.
But after PR [#1489](https://github.com/apache/kvrocks/pull/1489)(since v2.5.0), the scan command can return a number iterator by enabling the configuration: `redis-cursor-compatible`. You can also enable it in-flight by using the `config set` command.

```shell
127.0.0.1:6666> config set redis-cursor-compatible yes
OK
```

***Question: encounter "stdlib.h file not found" error while building Kvrocks in MacOS**

This issue occurs on certain versions of macOS where the `SYSROOT` cannot be found.
You can work around it by setting `CMAKE_OSX_SYSROOT` to the path of `MacOSX.sdk`.

```
./x.py build -DCMAKE_OSX_SYSROOT=/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk
```

