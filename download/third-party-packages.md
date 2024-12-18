# Third-party Packages

In addition to [official releases](https://kvrocks.apache.org/download/), 
there are some convenient packages for different Linux distros maintained outside the Apache Kvrocks™ PMC.

That said, these packages are **NOT** created or sponsored by the ASF.

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

### Conda Forge

A [kvrocks](https://anaconda.org/conda-forge/kvrocks) package is maintained in the [conda-forge](https://conda-forge.org/), which can be installed within one command like `conda install conda-forge::kvrocks`, via [conda](https://github.com/conda/conda) or [mamba](https://github.com/mamba-org/mamba).

You can check its source code [here](https://github.com/conda-forge/kvrocks-feedstock).
