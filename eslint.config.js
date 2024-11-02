import buildLoaders from "./config/eslint/buildExtends";

{
  "extends": buildLoaders(),
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  }
}