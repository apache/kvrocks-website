# Maturity Assessment for Apache Kvrocks (incubating)

The goals of this maturity model are to describe how Apache projects operate in a concise and high-level way, and to provide a basic framework that projects may choose to use to evaluate themselves.

More details can be found [here](https://community.apache.org/apache-way/apache-project-maturity-model.html).

## Status of this assessment

This assessment is still working in progress.

## Maturity model assessment

The following table is filled according to the [Apache Maturity Model](https://community.apache.org/apache-way/apache-project-maturity-model.html). Mentors and community members are welcome to comment and modify it.

### CODE

| **ID**   | **Description** | **Status** |
| -------- | ----- | ---------- |
| **CD10** | The project produces Open Source software for distribution to the public, at no charge.                                                                                                                                                                         | **YES** The project source code is licensed under the `Apache License 2.0`. |
| **CD20** | Anyone can easily discover and access the project's code..                                                                                                                                                                                                     | **YES** The [offical website](https://kvrocks.apache.org/) includes `GitHub` link which can access GitHub directly. |
| **CD30** | Anyone using standard, widely-available tools, can build the code in a reproducible way.                                                                                                                                                                       | **YES**  Apache Kvrocks provide [how-to-build](/docs/getting-started#build-and-run-kvrocks-from-source) document to tell user how to compile on bare metal. |
| **CD40** | The full history of the project's code is available via a source code control system, in a way that allows anyone to recreate any released version.                                                                                                            | **YES** It depends on git, and anyone can view the full history of the project via commit logs. |
| **CD50** | The source code control system establishes the provenance of each line of code in a reliable way, based on strong authentication of the committer. When third parties contribute code, commit messages provide reliable information about the code provenance. | **YES** The project uses GitHub and managed by Apache Infra, it ensuring provenance of each line of code to a committer. And the third-party contributions are accepted in accordance with the [Contributing Guide](https://kvrocks.apache.org/community/contributing/).|

### LICENSE

| **ID**   | **Description**                                                                                                                                                                                                                                                                 | **Status** |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **LC10** | The Apache License, version 2.0, covers the released code.                                                                                                                                                                                                                     | **YES** The [LICENSE](https://github.com/apache/incubator-kvrocks/blob/unstable/LICENSE) is in GitHub repository. And all source files are with APLv2 header, checked by `apache/skywalking-eyes@v0.4.0`. |
| **LC20** | Libraries that are mandatory dependencies of the project's code do not create more restrictions than the Apache License does.                                                                                                                                                   | **YES** All [dependencies](https://github.com/apache/incubator-kvrocks/tree/unstable/cmake) has been checked and non of them create more restrictions than the Apache License does. |
| **LC30** | The libraries mentioned in LC20 are available as Open Source software.                                                                                                                                                                                                          | **YES** See [dependencies](https://github.com/apache/incubator-kvrocks/tree/unstable/cmake). |
| **LC40** | Committers are bound by an Individual Contributor Agreement (the "Apache iCLA") that defines which code they may commit and how they need to identify code that is not their own. | **YES** All committers have iCLAs. |
| **LC50** | The project clearly defines and documents the copyright ownership of everything that the project produces.                                                                                                                                                                              | **YES** And all source files are with APLv2 header, checked by `apache/skywalking-eyes@v0.4.0`. |

### Releases

| **ID**   | **Description**                                                                                                                                                                                                                                                                 | **Status** |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **RE10** | Releases consist of source code, distributed using standard and open archive formats that are expected to stay readable in the long term.                                                                                                                                       | **YES** Source release is distributed via [dist.apache.org](https://dist.apache.org/repos/dist/release/incubator/kvrocks/) and linked from [download page](/download). |
| **RE20** | The project's PPMC (Project Management Committee, see CS10) approves each software release in order to make the release an act of the Foundation.                                                                                                                                                                          | **YES** All releases have been voted at dev@kvrocks.apache.org and general@incubator.apache.org, and have at least 3 PPMC's votes. |
| **RE30** | Releases are signed and/or distributed along with digests that anyone can reliably use to validate the downloaded archives.                                                                                                                                                       | **YES** All releases are signed, and the [KEYS](https://dist.apache.org/repos/dist/release/incubator/kvrocks/KEYS) are available. |
| **RE40** | The project can distribute convenience binaries alongside source code, but they are not Apache Releases, they are provided with no guarantee. | **YES** User can easily build binaries from source code, and we do not provide binaries as Apache Releases. |
| **RE50** | The project documents a repeatable release process so that someone new to the project can independently generate the complete set of artifacts required for a release. | **YES** We can follow the [Release guide](https://kvrocks.apache.org/community/create-a-release) to make new Apache Kvrocks releases, and so far we had 4 different release managers. |

### Quality

| **ID**   | **Description**                                                                                                                                                                                                                                                                 | **Status** |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **QU10** | The project is open and honest about the quality of its code. Various levels of quality and maturity for various modules are natural and acceptable as long as they are clearly communicated. | **YES** We encourage user to [report issues](https://github.com/apache/incubator-kvrocks/issues) |
| **QU20** | The project puts a very high priority on producing secure software.                                                                                                                                                                                                            | **YES** All security issues will be addressed within 3 days. |
| **QU30** | The project provides a well-documented, secure and private channel to report security issues, along with a documented way of responding to them. | **YES** Website provides a [security page](https://kvrocks.apache.org/community/security/) |
| **QU40** | The project puts a high priority on backwards compatibility and aims to document any incompatible changes and provide tools and documentation to help users transition to new features. | **YES** All releases have backward compatibility. |
| **QU50** | The project strives to respond to documented bug reports in a timely manner. | **YES** The project has resolved 300+ issues and 800+ pull requests so far, with very prompt response. |

### Community

| **ID**   | **Description**                                                                                                                                                                                                                                                                 | **Status** |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **CO10** | The project has a well-known homepage that points to all the information required to operate according to this maturity model. | **YES** The [website](https://kvrocks.apache.org/) includes all information user need to run Apache Kvrocks. |
| **CO20** | The community welcomes contributions from anyone who acts in good faith and in a respectful manner, and who adds value to the project. | **YES** Apache Kvrocks provides [Code submission guide](https://kvrocks.apache.org/community/contributing) and welcome all good contributions. |
| **CO30** | Contributions include source code, documentation, constructive bug reports, constructive discussions, marketing and generally anything that adds value to the project. | **YES** All good contributions including code and non-code are welcomed. |
| **CO40** | The community strives to be meritocratic and gives more rights and responsibilities to contributors who, over time, add value to the project. | **YES** The community has elected 2 new PPMC members and 4 new committers so far. |
| **CO50** | The project documents how contributors can earn more rights such as commit access or decision power, and applies these principles consistently. | **YES** With [committer guide](https://kvrocks.incubator.apache.org/community/vote-a-core-developer/) in the community document. |
| **CO60** | The community operates based on consensus of its members (see CS10) who have decision power. Dictators, benevolent or not, are not welcome in Apache projects. | **YES** All decisions are made after vote by community members. |
| **CO70** | The project strives to answer user questions in a timely manner. | **YES** We use dev@kvrocks.apache.org, [GitHub issue](https://github.com/apache/incubator-kvrocks/issues) and [GitHub discussion](https://github.com/apache/incubator-kvrocks/discussions) to do this in a timely manner. |

### Consensus

| **ID**   | **Description**                                                                                                                                                                                                                                                                 | **Status** |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **CS10** | The project maintains a public list of its contributors who have decision power. The project's PPMC (Project Management Committee) consists of those contributors. | **YES** See [members](https://kvrocks.apache.org/community/#people) with all PPMC members and committers. |
| **CS20** | Decisions require a consensus among PPMC members and are documented on the project's main communications channel. The PPMC takes community opinions into account, but the PPMC has the final word. | **YES** All decisions are made by votes on dev@kvrocks.apache.org, and with at least 3 +1 votes from PPMC. |
| **CS30** | The project uses documented voting rules to build consensus when discussion is not sufficient. | **YES** The project uses the standard ASF voting rules. |
| **CS40** |In Apache projects, vetoes are only valid for code commits. The person exercising the veto must justify it with a technical explanation, as per the Apache voting rules defined in CS30. | **YES** Apache Kvrocks community has not used the veto power yet except for code commits. |
| **CS50** | All "important" discussions happen asynchronously in written form on the project's main communications channel. Offline, face-to-face or private discussions that affect the project are also documented on that channel. | **YES** All important discussions and conclusions are recorded in written form. |

### Independence

| **ID**   | **Description**                                                                                                                                                                                                                                                                 | **Status** |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **IN10** | The project is independent from any corporate or organizational influence. | **YES** The PPMC members and committer of Apache Kvrocks are from 7+ companies, and majority of them are NOT From the company that donated this project. |
| **IN20** | Contributors act as themselves, not as representatives of a corporation or organization. | **YES** The contributors act on their own initiative without representing a corporation or organization. |
