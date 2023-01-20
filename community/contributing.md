---
id: contributing
title: How to Contribute
---

In order to build an active community to improve Kvrocks, we welcome and are eager to your contributions of all kinds, including but not limited to:
- suggesting new ideas or feature requests (please refer to the [Community](/community) page);
- reporting bugs and defects you find (please refer to the [Community](/community) page); 
- contributing code changes (whether they are minor typo fixes, improvements, or major feature contributions); 
- fixing or improving the documentation or the project website.

### Submit Patches to Kvrocks

Before you submit a patch, we strongly recommend that you share your ideas with others in the community via [Issues](https://github.com/apache/incubator-kvrocks/issues), [Discussions](https://github.com/apache/incubator-kvrocks/discussions) or [Mailing Lists](/community/#mailing-list). 
Of course, you do not need to do this if you are submitting a patch that can already be associated with an issue, or a minor patch like a typo fix. 
You can then submit your patch to [apache/incubator-kvrocks](https://github.com/apache/incubator-kvrocks) via [Pull Requests](https://github.com/apache/incubator-kvrocks/pulls), which requires a GitHub account.

To help you familiarise yourself with the source tree, we have listed some important directories below, along with an explanation and the programming language used:

```
/cmake                  CMake source code for configuring dependencies and other build processing
/src                    C++ source code for the kvrocks server
/tests/cppunit          C++ unit tests for some components in /src
/tests/gocases          Golang test cases for unit, functional and integration tests
/utils/kvrocks2redis    C++ source code for the kvrocks2redis tool
```

Make sure you have C++ (at least GCC >= 7 or Clang >= 5, a higher-version compiler is highly recommended) and Go toolchains in your development environment, refering to the [Getting Started](/docs/getting-started#install-dependencies) page for all build dependencies. 
In addition to the source code listed above, the rest of the repository consists mainly of scripts written in python or shell.

If your patch contains changes to C++ code, make sure you format the code using Clang Format (`./x.py format` to quickly format all code). 
In addition, after you submit your patch, the CI (currently [GitHub Actions](https://github.com/apache/incubator-kvrocks/actions)) will perform some checks using Clang Tidy to ensure that the code follows some good patterns (modern C++) and without some security issues. 
So if the CI reports a problem, you can check the CI logs or run Clang Tidy locally (`./x.py check tidy`) to help you fix your code.
And if your patch involves changes to Go code, make sure you run golangci-lint (`./x.py check golangci-lint`) before submitting the patch.

For any code changes, we encourage you to add test cases for your changes (C++ unit tests or Go test cases, which are mandatory for large patches) and make sure they all pass before submitting (you can use `./x.py test cpp` and `./x.py test go` to run all test cases).

After opening your pull request, you can choose some reviewers, although it is not mandatory. We suggest you to choose a reviewer recommended by GitHub based on code snippets you modified, or some active community members in the [Community](/community/#people) page. After one or more committers have approved your PR and the rest of the community has no objections, congratulations, your PR will be merged into the main branch as soon as possible.

### Submit Patches to Document or Project Website

TODO

### Find Tasks and Start to Contribute

TODO

### Participate in the Community and Become a Committer

TODO
