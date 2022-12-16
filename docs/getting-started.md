# Getting started

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
````

## Run Kvrocks with Docker

1. Following Docker's [installation instructions](https://docs.docker.com/engine/installation/) to install Docker.
2. Pull the latest image and start a container:

```shell
docker run -it -p 6666:6666 apache/kvrocks
```

Now, you can use the `redis-cli` to play the kvrocks server as Redis on port `6666`:

```shell
redis-cli -p 6666
```

## Build and run Kvrocks from source

### Install dependencies

<Tabs>
<TabItem value="centos" label="CentOS/RedHat" default>

```shell
sudo yum install -y epel-release
sudo yum install -y git gcc gcc-c++ make cmake autoconf automake libtool which
```

</TabItem>
<TabItem value="debian" label="Ubuntu/Debian">

```shell
sudo apt update
sudo apt install gcc g++ make cmake autoconf automake libtool
```

</TabItem>
<TabItem value="macos" label="macOS">

```shell
brew install autoconf automake libtool cmake
```

</TabItem>
</Tabs>

### Compile Kvrocks from source

```shell
git clone https://github.com/apache/incubator-kvrocks.git
cd incubator-kvrocks
./x.py build # `./x.py build -h` to check more options;
             # especially, `./x.py build --ghproxy` will fetch dependencies via ghproxy.com.
```

The binary file `kvrocks` would be generated at `build` dir if everything was going well.

Run the Kvrocks server by:

```shell
./build/kvrocks
```

Now, you can use the `redis-cli` to play the kvrocks server as Redis on port `6666`:

```shell
redis-cli -p 6666
```
