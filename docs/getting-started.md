# Getting started

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
````

## Run Kvrocks with Docker

1. Follow Docker's [installation instructions](https://docs.docker.com/engine/installation/) to install Docker.
2. Pull the latest image and start a container:

```shell
docker run -it -p 6666:6666 apache/kvrocks
```

Now you can use the `redis-cli` to run the kvrocks server as Redis on port `6666`:

```shell
redis-cli -p 6666
```

## Build and run Kvrocks from source

### Install dependencies

<Tabs>
<TabItem value="debian" label="Ubuntu/Debian">

```shell
sudo apt update
sudo apt install -y git build-essential cmake libtool python3 libssl-dev
```

</TabItem>
<TabItem value="centos" label="CentOS/RedHat" default>

```shell
sudo yum install -y centos-release-scl-rh
sudo yum install -y git devtoolset-11 autoconf automake libtool libstdc++-static python3 openssl-devel
# download and install cmake via https://cmake.org/download
wget https://github.com/Kitware/CMake/releases/download/v3.26.4/cmake-3.26.4-linux-x86_64.sh -O cmake.sh
sudo bash cmake.sh --skip-license --prefix=/usr
# enable gcc and make in devtoolset-11
source /opt/rh/devtoolset-11/enable
```

</TabItem>
<TabItem value="macos" label="macOS">

```shell
brew install git cmake autoconf automake libtool openssl
# please link openssl by force if it still cannot be found after installing
brew link --force openssl
```

</TabItem>
</Tabs>

### Compile Kvrocks from source

```shell
git clone https://github.com/apache/kvrocks.git
cd kvrocks
./x.py build # `./x.py build -h` to check more options;
             # especially, `./x.py build --ghproxy` will fetch dependencies via ghproxy.com.
```

The binary file `kvrocks` will be generated at `build` dir if everything goes well.

Run the Kvrocks server by:

```shell
./build/kvrocks
```

Now you can use the `redis-cli` to run the kvrocks server as Redis on port `6666`:

```shell
redis-cli -p 6666
```
