---
id: contributing
title: How to Contribute
---

In order to build an active community to improve Kvrocks, we welcome and are eager to your contributions of all kinds, including but not limited to:
- suggesting new ideas or feature requests (please refer to the [Community](index.md) page);
- reporting bugs and defects you find (please refer to the [Community](index.md) page); 
- contributing code changes (whether they are minor typo fixes, improvements, or major feature contributions); 
- fixing or improving the documentation or the project website.

## Submit patches to Kvrocks

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
And you can read about how to build this project on the [Getting Started](/docs/getting-started#compile-kvrocks-from-source) page.

If your patch contains changes to C++ code, make sure you format the code using Clang Format (`./x.py format` to quickly format all code). 
In addition, after you submit your patch, the CI (currently [GitHub Actions](https://github.com/apache/incubator-kvrocks/actions)) will perform some checks using Clang Tidy to ensure that the code follows some good patterns (modern C++) and without some security issues. 
So if the CI reports a problem, you can check the CI logs or run Clang Tidy locally (`./x.py check tidy`) to help you fix your code.
And if your patch involves changes to Go code, make sure you run golangci-lint (`./x.py check golangci-lint`) before submitting the patch.

For any code changes, we encourage you to add test cases for your changes (C++ unit tests or Go test cases, which are mandatory for large patches) and make sure they all pass before submitting (you can use `./x.py test cpp` and `./x.py test go` to run all test cases).

After opening your pull request (PR), you can choose some reviewers, although it is not mandatory.
We suggest you to choose a reviewer recommended by GitHub based on code snippets you modified, or some active community members (which can be found in the [Community](index.md#people) page).
After one or more committers have approved your PR and the rest of the community has no objections, congratulations, your PR will be merged into the main branch as soon as possible.

## Submit patches to document or project website

Contributions to the documentation and the project website are strongly encouraged, as they are often much less frequent.
The source code for both can be found in [apache/incubator-kvrocks-website](https://github.com/apache/incubator-kvrocks-website) repository, with the documentation written in Markdown format and the website based on Docusaurus. 
When contributing to the documentation, it is important to note that:
- Currently, the website does not provide documentation for individual releases, only for code in the main branch of the kvrocks repository, so please be careful not to document behaviour specific to older releases when contributing (if you need to do so, please mark the release separately to avoid confusion).
- After making major changes to the documentation, we recommend that you preview the changed version locally first to avoid formatting errors; you can use `yarn start` to build and preview the page locally.
- Do not copy from other copyrighted documents.

## Find tasks and start to contribute

A major obstacle for people just starting out and wanting to get involved in the community can be the difficulty of knowing where to start.
To solve this problem, here are some suggestions to help new contributors start with simple tasks to learn the structure of the code and participate in the community step by step:
- Filter the [Issues](https://github.com/apache/incubator-kvrocks/issues) with `good first issue` or `help wanted` label, pick a task from there, and get involved. Note that `good first issue` indicates an easy task for newcomers, while `help wanted` has no fixed task difficulty.
- Check out the Kvrocks roadmap in [Projects](https://github.com/apache/incubator-kvrocks/projects/2) and [Discussions](https://github.com/apache/incubator-kvrocks/discussions) and pick the parts you are familiar with to contribute.
- Keep up to date with Redis developments and feel free to contribute any features that exist in Redis and are missing in Kvrocks.

## Participate in the community and become a committer

As you find tasks to start participating in the community, you will gradually learn about the workings and practices of the community.
Here are some tips to help you feel more comfortable in the community:
- Try to express your intentions in as many words as possible, and do not be afraid of words.
- Talk to other members to get support before starting a new idea.

After being involved in the community for a while, some members may want to learn how to become a committer, who has write access to the project (this is limited to merging PRs that have been approved and passed the CI, as kvrocks protects the main branch), and the ability to review PRs from others.

The Kvrocks community does not set explicit thresholds or requirements for committers.
In theory, a community member can become a committer if a PMC member proposes to the PMC to grant committer privileges to the community member, and the PMC members vote on and approve the proposal.
And in practice, contributors who have been active in the community for a while have a good chance of becoming committers.
