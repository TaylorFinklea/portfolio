/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './formkit.config.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': colors.zinc,
        'primary-light': colors.zinc,
        primary: colors.cyan,
        accent: colors.teal,
      },
      fontFamily: {
        test: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        test2: [
          'Inter var',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite')],
}
