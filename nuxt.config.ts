import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/i18n"],
  alias: {
    "@design-system": fileURLToPath(
      new URL("./layers/design-system", import.meta.url)
    ),
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
