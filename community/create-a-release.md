---
id: create-a-release
title: Create a Kvrocks release
---

This document mainly introduces how the Release Manager releases a new version in accordance with the Apache requirements.

## Introduction

* Source Release is the key point which Apache values, also, is necessary for a release;
* Binary Release is optional. Kvrocks can choose whether to release the binary package to the Apache repository or not.

Note that for binary distribution packages, it is necessary to check that the new version does not contain third-party dependencies.

Please remember that publishing software has legal consequences. This guide complements the foundation-wide policies and guides:

* [Release Policy](https://www.apache.org/legal/release-policy.html)
* [Release Distribution Policy](https://infra.apache.org/release-distribution)
* [Release Creation Process](https://infra.apache.org/release-publishing.html)

## Adding GPG KEY

This section is a brief from the [Cryptography with OpenPGP](https://infra.apache.org/openpgp.html) guideline.

:::note

This section is the requirements for release manager who is the first time to be a release manager

:::

### Install gpg

For more details, please refer to [GPG official website](https://www.gnupg.org/download/index.html). Here shows one approach to install GPG with [Homebrew](https://brew.sh/):

```shell
brew install gnupg
gpg --version #check the version, should be 2.x
```

### Generate gpg Key

Attentions:

* Name is best to keep consistent with your full name of Apache ID;
* Email should be the Apache email;
* Name is best to only use English to avoid garbled.

Run `gpg --full-gen-key` and complete the generation interactively:

```text
gpg (GnuPG) 2.2.20; Copyright (C) 2020 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA (default)
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
  (14) Existing key from card
Your selection? 1 # input 1
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (2048) 4096 # input 4096
Requested keysize is 4096 bits
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 0 # input 0
Key does not expire at all
Is this correct? (y/N) y # input y

GnuPG needs to construct a user ID to identify your key.

Real name: Hulk Lin               # input your name
Email address: hulk@apache.org    # input your email
Comment:                          # input some annotations, optional
You selected this USER-ID:
    "Hulk <hulk@apache.org>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O # input O
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

# Input the security key
┌──────────────────────────────────────────────────────┐
│ Please enter this passphrase                         │
│                                                      │
│ Passphrase: _______________________________          │
│                                                      │
│       <OK>                              <Cancel>     │
└──────────────────────────────────────────────────────┘
# key generatio[n will be done after your inputting the key with the following output
gpg: key E49B00F626B marked as ultimately trusted
gpg: revocation certificate stored as '/Users/hulk/.gnupg/openpgp-revocs.d/F77B887A4F25A9468C513E9AA3008E49B00F626B.rev'
public and secret key created and signed.

pub   rsa4096 2022-07-12 [SC]
      F77B887A4F25A9468C513E9AA3008E49B00F626B
uid           [ultimate] hulk <hulk@apache.org>
sub   rsa4096 2022-07-12 [E]
```

### Upload your key to public gpg keyserver

Firstly, list your key:

```shell
gpg --list-keys
```

The output is like:

```text
-------------------------------
pub   rsa4096 2022-07-12 [SC]
      F77B887A4F25A9468C513E9AA3008E49B00F626B
uid           [ultimate] hulk <hulk@apache.org>
sub   rsa4096 2022-07-12 [E]
```

Then, send your key id to key server:

```shell
gpg --keyserver keys.openpgp.org --send-key <key-id> # e.g., F77B887A4F25A9468C513E9AA3008E49B00F626B
```

Among them, `keys.openpgp.org` is a randomly selected keyserver, you can use `keyserver.ubuntu.com` or any other full-featured keyserver.

### Check whether the key is created successfully

Uploading takes about one minute, after that, you can check by your email at the corresponding keyserver.

Uploading keys to the keyserver is mainly for joining a [Web of Trust](https://infra.apache.org/release-signing.html#web-of-trust).

### Add your gpg public key to the KEYS document

:::info

SVN is required for this step.

:::

The svn repository of the release branch is: https://dist.apache.org/repos/dist/release/incubator/kvrocks

Please always add the public key to KEYS in the release branch:

```shell
svn co https://dist.apache.org/repos/dist/release/incubator/kvrocks kvrocks-dist
# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.
cd kvrocks-dist
(gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS # Append your key to the KEYS file
svn add .	# It is not needed if the KEYS document exists before.
svn ci -m "add gpg key for YOUR_NAME" # Later on, if you are asked to enter a username and password, just use your apache username and password.
```

### Upload the GPG public key to your GitHub account

1. Enter https://github.com/settings/keys to add GPG KEYS.
2. Please remember to bind the email address used in the GPG key to your GitHub account (https://github.com/settings/emails) if you find "unverified" after adding it.

## Create source releases and stage

1. Checkout to the RELEASE BRANCH and cherry-pick commits to release
2. Use `./x.py package source --version ${release_version}` to create release tarball
3. Make sure it compiles good and push tag to GitHub

## Upload artifacts to SVN dist repo

:::info

SVN is required for this step.

:::

The svn repository of the dev branch is: https://dist.apache.org/repos/dist/dev/incubator/kvrocks

First, checkout Kvrocks to local directory:

```shell
# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.
svn co https://dist.apache.org/repos/dist/dev/incubator/kvrocks kvrocks-dist-dev
```

Then, upload the artifacts:

```shell
cd kvrocks-dist-dev
mkdir ${release_version} # create a directory named by version
cp ${repo_dir}/apache-kvrocks-${release_version}-incubating-src.tar.gz* ${release_version}/ # copy source code and signature package to the versioned directory
svn status # check svn status
svn add ${release_version} # add to svn
svn status # check svn status
svn commit -m "Prepare for ${release_version}"     # commit to SVN remote server
```

## Build and push docker images

:::info

docker is required for this step.

:::

First, use `docker login` to login your own DockerHub account.

Then, build and push docker images to DockerHub:

```shell
docker buildx build --platform linux/amd64,linux/arm64 --tag ${your_dockerhub_username}/kvrocks:${release_version} --tag ${your_dockerhub_username}/kvrocks:latest . --output-type=registry
```

## Voting

### Kvrocks community vote

Kvrocks community vote，send email to: `dev@kvrocks.apache.org`:

```text
[VOTE] Release Apache Kvrocks(incubating) ${release_version}

Hello Apache Kvrocks(incubating) PMC and Community,

    This is a call for a vote to release Apache Kvrocks(incubating) version ${release_version}.

    The tag to be voted on is ${release_version}.

    The release candidate:

    https://dist.apache.org/repos/dist/dev/incubator/kvrocks/${release_version}/


    Keys to verify the release candidate:

    https://downloads.apache.org/incubator/kvrocks/KEYS


    Git tag for the release:

    https://github.com/apache/incubator-kvrocks/releases/tag/${release_version}

    Docker image:

    https://hub.docker.com/layers/${your_dockerhub_username}/kvrocks/${release_version}/images/sha256-${sha256_value}

    Please download, verify, and test.

    The VOTE will remain open for at least 72 hours.

    [ ] +1 approve
    [ ] +0 no opinion
    [ ] -1 disapprove with the reason

    To learn more about apache kvrocks, please see
    https://kvrocks.apache.org/

    Checklist for reference:

      [ ] Download links are valid.
      [ ] Checksums and signatures.
      [ ] LICENSE/NOTICE files exist
      [ ] No unexpected binary files
      [ ] All source files have ASF headers
      [ ] Can compile from source
      [ ] All Tests Passed
      [ ] Docker image with right version
      [ ] Docker image contains license files
      [ ] Docker image can work well

      More detailed checklist  please refer to:
      https://kvrocks.apache.org/community/verify-a-release-candidate

Thanks
```

After at least 72 hours with at least 3 +1 binding vote (from Kvrocks Podling PMC member) and no veto, claim the vote result:

```text
[RESULT][VOTE] Release Apache Kvrocks(incubating) ${release_version}

The vote to release Apache Kvrocks(Incubating) ${release_version} has passed.

The vote PASSED with xxx binding +1 and 0 -1 votes:

Binding votes:
- Yuan Wang
- tison
- hulk
- Liang Chen
- Jean-Baptiste Onofré
- Xiaoqiao He
- donghui liu

Vote thread:

${vote_thread_url}

Thank you to all the above members to help us to verify and vote for the
${release_version} release. We will move to IPMC voting shortly.

Thanks
```

### Incubator community vote

Incubator community vote，send email to: `general@incubator.apache.org`:

```text
[VOTE] Release Apache Kvrocks(incubating) ${release_version}

Hello Incubator PMC,

The Apache Kvrocks community has voted and approved the release of Apache
Kvrocks(incubating) ${release_version}. We now kindly request the IPMC members
review and vote for this release.

Kvrocks is a distributed key value NoSQL database that uses RocksDB as the storage engine
and is compatible with Redis protocol. The current release provides ...,
many new features, many improvements and fixes many bugs.

Kvrocks community vote thread:

${kvrocks_community_vote_thread_url}

Vote result thread:

${kvrocks_community_vote_result_thread_url}

The release candidate:

https://dist.apache.org/repos/dist/dev/incubator/kvrocks/${release_version}

This release has been signed with a PGP available here:

https://downloads.apache.org/incubator/kvrocks/KEYS

Git tag for the release:

https://github.com/apache/incubator-kvrocks/releases/tag/v${release_version}

Build guide can be found at:

https://github.com/apache/incubator-kvrocks#build

The vote will be open for at least 72 hours or until the necessary number
of votes is reached.

Please vote accordingly:
[ ] +1 Approve the release of Apache Kvrocks(incubating) ${release_version}
[ ] +0
[ ] -1 Do not approve (please specify the reason)

Thanks
```

After at least 72 hours with at least 3 +1 binding vote (from Incubator PMC member) and no veto, claim the vote result:

```text
[RESULT][VOTE] Release Apache Kvrocks(incubating) ${release_version}

Hi Incubator PMC,

The vote to release Apache Kvrocks(incubating) ${release_version} has passed with
4 +1 binding and 3 +1 non-binding votes, no +0 or -1 votes.

Binding votes：

- xxx
- yyy
- zzz

Non-Binding votes:

- aaa

Vote thread: ${incubator_vote_thread_url}

Thanks for reviewing and voting for our release candidate.

We will proceed with publishing the approved artifacts and sending out the announcement soon.
```

## Officially released

### Publish artifacts to SVN RELEASE branch

```shell
svn mv https://dist.apache.org/repos/dist/dev/incubator/kvrocks/${release_version} https://dist.apache.org/repos/dist/release/incubator/kvrocks/${release_version} -m "Release ${release_version}"
```

### Delete artifacts in SVN DEV branch

```shell
svn delete https://dist.apache.org/repos/dist/dev/incubator/kvrocks/${release_version} -m "Delete staging ${release_version} artifacts"
```

### Update website links

Update [releases data file](https://github.com/apache/incubator-kvrocks-website/blob/main/src/components/Releases/index.tsx).

### Send the announcement

Send the release announcement to `dev@kvrocks.apache.org` and CC `announce@apache.org`:

```html
[ANNOUNCE] Release Apache Kvrocks(incubating) ${release_version}

Hi all,

The Apache Kvrocks(incubating) community is pleased to announce
that Apache Kvrocks(incubating) ${release_version} has been released!

Kvrocks is a distributed key value NoSQL database that uses RocksDB
as storage engine and is compatible with Redis protocol.

This release contains a number of new features, bug fixes and
improvements compared to the last version released before.
The notable changes since ${release_version} include:
1. xxxxx
2. yyyyyy
3. zzzzzz

Please refer to the change log for the complete list of changes:
https://github.com/apache/incubator-kvrocks/releases/tag/v${release_version}

Apache Kvrocks website: https://kvrocks.apache.org/

Download Links: https://kvrocks.apache.org/download

Kvrocks Resources:
- Issue: https://github.com/apache/incubator-kvrocks/issues
- Mailing list: dev@kvrocks.apache.org

Thanks
On behalf of Apache Kvrocks community
```
