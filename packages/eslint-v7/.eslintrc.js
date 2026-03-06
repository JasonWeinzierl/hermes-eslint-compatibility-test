// @ts-check

const expectedWarnings = require("../../fixtures/expected-warnings");
const flowGlobals = require("../../fixtures/flow-globals");

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
  globals: flowGlobals,
  rules: expectedWarnings,
};

module.exports = config;
