// https://nuxt.com/docs/api/configuration/nuxt-config
import config from './src/config/index';
import { meta, links } from './src/config/head/seo';

const {
    NUXT_API_BASE_URL
} = process.env

export default defineNuxtConfig({
    ...config,

    imports: {
        autoImport: false
    },

    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            meta: [...meta],
            link: [...links]
        }
    },

    runtimeConfig: {
        public: {
            apiBaseUrl: NUXT_API_BASE_URL
        }
    },
});