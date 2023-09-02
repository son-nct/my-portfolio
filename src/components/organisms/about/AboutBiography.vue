<script setup lang="ts">
   import GLOBAL_CONFIG from '../../../../global-config.ts'
   const { initial, enter, delay } = GLOBAL_CONFIG.motionHook
   import { MotionDirective as motion } from '@vueuse/motion'
   const vMotion = motion()

   import avatarPath from '@/assets/images/avatar2.webp'
   const avatar = ref<string | null>(null)
   onMounted(async () => {
      await loadImage(avatarPath)
      avatar.value = avatarPath
   })
</script>

<template lang="pug">
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
            img(:src="avatar" alt="avatar" width="250" height="250" v-if="avatar")
            Spinner(v-else)
        .wrapper__layout__grid__number
            div.wrapper__layout__grid__number__section
                AnimateCounterText(:startAmount="0" :endAmount="10" :suffix="'+'")
                h2 years of experience
            div.wrapper__layout__grid__number__section
                AnimateCounterText(:startAmount="0" :endAmount="10" :suffix="'+'")
                h2 projects completed
            div.wrapper__layout__grid__number__section
                AnimateCounterText(:startAmount="0" :endAmount="10" :suffix="'+'")
                h2 blog post written
</template>

<style lang="scss" scoped>
   .wrapper__layout {
      @apply flex flex-col w-full items-center justify-center;

      @apply lg:px-16 md:px-12 sm:px-8 pt-16;

      &__heading {
         @apply mb-16 text-8xl;
      }

      &__grid {
         @apply grid grid-cols-8 w-full gap-16;

         &__introduction {
            @apply col-span-3 flex flex-col items-start justify-start pt-14;

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

         &__image {
            @apply relative flex translate-x-9 items-center justify-center col-span-3 h-max min-h-[600px] rounded-2xl border-2 border-solid border-dark bg-light p-8 scale-90;
            @apply shadow-custom;

            img {
               @apply w-full h-auto rounded-2xl;
            }
         }

         &__number {
            @apply col-span-2 flex flex-col items-center justify-between pt-14;

            &__section {
               @apply flex flex-col items-end justify-center;

               span {
                  @apply inline-block text-7xl font-bold;
               }

               h2 {
                  @apply text-dark/75 text-xl capitalize font-medium;
               }
            }
         }
      }
   }
</style>
