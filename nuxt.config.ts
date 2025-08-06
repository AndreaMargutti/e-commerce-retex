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
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
        apiOptions: {
          region: "eu",
        },
      },
    ],
  ],

  alias: {
    "@design-system": fileURLToPath(
      new URL("./layers/design-system", import.meta.url),
    ),
  },
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
        password: "admin",
      },
    ],
  },
});
