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
        compressPublicAssets: true
    },
    tailwindcss: {
        cssPath: ['~/src/assets/css/tailwind.scss', { injectPosition: "last" }],
        viewer: false // To disable the viewer during development, set its value to false:
    },
    googleFonts: {
        families: {
            'Montserrat': '300..700',
        },
        subsets: ['latin'],
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