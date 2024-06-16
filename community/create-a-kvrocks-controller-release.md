---
id: create-a-kvrocks-controller-release
title: Create a kvrocks controller release
---

This document mainly introduces how the Release Manager releases a new version in accordance with the Apache requirements.

## Introduction

Apache Kvrocks™ Controller is a cluster management tool for Apache Kvrocks™. And the release process and policy of Apache Kvrocks Controller is similar to Apache Kvrocks™:

* Source Release is the key point which Apache values, also, is necessary for a release;
* Binary Release is optional. Apache Kvrocks™ Controller can choose whether to release the binary package to the Apache repository or not.

Note that for binary distribution packages, it is necessary to check that the new version does not contain third-party dependencies.

Please remember that publishing software has legal consequences. This guide complements the foundation-wide policies and guides:

* [Release Policy](https://www.apache.org/legal/release-policy.html)
* [Release Distribution Policy](https://infra.apache.org/release-distribution)
* [Release Creation Process](https://infra.apache.org/release-publishing.html)

For the first release manager, you need to add your PGP key to the KEYS file in the repository, please refer to [Adding GPG KEY](https://kvrocks.apache.org/community/create-a-release/#adding-gpg-key).

## Create source releases and stage

1. Checkout to the RELEASE BRANCH and cherry-pick commits to release
2. Use `./x.py package source -v ${release_version} -rc ${candidate_number}` to create release tarball
3. Make sure it compiles good and push tag to GitHub

## Upload artifacts to SVN dist repo

:::info

SVN is required for this step.

:::

The svn repository of the dev branch is: https://dist.apache.org/repos/dist/dev/kvrocks/kvrocks-controller

First, checkout Kvrocks controller to local directory:

```shell
# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.
svn co https://dist.apache.org/repos/dist/dev/kvrocks/kvrocks-controller kvrocks-controller-dist-dev
```

Then, upload the artifacts:

```shell
cd kvrocks-controller-dist-dev
mkdir ${release_version} # create a directory named by version
cp ${repo_dir}/apache-kvrocks-controller-${release_version}-src.tar.gz* ${release_version}/ # copy source code and signature package to the versioned directory
svn status # check svn status
svn add ${release_version} # add to svn
svn status # check svn status
svn commit -m "Prepare for ${release_version}"     # commit to SVN remote server
```

## Draft release note

[Draft a new release note](https://github.com/apache/kvrocks-controller/releases/new).

You should choose the current release candidate tag. GitHub can automatically generate the content of release note, but you need to group it.

For some important content, highlight it at the beginning.

## Voting

### Kvrocks community vote

Kvrocks community vote，send email to: `dev@kvrocks.apache.org`:

```text
[VOTE] Release Apache Kvrocks Controller ${release_version}

Hello Apache Kvrocks PMC and Community,

    This is a call for a vote to release Apache Kvrocks Controller version ${release_version}.

    The tag to be voted on is ${release_version}-rc${candidate_number}.

    The release candidate:

    https://dist.apache.org/repos/dist/dev/kvrocks/kvrocks-controller/${release_version}/


    Keys to verify the release candidate:

    https://downloads.apache.org/kvrocks/KEYS


    Git tag for the release:

    https://github.com/apache/kvrocks-controller/releases/tag/${release_version}-rc${candidate_number}

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

      More detailed checklist  please refer to:
      https://kvrocks.apache.org/community/verify-a-release-candidate

Thanks
```

After at least 72 hours with at least 3 +1 binding vote (from Kvrocks PMC member) and no veto, claim the vote result:

```text
[RESULT][VOTE] Release Apache Kvrocks Controller ${release_version}

The vote to release Apache Kvrocks Controller ${release_version} has passed.

The vote PASSED with xxx binding +1 and 0 -1 votes:

Binding votes:
- XXX
- XXX
- XXX

No Binding votes:
- XXX
- XXX
- XXX

Vote thread:

${vote_thread_url}

Thank you to all the above members to help us to verify and vote for the
${release_version} release.

Thanks
```

## Officially released

### Publish artifacts to SVN RELEASE branch

```shell
svn mv https://dist.apache.org/repos/dist/dev/kvrocks/kvrocks-controller/${release_version} https://dist.apache.org/repos/dist/release/kvrocks/kvrocks-controller/${release_version} -m "Release ${release_version}"
```

### Publish release note

Edit the title of the draft release note and use the new ${release_version} tag, which github will create automatically.

Then, publish release.

### Update website links

Update [releases data file](https://github.com/apache/kvrocks-website/blob/main/src/components/Releases/kvrocks-controller.tsx).

### Send the announcement

Send the release announcement to `dev@kvrocks.apache.org` and CC `announce@apache.org`:

> You have to use `${name}@apache.org` post email to `announce@apache.org`

```html
[ANNOUNCE] Release Apache Kvrocks Controller ${release_version}

Hi all,

The Apache Kvrocks community is pleased to announce
that Apache Kvrocks Controller ${release_version} has been released!

Apache Kvrocks Controller is a cluster management tool for Apache Kvrocks, including the following key features:

- Failover - controller will failover or remove the master/slave node when probing failed
- Scale out the cluster in one line command
- Manage many clusters in one controller cluster
- Support multi metadata storages like etcd and so on

This release contains a number of new features, bug fixes and
improvements compared to the last version released before.
The notable changes since ${release_version} include:
1. xxxxx
2. yyyyyy
3. zzzzzz

Please refer to the change log for the complete list of changes:
https://github.com/apache/kvrocks-controller/releases/tag/v${release_version}

Apache Kvrocks website: https://kvrocks.apache.org/

Download Links: https://kvrocks.apache.org/download/kvrocks-controller

Kvrocks Resources:
- Issue: https://github.com/apache/kvrocks-controller/issues
- Mailing list: dev@kvrocks.apache.org

Thanks
On behalf of Apache Kvrocks community
```
