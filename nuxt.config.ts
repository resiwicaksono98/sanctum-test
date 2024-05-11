// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-auth-sanctum"],
  sanctum: {
    baseUrl: 'https://api.trait.id', // Laravel API
    endpoints: {
        csrf: '/sanctum/csrf-cookie',
        login: '/api/auth/login',
        logout: '/api/auth/logout',
        user: '/api/auth/me',
    },
    csrf: {
        cookie: 'XSRF-TOKEN',
        header: 'X-XSRF-TOKEN',
    },
    logLevel: 3
},
})
