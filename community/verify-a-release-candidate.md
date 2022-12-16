---
id: verify-a-release-candidate
title: Verify a release candidate
---

To verify the release, the following checklist can be used to reference:

- Download links are valid.
- Checksums and PGP signatures are valid.
- Source code artifacts have correct names matching the current release.
- LICENSE and NOTICE files are correct for the repository.
- All files have license headers if necessary.
- Building is OK.

:::note

It is **NOT** necessary to run all checks to cast a vote for a release candidate.

However, you should clearly state which checks you did. The release manager needs to ensure that each check was done.

:::

## Download the release package to be verified to the local environment

Use the following command to download all artifacts, replace "${release_version}-${rc_version}" with the version ID of the version to be released:

```shell
svn co https://dist.apache.org/repos/dist/dev/incubator/kvrocks/${release_version}-${rc_version}/
```

## Verify signature and hash

Start the verification process, which includes but is not limited to the following content and verification methods.

### Check if the release package is complete

The package to release must check:

- Whether to include the source code package
- Whether to include the signature of the source code package
- Whether to include the sha512 of the source code package
- Check the binary package (if include), also check the contents listed above

### Verify signature and hash

GnuPG is recommended, which can install by `yum install gnupg`, `apt-get install gnupg` or `brew install gnupg`.

First, import public key:

```shell
curl https://downloads.apache.org/incubator/kvrocks/KEYS > KEYS # Download KEYS
gpg --import KEYS # Import KEYS to local
```
Then, trust the public key by entering `gpg --edit-key <KEY-used-in-this-version>` and finishing interactively:

```text
gpg (GnuPG) 2.3.6; Copyright (C) 2021 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Secret key is available.

sec  rsa4096/A3008E49B00F626B
     created: 2022-07-12  expires: never       usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa4096/DD4049061341F808
     created: 2022-07-12  expires: never       usage: E
[ultimate] (1). hulk <hulk@apache.org>

gpg> trust
sec  rsa4096/A3008E49B00F626B
     created: 2022-07-12  expires: never       usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa4096/DD4049061341F808
     created: 2022-07-12  expires: never       usage: E
[ultimate] (1). hulk <hulk@apache.org>

Please decide how far you trust this user to correctly verify other users' keys
(by looking at passports, checking fingerprints from different sources, etc.)

  1 = I don't know or won't say
  2 = I do NOT trust
  3 = I trust marginally
  4 = I trust fully
  5 = I trust ultimately
  m = back to the main menu

Your decision? 5
Do you really want to set this key to ultimate trust? (y/N) y

sec  rsa4096/A3008E49B00F626B
     created: 2022-07-12  expires: never       usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa4096/DD4049061341F808
     created: 2022-07-12  expires: never       usage: E
[ultimate] (1). hulk <hulk@apache.org>
```
Now, check signature and hash:

1. Save below shell codes to file `release-verify.sh`

```shell
#!/usr/bin/env bash

YELLOW="\033[37;1m"
GREEN="\033[32;1m"
ENDCOLOR="\033[0m"

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 {YOUR RELEASE TAR FILE}" >&2
  exit 1
fi

PKG=$1

if [ ! -f "$PKG" ]; then
    echo "File '$PKG' does not exist."
    exit 1
fi

#gpg --armor --output "$PKG.asc" --detach-sig $PKG
gpg --verify "$PKG.asc" $PKG

if [ $? -eq 0 ]
then
    printf $GREEN"Success to verify the gpg sign"$ENDCOLOR"\n"
else
    printf $YELLOW"Failed to verify the gpg sign"$ENDCOLOR"\n"
fi

#shasum -a 512 $PKG > "$PKG.sha512"
shasum -a 512 -c "$PKG.sha512"

if [ $? -eq 0 ]
then
    printf $GREEN"Success to verify the checksum"$ENDCOLOR"\n"
else
    printf $YELLOW"Failed to verify the checksum"$ENDCOLOR"\n"
fi
```
2. verify the sign and checksum

```shell
./release-verify.sh apache-kvrocks-${release_version}-src.tar.gz
```

You will see the following output on success:

```text
gpg: Signature made 五 11/11 01:04:23 2022 CST
gpg:                using RSA key 0B279084F7EC85E8A6A20E1C10C48A3C1BE7E3D8
gpg: Good signature from "Mingyang Liu <twice@apache.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 0B27 9084 F7EC 85E8 A6A2  0E1C 10C4 8A3C 1BE7 E3D8
Success to verify the gpg sign
apache-kvrocks-2.2.0-incubating-src.tar.gz: OK
Success to verify the checksum
```

### Check the file content of the source package

Unzip `apache-kvrocks-${release_version}-src.tar.gz` and check the follows:

- LICENSE and NOTICE files are correct for the repository.
- All files have ASF license headers if necessary.
- Building is OK.
