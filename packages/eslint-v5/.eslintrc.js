// @ts-check

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
};

module.exports = config;
