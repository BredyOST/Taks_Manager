import prettierPlugin from "eslint-plugin-prettier";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

function buildPlugins() {

    return {
        prettier: prettierPlugin,
        "@typescript-eslint": typescriptPlugin,
    }
}

export default buildPlugins;