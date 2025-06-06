# How to profile memory

To make the memory profiling easier, Kvrocks provides the command `KPROFILE` to active/deactive and dump the memory profiling data. Note that it is only available while Jemalloc is enabled in the building phase.

## Prerequisites

Before profiling, you need to run Kvrocks server with the following environment variables:

```bash
export MALLOC_CONF="prof:true,background_thread:true"
./kvrocks -c kvrocks.conf
```

or

```bash
MALLOC_CONF="prof:true,background_thread:true" ./kvrocks -c kvrocks.conf
```

Docker users don't need to set this environment variable, as the Dockerfile already sets it.

## Use KPROFILE command

Once Kvrocks is running with the above environment variable set, you can use the `KPROFILE` command to control the profiling:

```bash
# Enable memory profiling
$ redis-cli> KPROFILE MEMORY ENABLE

# Dump memory profiling data to a file in the specified directory,
# the profiling filename will be starting with `jeprof-` prefix
$ redis-cli> KPROFILE MEMORY DUMP [dir]

# Disable memory profiling
$ redis-cli> KPROFILE MEMORY DISABLE
```

Then you can use the `jeprof` tool to analyze the dumped profiling data. For more information about `jeprof`, you can refer to the [Jemalloc documentation](https://github.com/jemalloc/jemalloc/wiki/Use-Case%3A-Heap-Profiling).

