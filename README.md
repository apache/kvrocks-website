# Apache Kvrocks Official Website

This project keeps all sources used for building the Apache Kvrocks official website, which is served at https://kvrocks.apache.org/.

## Contact Us

* Submit [an issue](https://github.com/apache/kvrocks/issues/new) on the [main repo](http://github.com/apache/kvrocks)
* Send an email to the [dev mailing list](mailto:dev@kvrocks.apache.org) ([subscribe](mailto:dev-subscribe@kvrocks.apache.org))
* [Chat on Zulip](https://kvrocks.zulipchat.com/)

## Prerequisite

The Apache Kvrocks website is powered by [Docusaurus 2](https://docusaurus.io/) and is built with Node 19 and Yarn 3. Check the [deploy workflow](.github/workflows/deploy.yml) for concrete requirements and instructions.

## Installation

```shell
yarn
```

## Local Development

```shell
yarn start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

## Build

```shell
yarn build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.
