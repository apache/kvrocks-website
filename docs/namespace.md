# Namespace

Like the Redis database, Kvrocks uses the namespace to isolate the data between users. But unlike Redis, each namespace has its own password. The data would be stored in the default namespace when using `requirepass`. The namespace would have no effect when the cluster mode was enabled like the Redis DB.

## Manage Namespace

`requirepass` must be set if you want to add namespaces since we treat the `requirepass` user as administrator.

```shell
# Auth with the requirepass
redis-cli -p 6666 -a ${REQUIREPASS}

# Add a new namespace with the token, the namespace name must be unique.
127.0.0.1:6666> namespace add ${NEW NAMESPACE} ${NEW TOKEN}

# Update the namespace's token
127.0.0.1:6666> namespace set ${NAMESPACE} ${NEW TOKEN}

# Delete the namespace, the namespace's data WOULD NOT be deleted,
# unless you use the `flushdb` command to flush the DB data.
127.0.0.1:6666> namespace del ${NAMESPACE}

# Get the namespace's token
127.0.0.1:6666> namespace get ${NAMESPACE}

# List namespaces
127.0.0.1:6666> namespace get *
```

Be careful that you must use the `config rewrite` command to persist the new namespaces into the config file.

## Switch Namespace

Firstly, we use the namespace command to create namespace `ns1` and `ns2` with the corresponding tokens `token1` and `token2`.

```shell
127.0.0.1:6666> namespace add ns1 token1
127.0.0.1:6666> namespace add ns2 token2
```

Then we can use `token1` and `token2`, operate data between namespaces would NOT affect each other like below:

```shell

# Use token1 to switch to ns1
127.0.0.1:6666> auth token1
OK
127.0.0.1:6666> set key 100
OK
127.0.0.1:6666> get key
"100"

# Use token2 to switch to ns2
127.0.0.1:6666> auth token2
OK
127.0.0.1:6666> set key 200
OK
127.0.0.1:6666> get key
"200"

# Use token1 to switch to ns1 again, the value is still 100
127.0.0.1:6666> auth token1
OK
127.0.0.1:6666> get key
"100"
```

## How Kvrocks implements namespace

Kvrocks simply prepend the namespace prefix to the user key and remove it before retrieving.

For example, we create a new namespace `foo` with token `bar`, then the `foo` would prepend to the user key. Another way was to split the namespace into different rocksdb column families, but we didn't do that for the sake of simplicity.
