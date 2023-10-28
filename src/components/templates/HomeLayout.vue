<script setup lang='ts'>
// import image
import avatarPath from '@/assets/images/avatar.webp';
import circularTxtPath from '@/assets/svg/CircularText.svg'
import lightBulbPath from '@/assets/svg/miscellaneous_icons_1.svg'

import  GLOBAL_CONFIG from '../../../global-config'
const { initial, enter, delay } = GLOBAL_CONFIG.motionHook
import { MotionDirective as motion } from '@vueuse/motion';
const vMotion = motion()


const avatar = ref<string | null>(null)
const circularTxt = ref<string | null>(null)
const lightbulb = ref<string | null>(null)


onMounted(async () => {
  await Promise.all([loadImage(avatarPath), loadImage(circularTxtPath), loadImage(lightBulbPath)])
  avatar.value = avatarPath
  circularTxt.value = circularTxtPath
  lightbulb.value = lightBulbPath
})
</script>

<template lang="pug">
div
  .home__layout__wrapper(v-if="avatar")
    .home__layout__wrapper__content
      .image__wrapper
        img(:src="avatar" width="600" height="600" alt='avatar')
      .content__intro__wrapper
          AnimateHeadingText(:text="'Turning Vision Into Reality With Code And Design.'")
          AnimateParagraph(
            :text="'As a skilled full-stack developer,I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in Vue.JS and web development.'"
          )
          .btn__wrapper(
            v-motion
            :initial="initial"
            :enter="enter"
            :delay="delay"
          )
            a.btn__resume(
                  href="../../../CV_Nguyen_Cong_Thai_Son.pdf"
                  download="CV_Nguyen_Cong_Thai_Son"
                  target="_blank"
            )
              | Resume
              font-awesome-icon(:icon="['fa','arrow-up-right-from-square']").icon
            a.btn__contact(
                  href="mailto:sonnct.work@gmail.com"
            )
              | Contact
  .hire__me__wrapper(v-if="circularTxt")
    .image__wrapper
      img(:src="circularTxt" width="250" height="250" alt='circular text')
      a.link__custom(href="mailto:sonnct.work@gmail.com")
        | Hire me  
  .light__bulb__wrapper(v-if="lightbulb")
    .image__wrapper
      img(:src="lightbulb" width="150" height="150" alt='light bulb image')
  
</template>


<style lang="scss" scoped>
.home__layout__wrapper {
  @apply w-full h-screen inline-block z-0 bg-light lg:pr-32 2xl:px-36 overflow-hidden;

  &__content {
    @apply relative flex items-center justify-center;

    .image__wrapper {
      @apply flex items-center justify-start w-1/2 h-full;
      @apply md:-translate-y-[15vh] lg:-translate-y-[20vh] xl:-translate-y-[calc(100vh-60vh)] 2xl:-translate-y-[calc(100vh-65vh)];

      img {
        @apply w-full h-auto scale-90;
      }
    }

    .content__intro__wrapper {
      @apply lg:w-[55%] xl:w-1/2 h-full flex flex-col items-center self-center;
      @apply md:-translate-y-[5vh] lg:-translate-y-[10vh] xl:-translate-y-[calc(100vh-70vh)] 2xl:-translate-y-[calc(100vh-70vh)];

      h1 {
        @apply text-left text-6xl 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-3xl;
      }

      .btn__wrapper {
        @apply flex items-center self-start mt-2;

        .btn {
          &__resume {
            @apply flex items-center p-2.5 px-6 bg-dark text-light rounded-lg text-lg font-semibold duration-300 ease-out;
            @apply hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark;
          
            .icon {
              @apply w-6 ml-1 #{!important};
            }
          }

          &__contact {
            @apply ml-4 capitalize font-medium text-dark text-lg underline;
          }
        }
      }
    }
  }
}

.hire__me__wrapper {
  @apply fixed left-4 bottom-4;

  .image__wrapper {
    @apply w-48 h-auto flex items-center justify-center relative;

    img {
      @apply fill-dark animate-spin-slow w-52 h-auto;
    }

    .link__custom {
        @apply flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md border border-dark border-solid;
        @apply bg-dark text-light w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark ease-out duration-300;
    }
  }
}


.light__bulb__wrapper {
  @apply absolute right-14 -bottom-20  inline-block w-24;
}
</style>