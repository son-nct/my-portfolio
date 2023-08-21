<script setup  lang='ts'>
import  GLOBAL_CONFIG from '../../global-config'
const { initial, enter, delay } = GLOBAL_CONFIG.motionHook
import { MotionDirective as motion } from '@vueuse/motion';
const vMotion = motion()

import { useHead } from '@vueuse/head'

const siteData = reactive({
      title: `Thai Son | About Page`,
      description: `Dive into my portfolio, meticulously built with Vue.js, highlighting my flair for distinctive design and advanced web development.`,
})

useHead({
    title: computed(() => siteData.title),
    meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
    ],
     
})

</script>

<template lang="pug">
main.wrapper
    .wrapper__layout
        AnimateHeadingText(:text="'Passion Fuels Purpose! '")
//-   Suspense
//-     template(#fallback)
//-       Spinner
//-     HomeLayout

</template>


<style lang="scss" scoped>
.wrapper {
    @apply flex items-center text-dark w-full min-h-screen;

    &__layout {
        @apply flex flex-col w-full items-center justify-center
    }
}
</style>