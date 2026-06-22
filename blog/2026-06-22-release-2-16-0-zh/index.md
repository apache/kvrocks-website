---
slug: release-2-16-0-zh
title: "Apache Kvrocks 2.16.0 版本发布"
authors: [hulk]
---

Apache Kvrocks 2.16.0 是 2.x 系列中功能最为丰富的版本之一 —— 为 `SET` 命令引入了原生的比较并设置（compare-and-set）能力，新增了便于运维的流量控制命令 `CLIENT PAUSE`/`UNPAUSE`，通过 `CLUSTERX FLUSHSLOTS` 强化了集群槽位管理，并通过 `TDIGEST.TRIMMED_MEAN` 进一步扩展了概率数据结构的能力。

在 Redis 7.0+ 命令兼容性方面，本版本进一步推进：新增了 `BITPOS` 的 `BYTE`/`BIT` 范围单位、`CLIENT SETINFO` 以及 `LATENCY` 系列命令。在底层，RocksDB 升级到了 v11.1.1，同时还带来了一轮广泛的安全加固（Lua CVE 修复、复制权限收紧、RDB 校验等）。

**亮点：**

- **条件式 SET 操作（IFEQ/IFNE/IFDEQ/IFDNE）** —— `SET` 命令现在原生支持原子的「比较并设置」语义，无需先 `GET` 再 `SET` 即可实现乐观锁。
- **CLIENT PAUSE / UNPAUSE** —— 运维人员可以在故障切换窗口内暂停客户端流量，而无需断开连接。
- **CLUSTERX FLUSHSLOTS** —— 一条命令即可清空一个或多个槽位范围内的所有键，适用于集群模式下的槽位再均衡与租户数据清理。
- **TDIGEST.TRIMMED_MEAN** —— 在 t-digest 概率结构上计算修剪均值，进一步完善了流式分位数与聚合的工具集。
- **BITPOS 支持 BYTE / BIT 范围单位** —— `BITPOS` 现已对齐 Redis 7.0+ 的语义，支持按字节或按位偏移指定范围。

<!--truncate-->

### 条件式 SET 操作（IFEQ / IFNE / IFDEQ / IFDNE）

Kvrocks 2.16.0 为 `SET` 命令新增了四个条件修饰符。`IFEQ <value>` 仅在当前存储值等于给定值时才执行写入；`IFNE <value>` 则相反。`IFDEQ <digest>` 和 `IFDNE <digest>` 变体则使用 16 位十六进制摘要而非完整值进行比较 —— 当存储值较大时，传输一段短指纹比完整值更划算。这些修饰符让你可以在命令层直接实现乐观锁模式，无需依赖 Lua 事务，也无需额外的读操作。

```bash
# 仅当当前值等于 "oldvalue" 时，才将其设置为 "newvalue"
127.0.0.1:6666> SET mykey newvalue IFEQ oldvalue

# 仅当当前值的 16 位摘要与给定摘要匹配时才设置
127.0.0.1:6666> SET mykey newvalue IFDEQ 0123456789abcdef
```

更多信息请参考 [PR #3475](https://github.com/apache/kvrocks/pull/3475) 与 [PR #3453](https://github.com/apache/kvrocks/pull/3453)。

### CLIENT PAUSE / UNPAUSE

`CLIENT PAUSE` 与 `CLIENT UNPAUSE` 为运维人员提供了一种在不断开连接的前提下静默客户端流量的方式。其主要使用场景是受控的故障切换：在主节点上暂停写入（或所有命令），等待副本追平，完成提升后再恢复流量。此前在切换窗口内，运维只能在「断开所有客户端」与「容忍脏读」之间二选一。两个子命令都需要 admin 权限。

```bash
# 在计划内的故障切换期间，暂停所有客户端命令最长 5 秒
127.0.0.1:6666> CLIENT PAUSE 5000 ALL

# 也可以只暂停写命令，让读流量继续
127.0.0.1:6666> CLIENT PAUSE 5000 WRITE

# 切换完成后立即恢复
127.0.0.1:6666> CLIENT UNPAUSE
```

更多信息请参考 [PR #3378](https://github.com/apache/kvrocks/pull/3378)。

### CLUSTERX FLUSHSLOTS

集群运维人员现在可以通过一条命令清空一个或多个槽位范围内的所有键。典型使用场景包括：租户下线后回收槽位、部分迁移失败后清理残留数据、以及在重新分片前重置节点的数据集。该命令在槽位迁移进行中时会拒绝执行，从而避免在再均衡过程中被误用。

```bash
# 清空槽位 0-100 与 8000-8500 范围内的所有键
127.0.0.1:6666> CLUSTERX FLUSHSLOTS 0-100 8000-8500

# 单个槽位作为退化的范围也被接受
127.0.0.1:6666> CLUSTERX FLUSHSLOTS 4242-4242
```

更多信息请参考 [PR #3375](https://github.com/apache/kvrocks/pull/3375)。

### TDIGEST.TRIMMED_MEAN

t-digest 命令族新增了 `TDIGEST.TRIMMED_MEAN`，用于在丢弃两端尾部后计算概率结构的均值。这是用来汇总长尾延迟或数值分布的标准方法之一，可避免离群值主导平均值。两个截断分位数都必须落在 `[0, 1]` 区间内，且下限必须严格小于上限。

```bash
# 构建一个概率结构
127.0.0.1:6666> TDIGEST.CREATE latency
127.0.0.1:6666> TDIGEST.ADD latency 12 14 9 11 13 250 300

# 中间 80% 的均值 —— 丢弃最低 10% 与最高 10%
127.0.0.1:6666> TDIGEST.TRIMMED_MEAN latency 0.1 0.9
```

更多信息请参考 [PR #3312](https://github.com/apache/kvrocks/pull/3312)。

### BITPOS 支持 BYTE / BIT 范围单位

`BITPOS` 现在支持显式的范围单位 —— `BYTE`（默认值，保留此前行为）或 `BIT` —— 与 Redis 7.0+ 的语义对齐。当指定 `BIT` 时，`start` 与 `end` 参数将被解释为位偏移而非字节偏移，这在扫描紧凑位图或定宽位域编码时非常有用。

```bash
127.0.0.1:6666> SET mykey "\x00\xff\xf0"

# 将 start/end 当作位偏移，查找第一个置位的位
127.0.0.1:6666> BITPOS mykey 1 0 -1 BIT

# 同样的范围，但按字节解释（默认值与此前行为）
127.0.0.1:6666> BITPOS mykey 1 0 -1 BYTE
```

更多信息请参考 [PR #3460](https://github.com/apache/kvrocks/pull/3460)。

## 结语

除了上述亮点之外，2.16.0 还带来了 `CLIENT SETINFO`、`LATENCY HISTOGRAM` 子命令、字典压缩配置、`INFO cpu` 中的按 worker CPU 时间统计、`CLUSTER NODES` 中从节点失败信息的传播、扩展的 `KMETADATA` 输出、SortedInt 类型的 `DUMP` 支持，以及一批可观的安全加固（两个 Lua CVE、对 LuaJIT 字节码的拒绝、复制权限收紧、RDB intset 校验）。完整的变更列表请参考 [Apache Kvrocks 2.16.0 changelog](https://github.com/apache/kvrocks/releases/tag/v2.16.0)。我们鼓励用户升级到 v2.16.0 以体验这些新特性与改进。一如既往，欢迎社区的反馈与贡献！
