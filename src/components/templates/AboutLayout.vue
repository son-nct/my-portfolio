<script setup  lang='ts'>
import GLOBAL_CONFIG from '../../../global-config.ts'
const { initial, enter, delay } = GLOBAL_CONFIG.motionHook
import { MotionDirective as motion } from '@vueuse/motion'
const vMotion = motion()
</script>

<template lang="pug">
main.wrapper
    .wrapper__layout
        AnimateHeadingText(:text="'Passion Fuels Purpose! '").wrapper__layout__heading
        .wrapper__layout__grid
            .wrapper__layout__grid__introduction
                h2 Biography
                p
                    | Hello, I'm 
                    span.font--bold Thái Sơn
                    | , a web development and UI/UX design enthusiast who is dedicated to crafting elegant and user-focused online solutions. With a track record of 1.5 years in the industry,
                    | I continually seek fresh and inventive methods to realize my clients' aspirations.
                p
                    | I'm convinced that design goes beyond mere aesthetics – it centers on addressing challenges and crafting seamless, delightful experiences for users.
                p
                    | I am working with  
                    span.font--bold DayOne 
                    | Company as a Front-End Developer. Alongside my professional responsibilities,
                    | I've meticulously developed a dedicated portfolio aimed at disseminating my extensive knowledge and technical insights within the realm of front-end development.
                    | My ultimate objective is to broaden the reach of this expertise, providing valuable insights and experiences to all those intrigued by this field.
            .wrapper__layout__grid__image

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

      @apply lg:px-16 relative md:px-12 sm:px-8 pt-16;

      &__heading {
         @apply mb-16;
      }

      &__grid {
         @apply grid grid-cols-8 w-full gap-16;

         &__introduction {
            @apply col-span-3 flex flex-col items-start justify-center;

            h2 {
               @apply mb-4 text-lg font-bold uppercase text-dark/75;
            }

            p {
               @apply font-medium text-base;

               &:not(:last-child) {
                  @apply my-4;
               }
            }
         }
      }
   }
}
</style>