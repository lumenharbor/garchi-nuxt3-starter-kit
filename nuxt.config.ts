import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    GARCHI_API_URL: "https://garchi.co.uk/api/v2",
    GARCHI_API_KEY: "your_api_key",
  },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  components: {
    dirs: [
      {
        "path": "~/components/garchi",
        "global": true
      },
      "~/components"
    ]
  },
  experimental: {
    componentIslands: true
  },
  future: {
    compatibilityVersion: 5,
  },

})
