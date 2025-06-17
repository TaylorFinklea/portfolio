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
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/content",
  ],
  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storage: "localStorage",
    storageKey: "nuxt-color-mode",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  image: {
    provider: "vercel",
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      48: 48,
      96: 96,
      100: 100,
      200: 200,
      225: 225,
      400: 400,
    },
  },
});
