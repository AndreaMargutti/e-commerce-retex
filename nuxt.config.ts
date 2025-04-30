import { fileURLToPath } from "url";

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
    defaultLocale: "it",
    locales: [
      { code: "it", name: "italiano", file: "it.json" },
      { code: "en", name: "english", file: "en.json" },
    ],
  },
});
