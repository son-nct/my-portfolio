<script setup lang='ts'>
import { MotionDirective as motion } from '@vueuse/motion'
import  GLOBAL_CONFIG from '../../../global-config'
const vMotion = motion()
const { initial, enter, delay } = GLOBAL_CONFIG.motionHook

import githubLogoPath from '@/assets/svg/logo-github.svg'
import linkedInLogoPath from '@/assets/svg/linkedin.svg'

const githubIcon = ref<string | null>(null)
const linkedInIcon = ref<string | null>(null)

onMounted(async () => {
   await Promise.all([loadImage(githubLogoPath), loadImage(linkedInLogoPath)])
   githubIcon.value = githubLogoPath
   linkedInIcon.value = linkedInLogoPath
})

</script>

<template lang="pug">
div
    header.header__wrapper(
        v-motion
        :initial="initial"
        :enter="enter"
        :delay="200"
    )
        nav
            Link(:to="'/'" :title="'Home'") 
            Link(:to="'/about'" :title="'About'") 
            Link(:to="'/projects'" :title="'Projects'")
            Link(:to="'/articles'" :title="'Article'") 
        div.header__wrapper__logo
            Logo
        nav.navbar__social__wrapper
            a(
                href="https://github.com/son-nct"
                target="_blank"
                v-motion
                :initial="initial"
                :enter="{ ...enter , scale: 1 }"
                :hovered="{ scale: 1.5 }"
                :delay="delay"
                v-if="githubIcon"
            )
                img(:src='githubIcon' alt='github logo' width="32" height="32").icon
            a(
                href="https://facebook.com"
                target="_blank"
                v-motion
                :initial="initial"
                :enter="{ ...enter , scale: 1 }"
                :hovered="{ scale: 1.5 }"
                :delay="delay"
                v-if="linkedInIcon"
            )
                img(:src='linkedInIcon' alt='linkedin logo' width="32" height="32").icon
</template>


<style lang="scss" scoped>
.header__wrapper {
    @apply px-32 py-8 font-medium w-full flex items-center justify-between lg:px-16 relative md:px-12 sm:px-8;
    @apply flex items-center;

    &__logo {
        @apply absolute left-1/2 top-4 translate-x-[-50%]
    }

    .navbar__social__wrapper {
        @apply flex items-center justify-center flex-wrap;

        .icon {
            @apply w-6 mr-3;
        }
    }
}
</style>