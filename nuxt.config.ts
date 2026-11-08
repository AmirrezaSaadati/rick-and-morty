import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: [
    { path: '~/components/common', pathPrefix: false },
    { path: '~/components/view', pathPrefix: false }
  ],
  runtimeConfig: {
    public: {
      graphqlEndpoint: 'https://rickandmortyapi.com/graphql'
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
