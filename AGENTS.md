# AGENTS.md

## Purpose

This repository is a compatibility matrix for testing `hermes-eslint` against multiple ESLint majors.

Primary goal:

- Validate parser compatibility for Flow syntax across ESLint versions.

Current matrix scope:

- Scaffolded: ESLint majors under `packages/eslint-v*`
- Default test run: currently supported majors only

> [!WARNING]
> `hermes-eslint` currently fails with `eslint@10`.
> Keep `v10` out of default matrix runs (`test:supported`) until compatibility is verified.
> Use `test:v10` only for manual retests.

## Repository Layout

- Root workspace config: `package.json`
- Test packages: `packages/*`
- One package per ESLint major, named `packages/eslint-v<major>`

Each package should contain:

- `package.json` with pinned `eslint` major and `hermes-eslint`
- ESLint config:
  - `eslint.config.js` for newer ESLint majors using flat config
  - `.eslintrc.js` for legacy majors using eslintrc

Shared fixture:

- `fixtures/sample.js` with Flow syntax fixture (`// @flow`)
- Package lint scripts should target the shared fixture with a relative path.

## Commands

From repository root:

- Install dependencies:
  - `yarn install`
- Run supported matrix:
  - `yarn test:supported`
- Run a specific version:
  - `yarn test:v10`
  - `yarn test:v9`
  - `yarn test:v8`
  - `yarn test:v7`
  - `yarn test:v6`
  - `yarn test:v5`
  - `yarn test:v4`

## Change Guidelines

When adding or updating matrix packages:

- Keep package naming consistent: `eslint-v<major>`.
- Keep fixture intent consistent across versions (parser compatibility, not rule parity).
- Use `eslint:recommended` as the baseline rule set in each package config unless a compatibility issue requires a documented exception.
- Update `README.md` and root scripts when matrix behavior changes.
- If supported version coverage changes, document evidence and then update scripts/docs.

When debugging failures:

- Run individual workspace scripts first.
- Separate parser failures from lint rule differences.
- Capture exact error text in PR/commit notes for traceability.

## Agent Checklist

Before finishing any change:

1. Confirm `package.json` scripts match intended supported versions.
2. Confirm config format split remains correct:
    - newer majors: flat config
    - legacy majors: eslintrc
3. Run `yarn test:supported` and report outcome.
4. Keep this file and `README.md` aligned.
