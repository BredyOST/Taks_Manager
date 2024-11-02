import buildLoaders from "../build/builLoaders";
import prettierConfig from "eslint-config-prettier";

function buildRules()
{
    return {
        ...prettierConfig.rules,
        "prettier/prettier": "error",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/explicit-function-return-type": "off",
        "eqeqeq": "error",
    }
}

export default buildLoaders;