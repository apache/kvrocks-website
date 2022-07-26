---
title: How to verify release
sidebar_position: 3
---

To verify the release, the following checklist can be used to reference:
- [ ] Download links are valid.
- [ ] Checksums and PGP signatures are valid.
- [ ] Source code artifacts have correct names matching the current release.
- [ ] LICENSE and NOTICE files are correct for the repository.
- [ ] All files have license headers if necessary.
- [ ] Building is OK.


## Download the release package to be verified to the local environment
> Use the following command to download all artifacts, replace "${release_version}-${rc_version}" with the version ID of the version to be released:
```shell
svn co https://dist.apache.org/repos/dist/dev/incubator/kvrocks/${release_version}-${rc_version}/
```

## Verify signature and hash
> Start the verification process, which includes but is not limited to the following content and verification methods.
> GnuPG is recommended, which can install by yum install gnupg or apt-get install gnupg.

### Check if the release package is complete
The package to release must check:
- Whether to include the source code package
- Whether to include the signature of the source code package
- Whether to include the sha512 of the source code package
- (if include) Check the binary package, also check the contents listed in (2)-(4)

### Verify signature and hash
GnuPG is recommended, which can install by yum install GnuPG or apt-get install GnuPG.
  - Import public key
  ```shell
  curl https://downloads.apache.org/incubator/kvrocks/KEYS > KEYS # Download KEYS
  gpg --import KEYS # Import KEYS to local
  ```
  - Trust the public key
  > Trust the KEY used in this version

```shell
gpg --edit-key xxxxxxxxxx                           # KEY used in this version

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
  - Check signature and hash

1. Save below shell codes to file `release-verify.sh`

```shell
#!/bin/sh
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

./release-verify.sh apache-kvrocks-${release_version}-src.tar.gz 

```shell
gpg: Signature made 一  7/18 13:44:27 2022 CST
gpg:                using RSA key F77B887A4F25A9468C513E9AA3008E49B00F626B
gpg: Good signature from "hulk <hulk@apache.org>" [ultimate]
```

### Check the file content of the source package
Unzip `apache-kvrocks-${release_version}-src.tar.gz` and check as follows:
- [ ] LICENSE and NOTICE files are correct for the repository.
- [ ] All files have ASF license headers if necessary.
- [ ] Building is OK.

