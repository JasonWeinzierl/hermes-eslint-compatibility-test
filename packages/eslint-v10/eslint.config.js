// @ts-check

const js = require("@eslint/js");
const globals = require("globals");
const hermesParser = require("hermes-eslint");
const flowGlobals = require("../../fixtures/flow-globals");
const expectedWarnings = require("../../fixtures/expected-warnings");

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  {
    files: ["sample.js"],
    languageOptions: {
      parser: hermesParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...flowGlobals,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...expectedWarnings,
    },
  },
];

module.exports = config;
