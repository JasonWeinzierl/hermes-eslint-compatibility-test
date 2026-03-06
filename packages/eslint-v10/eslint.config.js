// @ts-check

const js = require("@eslint/js");
const hermesParser = require("hermes-eslint");
const expectedWarnings = require("../../fixtures/expected-warnings");

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  {
    files: ["sample.js"],
    languageOptions: {
      parser: hermesParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      ...js.configs.recommended.rules,
      ...expectedWarnings,
    },
  },
];

module.exports = config;
