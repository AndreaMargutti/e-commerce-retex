import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/fonts"],
  css: ["./layers/design-system/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  icon: {
    provider: "server",
    customCollections: [
      {
        prefix: "my-icon",
        dir: fileURLToPath(new URL("./assets/icons", import.meta.url)),
        normalizeIconName: false,
      },
    ],
  },
});
