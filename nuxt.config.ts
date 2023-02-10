// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // CLOUDFLARE WORKERS
  ssr: false,
  nitro: {
    preset: 'cloudflare-pages',
  },
  // END CLOUDFLARE WORKERS
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    'nuxt-icon',
    '@nuxt/image-edge',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'in-out' },
  },
})
