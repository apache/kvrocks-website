# Third-party Packages

In addition to [official releases](https://kvrocks.apache.org/download/), 
there are some packages for different linux distros maintained by some individual community members.

Please note that these packages are NOT created and sponsored by the ASF.

### Debian and its derivatives (e.g. Ubuntu)

[kvrocks-fpm](https://github.com/RocksLabs/kvrocks-fpm) is maintained by RocksLabs, 
which generates Debian packages from official releases via [fpm](https://github.com/jordansissel/fpm).
Check [releases](https://github.com/RocksLabs/kvrocks-fpm/releases) page in the repository to download.

Note that binaries included in the generated packages are built in GitHub Actions from official released source.

### Arch Linux

A [kvrocks](https://aur.archlinux.org/packages/kvrocks) package in the Arch User Repository (AUR)
is maintained by [@PragmaTwice](https://github.com/pragmatwice).

Note that, like other AUR packages, the package does not contain binary files itself,
since all binaries will be built by [makepkg](https://wiki.archlinux.org/title/makepkg) from the package scripts.
