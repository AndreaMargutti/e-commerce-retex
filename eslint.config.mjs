// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import pluginVue from "eslint-plugin-vue";

export default withNuxt([
  // Your custom configs here
  ...pluginVue.configs["flat/recommended"],
  eslintConfigPrettier,
]);
