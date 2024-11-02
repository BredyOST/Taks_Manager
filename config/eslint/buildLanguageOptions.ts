import typescriptParser from "@typescript-eslint/parser";

function buildLanguageOptions() {
    return {
        parser: typescriptParser,
        ecmaVersion: "latest",
        sourceType: "module",
    }
}

export default buildLanguageOptions;