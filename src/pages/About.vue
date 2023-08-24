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
        .wrapper__layout__grid
            div.wrapper__layout__grid__introduction
                h2 Biography
                p.paragraph.my-4
                    | Hello, I'm 
                    span.font--bold Thái Sơn
                    | , a web development and UI/UX design enthusiast who is dedicated to crafting elegant and user-focused online solutions. With a track record of 1.5 years in the industry,
                    | I continually seek fresh and inventive methods to realize my clients' aspirations.
                p.paragraph
                    | I'm convinced that design goes beyond mere aesthetics – it centers on addressing challenges and crafting seamless, delightful experiences for users.

//-   Suspense
//-     template(#fallback)
//-       Spinner
//-     HomeLayout

</template>


<style lang="scss" scoped>
.wrapper {
    // @apply flex items-center text-dark w-full min-h-screen;
    @apply flex flex-col w-full items-center justify-center;

    .font--bold {
        @apply font-bold;
    }

    &__layout {
        @apply flex flex-col w-full items-center justify-center;
        
        @apply  lg:px-16 relative md:px-12 sm:px-8 pt-16;

        &__grid {
            @apply grid grid-cols-8 w-full gap-16;

            &__introduction {
                @apply col-span-3 flex flex-col items-start justify-center;

                h2 {
                    @apply mb-4 text-lg font-bold uppercase text-dark/75;
                }

                p {
                    @apply font-medium text-base;
                  
                }
            }
        }
    }
}
</style>