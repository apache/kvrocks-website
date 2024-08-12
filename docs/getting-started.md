# Getting started

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
````

You can either get started with Apache Kvrocks™ with Docker or compile a binary from source.

## Run Kvrocks with Docker

1. Follow Docker's [installation instructions](https://docs.docker.com/engine/installation/) to install Docker.
2. Pull the latest image and start a container:

```shell
docker run -it -p 6666:6666 apache/kvrocks --bind 0.0.0.0
```

Now you can use the `redis-cli` to run the kvrocks server as Redis on port `6666`:

```shell
redis-cli -p 6666
```

For persisted data, prefer using a docker volume over a bind-mounted volume to avoid file permission or performance problems. Eg:
```sh
# create docker volume once, eg:
docker volume create kvrocks_data

docker run --volume kvrocks_data:/kvrocks_data \
  --interactive --tty --publish 6666:6666 apache/kvrocks --bind 0.0.0.0 --dir /kvrocks_data

# note: the default data dir is /var/lib/kvrocks. The above example changes the location from default to /kvrocks_data.
```

### Tuning Docker

Any command line switches in the the Docker CMD position are passed to the kvrocks app. For example, to change the "workers" setting from default to 16, you could include `--workers 16`

```shell
docker run -it --rm -p 6666:6666 apache/kvrocks --bind 0.0.0.0 --workers 16
```

To set an admin password, use the `requirepass` directive:

```shell
# assuming password exported on environment variable "KVROCKS_ADMIN_SECRET":
docker run -it --rm -p 6666:6666 apache/kvrocks --bind 0.0.0.0 --requirepass $KVROCKS_ADMIN_SECRET

# redis-cli on host looks like:
REDISCLI_AUTH=$KVROCKS_ADMIN_SECRET redis-cli -p 6666 ping
```

Alternatively, you might mount the entire [kvrocks.conf](https://github.com/apache/kvrocks/blob/v2.7.0/kvrocks.conf) file to the container. The default config location is `/var/lib/kvrocks/kvrocks.conf`. NOTE: if bind-mounting, it must be an entire directory (and so would look like `./my_conf_dir:/var/lib/kvrocks`.) To change the config file location, override the Docker entrypoint. (See Dockerfile as a guideline.) 


## Build and run Kvrocks from source

### Install dependencies

<Tabs>
<TabItem value="debian" label="Ubuntu / Debian">

```shell
sudo apt update
sudo apt install -y git build-essential cmake libtool python3 libssl-dev
```

</TabItem>
<TabItem value="centos" label="CentOS / RedHat" default>

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
<TabItem value="suse" label="openSUSE / SUSE Linux Enterprise">

```shell
sudo zypper install -y gcc11 gcc11-c++ make wget git autoconf automake python3 curl cmake
```

</TabItem>
<TabItem value="arch" label="Arch Linux">

```shell
sudo pacman -Sy --noconfirm autoconf automake python3 git wget which cmake make gcc
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
./build/kvrocks -c kvrocks.conf
```

Now you can use the `redis-cli` to run the kvrocks server as Redis on port `6666`:

```shell
redis-cli -p 6666
```
