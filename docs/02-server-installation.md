# Server Installation
## Run Kvrocks Using Docker

For installing docker, follow the Docker installation instructions found here: https://docs.docker.com/engine/installation/.

Start the kvrocks service:

```shell
$ docker run -it -p 6666:6666 -v /var/lib/kvrocks:/var/lib/kvrocks apache/kvrocks
```
then you can use the redis-cli to play the kvrocks server as Redis.

## Run Kvrocks Using Binary

We will automated build the release binary for the CentOS7 and Ubuntu(>= 18.04) when releasing a new version, please step forward to [kvrocks releases](https://github.com/KvrocksLabs/kvrocks/releases) page to download the binary zip file. 

## Run Kvrocks Using Source Code

### 1. Install Dependencies

```shell
# Centos/Redhat
sudo yum install -y epel-release && sudo yum install -y git gcc gcc-c++ make cmake autoconf automake libtool which

# Ubuntu/Debian
sudo apt update
sudo apt-get install gcc g++ make cmake autoconf automake libtool

# macOS
brew install autoconf automake libtool cmake
```

### 2. Compile Kvrocks Source

```
$ git clone https://github.com/apache/incubator-kvrocks.git
$ cd incubator-kvrocks
$ ./x.py build # `./x.py build -h` to check more options;
               # especially, `./x.py build --ghproxy` will fetch dependencies via ghproxy.com.
```

The binary file `kvrocks` would be generated at `src` dir if everything was going well, or you can help to file an issue with your context.


