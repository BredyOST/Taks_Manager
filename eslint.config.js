import buildPlugins from "./config/eslint/buildPlugins.js";
import buildFiles from "./config/eslint/buildFiles.js";
import buildLanguageOptions from "./config/eslint/buildLanguageOptions.js";
import buildRules from "./config/eslint/buildRules.js";

export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: buildFiles(),
    languageOptions:buildLanguageOptions(),
    plugins: buildPlugins(),
    rules: buildRules(),
  },
];
