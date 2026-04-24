# hermes-eslint-compatibility-test

Test `hermes-eslint` parser behavior across ESLint majors.

See also: [AGENTS.md](./AGENTS.md)

## Install

```sh
corepack enable
yarn install
```

## Fixture

Sample file linted by all packages:

`fixtures/sample.js`

This file is symlinked into each package.

## Run tests

Lint the fixture file with all supported ESLint versions:

```sh
yarn test:supported
```

To lint with a specific version of ESLint, do something like:

```sh
yarn test:v8
```
