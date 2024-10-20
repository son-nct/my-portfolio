import modules from './nuxt-modules'

export default defineNuxtConfig({
    modules,
    compatibilityDate: "2024-04-03",
    debug: false,
    // use when to debug on local
    // vite: {
    //   build: {
    //     minify: false
    //   }
    // },
    // nitro: {
    //   minify: false
    // },
    srcDir: 'src/',
    sourcemap: true,
    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },
    nitro: {
        compressPublicAssets: true,
        routeRules: {
            '/': { prerender: true, cache: { maxAge: 60 * 60, base: "redis" } },
            '/about': { prerender: true, cache: { maxAge: 60 * 60, base: "redis" } },
            '/src/public/images/**': { headers: { 'cache-control': 's-maxage=86400' } },// within 1 day
            '/src/assets/**': { headers: { 'cache-control': 's-maxage=86400' } },// within 1 day
        },
    },
    tailwindcss: {
        cssPath: ['~/src/assets/css/tailwind.scss', { injectPosition: "first" }],
        viewer: false // To disable the viewer during development, set its value to false:
    },
    googleFonts: {
        families: {
            'Montserrat': '300..700',
        },
        subsets: ['latin', 'vietnamese'],
        outputDir: 'assets',
        download: true,
        inject: true,
        display: 'swap',
        preload: false,
        base64: false
    },
    icon: {
        provider: 'iconify'
    },
    gsap: {
        composables: true,
        provide: false,
        extraPlugins: {
            scrollTrigger: true
        }
    }
})