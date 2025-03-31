import withNuxt from "./.nuxt/eslint.config.mjs";

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
module.exports = {
  eslintPluginPrettierRecommended,
};

export default withNuxt(eslintPluginPrettierRecommended);
