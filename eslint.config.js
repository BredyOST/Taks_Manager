import buildLoaders from "./config/eslint/buildExtends";
import buildPlugins from "./config/eslint/buildPlugins";
import buildFiles from "./config/eslint/buildFiles";
import buildLanguageOptions from "./config/eslint/buildLanguageOptions";

export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: buildFiles(),
    languageOptions:buildLanguageOptions(),
    plugins: buildPlugins(),
    rules: buildLoaders()
  },
];
