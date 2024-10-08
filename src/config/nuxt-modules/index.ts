import type { NuxtConfig } from '@nuxt/schema';
import { i18n } from './i18n';

export default [
    i18n,
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
    '@vueuse/motion/nuxt',
    'nuxt-svgo',
    '@nuxt/icon',
    '@hypernym/nuxt-gsap'
] as NuxtConfig['modules'];