// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path-browserify"


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  resolve: {
    alias: {
      path: "path-browserify",
    },
  },
})
