// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // CLOUDFLARE WORKERS
  ssr: true,
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
    '@nuxt/content',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
