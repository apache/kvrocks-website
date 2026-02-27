---
slug: release-2-15-0
title: "Apache Kvrocks Release 2.15.0"
authors: [hulk]
---

This release marks a significant step forward in Redis compatibility: the new `redis-databases` option closes the gap of SELECT command between Kvrocks and Redis. Applications that rely on Redis's multi-database model can now migrate to Kvrocks without any code changes.

Beyond that, this release expands TimeSeries and TDigest command coverage and tightens replication reliability — all while upgrading the C++ standard to C++20 and RocksDB to v10.10.1.

**Highlights:**

- **Support SELECT database** — Kvrocks can now emulate Redis's multi-database model, unblocking migrations from Redis deployments that use `SELECT` to switch between logical databases
- **New TimeSeries commands** — TS.MREVRANGE, TS.QUERYINDEX, and TS.ALTER round out the time-series API surface for analytics-heavy workloads
- **New TDigest commands** — TDIGEST.RANK, TDIGEST.REVRANK, TDIGEST.BYRANK, and TDIGEST.BYREVRANK enable percentile and rank queries on streaming data

<!--truncate-->

### Support SELECT Database

Kvrocks uses a namespace mechanism as its multi-tenancy primitive, which differs from Redis's numbered logical databases. Before this release, issuing `SELECT` against Kvrocks was a no-op — the command was accepted but had no effect. v2.15.0 introduces the `redis-databases` option ([#3294](https://github.com/apache/kvrocks/pull/3294)) to bridge this gap and make `SELECT` behave as it does in Redis.

The option takes a numeric value:

- `redis-databases 0` — default; `SELECT` remains a no-op (existing namespace behavior is unchanged)
- `redis-databases N` (N > 0) — enables Redis-style database switching with N logical databases; requires that no namespaces are configured

```yaml
# kvrocks.conf
redis-databases 16
```

Once enabled, clients can issue `SELECT` as they would against Redis:

```bash
127.0.0.1:6666> SELECT 3
# OK
127.0.0.1:6666[3]> SET mykey "hello"
# OK — stored in database 3
```

### New TimeSeries Commands

Kvrocks's RedisTimeSeries compatibility layer gains three commands that are essential for production time-series pipelines. `TS.MREVRANGE` lets you query multiple series in reverse chronological order in a single round-trip. `TS.QUERYINDEX` filters series by label predicates without pulling data. `TS.ALTER` modifies retention and label metadata on existing series without recreating them.

```bash
# Create series with labels
127.0.0.1:6666> TS.CREATE metrics:us-east:1 LABELS region us-east
127.0.0.1:6666> TS.CREATE metrics:us-east:2 LABELS region us-east
127.0.0.1:6666> TS.CREATE temperature:NYC LABELS sensor temperature location NYC

# Add samples
TS.ADD metrics:us-east:1 * 42
127.0.0.1:6666> TS.ADD metrics:us-east:2 * 87

# Query the last 10 samples across all "region=us-east" series, newest first
127.0.0.1:6666> TS.MREVRANGE - + FILTER region=us-east COUNT 10

# Find series matching a label filter (no data returned)
127.0.0.1:6666> TS.QUERYINDEX sensor=temperature location=NYC

# Change retention period on an existing series
127.0.0.1:6666> TS.ALTER temperature:NYC RETENTION 86400000
```

### New TDigest Commands

The TDigest sketch — useful for approximate quantile computation over streaming data — now supports rank-based queries. `TDIGEST.RANK` returns the estimated rank of a value within the digest. `TDIGEST.BYRANK` returns the value at a given rank. The `REV` variants work in descending order. Together these four commands make it practical to answer questions like "what percentile is this latency?" or "what is the p99 value?" directly from Kvrocks.

```bash
# Create a TDigest key
127.0.0.1:6666> TDIGEST.CREATE latency

# Insert observations
127.0.0.1:6666> TDIGEST.ADD latency 120 95 200 340 88 150

# What rank is the value 150?
127.0.0.1:6666> TDIGEST.RANK latency 150

# What value sits at rank 4?
127.0.0.1:6666> TDIGEST.BYRANK latency 4

# What value sits at rank 4 counting from the top?
127.0.0.1:6666> TDIGEST.BYREVRANK latency 4
```

## End

Except for that, this release also includes a number of bug fixes and performance improvements. For the full list of changes, please refer to [changelog](https://github.com/apache/kvrocks/releases/tag/v2.15.0) to see all the details. We encourage users to upgrade to v2.15.0 to take advantage of these new features and improvements. As always, we welcome feedback and contributions from the community!

