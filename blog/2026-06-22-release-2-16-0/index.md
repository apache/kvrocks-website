---
slug: release-2-16-0
title: "Apache Kvrocks Release 2.16.0"
authors: [hulk]
---

Apache Kvrocks 2.16.0 lands with one of the strongest feature batches of the 2.x line — extending the `SET` command with native compare-and-set, adding operator-friendly traffic control via `CLIENT PAUSE`/`UNPAUSE`, sharpening cluster slot management with `CLUSTERX FLUSHSLOTS`, and growing the probabilistic-data-structure surface with `TDIGEST.TRIMMED_MEAN`.

Redis 7.0+ command compatibility moves another step forward through `BITPOS` `BYTE`/`BIT` range units, `CLIENT SETINFO`, and the `LATENCY` family. Under the hood, RocksDB is upgraded to v11.1.1, and a broad round of security hardening (Lua CVE patches, replication tightening, RDB validation) ships alongside.

**Highlights:**

- **Conditional SET operations (IFEQ/IFNE/IFDEQ/IFDNE)** — Atomic compare-and-set patterns are now supported natively in `SET`, enabling optimistic locking without a `GET`/`SET` round-trip.
- **CLIENT PAUSE / UNPAUSE** — Operators can pause client traffic during failover windows without closing connections.
- **CLUSTERX FLUSHSLOTS** — Drop all keys in one or more slot ranges in a single command — useful for slot rebalancing and tenant cleanup in cluster mode.
- **TDIGEST.TRIMMED_MEAN** — Compute a trimmed mean over a t-digest sketch, completing the streaming quantile/aggregation toolkit.
- **BITPOS with BYTE / BIT range units** — `BITPOS` now matches Redis 7.0+ semantics for byte-indexed and bit-indexed ranges.

<!--truncate-->

### Conditional SET operations (IFEQ / IFNE / IFDEQ / IFDNE)

Kvrocks 2.16.0 extends the `SET` command with four new conditional modifiers. `IFEQ <value>` applies the write only when the stored value equals the supplied value; `IFNE <value>` inverts that condition. The `IFDEQ <digest>` and `IFDNE <digest>` variants compare against a 16-character hex digest of the stored value instead of the full payload — useful when the stored value is large and you'd rather ship a short fingerprint over the wire. Together these let you implement optimistic-locking patterns at the command level, with no Lua transaction and no separate read.

```bash
# Set "newvalue" only if the current value equals "oldvalue"
127.0.0.1:6666> SET mykey newvalue IFEQ oldvalue

# Set "newvalue" only if the current value's 16-char digest matches the expected one
127.0.0.1:6666> SET mykey newvalue IFDEQ 0123456789abcdef
```

For more information, please see [PR #3475](https://github.com/apache/kvrocks/pull/3475) and [PR #3453](https://github.com/apache/kvrocks/pull/3453).

### CLIENT PAUSE / UNPAUSE

`CLIENT PAUSE` and `CLIENT UNPAUSE` give operators a clean way to quiesce client traffic without tearing down connections. The primary use case is controlled failover: pause writes (or all traffic) on the primary, let replicas catch up, promote — then unpause. Before this command existed, operators had to choose between disconnecting all clients or accepting dirty reads during the switchover window. Both subcommands require the admin permission.

```bash
# Pause all client commands for up to 5 seconds (useful during a planned failover)
127.0.0.1:6666> CLIENT PAUSE 5000 ALL

# Or pause only write commands and keep reads flowing
127.0.0.1:6666> CLIENT PAUSE 5000 WRITE

# Resume immediately once the failover is complete
127.0.0.1:6666> CLIENT UNPAUSE
```

For more information, please see [PR #3378](https://github.com/apache/kvrocks/pull/3378).

### CLUSTERX FLUSHSLOTS

Cluster operators can now drop all keys belonging to one or more slot ranges with a single command. This is the operation you reach for when reclaiming slots after a tenant is removed, cleaning up after a partial migration, or resetting a node's data set before re-sharding. The command refuses to run while a slot migration is in progress, so it can't be misused mid-rebalance.

```bash
# Flush every key in slots 0-100 and 8000-8500
127.0.0.1:6666> CLUSTERX FLUSHSLOTS 0-100 8000-8500

# A single slot is accepted as a degenerate range
127.0.0.1:6666> CLUSTERX FLUSHSLOTS 4242-4242
```

For more information, please see [PR #3375](https://github.com/apache/kvrocks/pull/3375).

### TDIGEST.TRIMMED_MEAN

The t-digest command family adds `TDIGEST.TRIMMED_MEAN`, which computes the mean of a sketch after discarding the lowest and highest tails. This is the standard way to summarize a long-tailed latency or value distribution without letting outliers dominate the average. Both cut quantiles must be in `[0, 1]`, and the low cut must be strictly less than the high cut.

```bash
# Build a sketch
127.0.0.1:6666> TDIGEST.CREATE latency
127.0.0.1:6666> TDIGEST.ADD latency 12 14 9 11 13 250 300

# Mean of the middle 80% — excludes the bottom 10% and top 10%
127.0.0.1:6666> TDIGEST.TRIMMED_MEAN latency 0.1 0.9
```

For more information, please see [PR #3312](https://github.com/apache/kvrocks/pull/3312).

### BITPOS with BYTE / BIT range units

`BITPOS` now accepts an explicit range unit — `BYTE` (the default, preserving prior behavior) or `BIT` — matching the Redis 7.0+ semantics. When `BIT` is supplied, the `start` and `end` arguments are interpreted as bit offsets rather than byte offsets, which is what you want when scanning inside packed bitmaps or fixed-width bitfield encodings.

```bash
127.0.0.1:6666> SET mykey "\x00\xff\xf0"

# Find the first set bit treating start/end as bit offsets
127.0.0.1:6666> BITPOS mykey 1 0 -1 BIT

# Same range, but interpreted as bytes (the default and prior behavior)
127.0.0.1:6666> BITPOS mykey 1 0 -1 BYTE
```

For more information, please see [PR #3460](https://github.com/apache/kvrocks/pull/3460).

## End

Beyond these highlights, 2.16.0 also lands `CLIENT SETINFO`, the `LATENCY HISTOGRAM` subcommand, dictionary compression settings, per-worker CPU time in `INFO cpu`, `CLUSTER NODES` slave-failure propagation, expanded `KMETADATA` output, `DUMP` for the SortedInt type, and a substantial security hardening batch (two Lua CVEs, LuaJIT bytecode rejection, stricter replication permissions, RDB intset validation). For the full list of changes, please refer to the [Apache Kvrocks 2.16.0 changelog](https://github.com/apache/kvrocks/releases/tag/v2.16.0). We encourage users to upgrade to v2.16.0 to take advantage of these new features and improvements. As always, we welcome feedback and contributions from the community!
