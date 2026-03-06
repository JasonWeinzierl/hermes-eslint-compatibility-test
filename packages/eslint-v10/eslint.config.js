// @ts-check

const js = require("@eslint/js");
const hermesParser = require("hermes-eslint");

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  {
    basePath: "../../fixtures",
    files: ["sample.js"],
    languageOptions: {
      parser: hermesParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: js.configs.recommended.rules,
  },
];

module.exports = config;
