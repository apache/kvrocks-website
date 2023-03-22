# Apache Kvrocks (Incubating) Official Website

This project keeps all sources used for building up Apache Kvrocks (Incubating) official website which's served at https://kvrocks.apache.org/.

## Prerequisite

Apache Kvrocks (Incubating) website is powered by [Docusaurus 2](https://docusaurus.io/) and is bulit with Node 19 and Yarn 3. Check the [deploy workflow](.github/workflows/deploy.yml) for concrete requirements and instructions.

## Installation

```shell
yarn
```

## Local Development

```shell
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```shell
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
