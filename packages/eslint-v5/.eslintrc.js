// @ts-check

const expectedWarnings = require("../../fixtures/expected-warnings");

/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ["eslint:recommended"],
  parser: "hermes-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    es6: true,
    node: true,
  },
  rules: expectedWarnings,
};

module.exports = config;
