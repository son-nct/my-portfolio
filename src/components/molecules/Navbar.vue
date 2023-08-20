<script lang='ts'>
import { MotionDirective as motion } from '@vueuse/motion'

export default {
  directives: {
    motion: motion(),
  },
}
</script>

<template lang="pug">
div
    header.header__wrapper
        nav(
            v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                :delay="200"
        )
            Link(:to="'/'" :title="'Home'") 
            Link(:to="'/about'" :title="'About'") 
            Link(:to="'/projects'" :title="'Projects'")
            Link(:to="'/articles'" :title="'Article'") 
        div.header__wrapper__logo
            Logo
        nav.navbar__social__wrapper(
            v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                :delay="200"
        )
            a(
                href="https://github.com/son-nct"
                target="_blank"
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :hovered="{ scale: 1.2 }"
                :tapped="{scale: 0.9}"
                :delay="200"
            )
                img(src='@/assets/svg/logo-github.svg' alt='github logo').icon
            a(
                href="https://facebook.com"
                target="_blank"
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :hovered="{ scale: 1.2 }"
                :tapped="{scale: 0.9}"
                :delay="200"
            )
                img(src='@/assets/svg/linkedin.svg' alt='linkedin logo').icon
</template>


<style lang="scss" scoped>
.header__wrapper {
    @apply px-32 py-8 font-medium w-full flex items-center justify-between;
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