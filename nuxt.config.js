export default {
    /*
    ** Activate components - https://nuxtjs.org/guides/directory-structure/components#components-module
    */
    components: true,

    /*
    ** Global CSS - https://nuxtjs.org/guides/features/configuration#pre-processors
    */
    css: [
        '~/assets/main.css'
    ],

    /*
    ** Head Property - https://nuxtjs.org/guides/features/meta-tags-seo
    */
    head: {
        bodyAttrs: {
            class: 'bodyAttrs bodyAttrs2'
        },
        htmlAttrs: {
            class: 'htmlAttrs'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        title: process.env.npm_package_name || '',
    },
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios'
    ],
}