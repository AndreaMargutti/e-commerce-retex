import { fileURLToPath } from "url";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxt/eslint"],
  alias: {
    "@design-system": fileURLToPath(
      new URL("./layers/design-system", import.meta.url),
    ),
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "it", name: "Italiano", file: "it.json" },
    ],
    compilation: {
      strictMessage: false,
    },
  },
});
