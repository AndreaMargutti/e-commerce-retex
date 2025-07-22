import { fileURLToPath } from "url";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/eslint",
    "@kgierke/nuxt-basic-auth",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],
  alias: {
    "@design-system": fileURLToPath(
      new URL("./layers/design-system", import.meta.url),
    ),
  },
  // image: {
  //   provider: "netlify",
  // },
  i18n: {
    strategy: "prefix",
    defaultLocale: "en",
    detectBrowserLanguage: false,
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "it", name: "Italiano", file: "it.json" },
    ],
    compilation: {
      strictMessage: false,
    },
  },

  basicAuth: {
    enabled: true,
    users: [
      {
        username: "andrea",
        password: "andrea",
      },
      {
        username: "gabriele",
        password: "gabriele",
      },
    ],
  },
});
