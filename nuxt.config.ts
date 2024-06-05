// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "~/assets/css/main.css"
  ],
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    ripple: true, // Enable ripple effect (optional)
    // Other PrimeVue configurations
  }
})