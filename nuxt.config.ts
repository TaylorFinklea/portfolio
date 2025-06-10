// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-06-09",
  ssr: true,
  nitro: {
    preset: "vercel",
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/content",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  image: {
    provider: "vercel",
  },
});
