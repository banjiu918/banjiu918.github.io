// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path')
export default defineNuxtConfig({
    
    app: {
        baseURL: '/banjiu918.github.io/',
        buildAssetsDir: 'nuxt_assets',
    },
    extends: [
        '@bloggrify/core',
    ],
    modules: ['@nuxtjs/tailwindcss'],
    nitro: {
        output: {
            publicDir: path.join(__dirname, 'docs')
        }
    }
})
