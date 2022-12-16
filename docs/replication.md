# Replication

An instance is turned into a slave role when `SLAVEOF` cmd is received.

A slave will try to do a partial synchronization (a.k.a. incremental replication) if it is viable. Otherwise, a slave will do a full-sync by copying all the RocksDB's latest backup files.

After the full-sync is finished, the slave's DB will be erased and restored using the backup files downloaded from the master, then partial-sync is triggered again.

If everything goes OK, the partial-sync is an ever-running procedure that keep receiving every batch the master gets.

## Replication state machine

A state machine is used in the slave's replication thread to accommodate the complexity.

On the slave side, replication is composed of the following steps:

1. Send auth
2. Send db_name to check if the master has the right DB
3. Try `PSYNC`: if succeeds, the slave is in the loop of receiving batches; if not, go to (4)
4. Do `FULLSYNC`:
    1. send _fetch_meta to get the latest backup metadata
    2. send _fetch_file to get all the backup files listed in the meta
    3. restore slave's DB using the backup
5. Go to (1)

## Partial Synchronization (PSYNC)

PSYNC takes advantage of the rocksdb's WAL iterator. If the requesting sequence number of PSYNC is in the range of the WAL files, PSYNC is considered viable.

PSYNC is a command implemented on master role instance. Unlike other commands (e.g. GET), PSYNC cmd is not a REQ-RESP command, but a REQ-RESP-RESP style. That's the response never ends once the req is accepted.

So, PSYNC has two main parts in the code:

* libevent callback: This is for sending the batches when the WAL iterator has new data.
* timer callback: When the libevent callback quited because of the exhaustion of the WAL data, the timer callback will check if WAL has new data available from time to time, so to awake the libevent callback again.

## Full Synchronization

On the master side, to support full synchronization, master must create a RocksDB backup every time receiving a `_fetch_meta` request.

On the slave side, after retrieving the metadata, the slave can fetch every file listed in the metadata (skip if already existed), and restore the backup. To accelerate a bit, file fetching is executed in parallel.
