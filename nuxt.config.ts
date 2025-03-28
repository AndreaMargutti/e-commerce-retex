import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/fonts", "@nuxtjs/i18n"],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
});
