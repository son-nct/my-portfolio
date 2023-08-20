<script setup lang='ts'>
// Importing assets
import avatarPath from '@/assets/images/avatar.webp';
import circularText from '@/assets/svg/CircularText.svg';

// Importing configurations and directives
import GLOBAL_CONFIG from '../../../global-config';
import { MotionDirective as motion } from '@vueuse/motion';

// Destructuring configurations
const { initial, enter, delay } = GLOBAL_CONFIG.motionHook;

// Initializing directives
const vMotion = motion();

// Utility method to preload images
const preloadImage = (src: string): Promise<void> => {
    return new Promise<void>((resolve, reject): void => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
    });
}

// Use onMounted to preload the images
onMounted(async () => {
  await preloadImage(avatarPath);
  await preloadImage(circularText);
});

// Directly use the imported paths
const avatar = ref(avatarPath);
const circularTxt = ref(circularText);
</script>

<template lang="pug">
div
  .home__layout__wrapper(v-if="avatar")
    .home__layout__wrapper__content
      .image__wrapper
        img(:src="avatar" width="600" height="600")
      .content__intro__wrapper
          h1(
            v-motion
            :initial="initial"
            :enter="enter"
            :delay="delay"
          ) 
            | Turning Vision Into Reality With Code And Design.
          p(
            v-motion
            :initial="initial"
            :enter="enter"
            :delay="delay"
          ) 
            |As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
            | Explore my latest projects and articles, showcasing my expertise in Vue.JS and web development.
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
      img(:src="circularTxt" width="250" height="250")
      a.link__custom(href="mailto:sonnct.work@gmail.com")
        | Hire me  
    
</template>


<style lang="scss" scoped>
.home__layout__wrapper {
  @apply w-full h-screen inline-block z-0 bg-light lg:px-32 xl:px-36 overflow-hidden;

  &__content {
    @apply relative flex items-center justify-center;

    .image__wrapper {
      @apply flex items-center justify-start w-1/2 h-full;
      @apply lg:-translate-y-[20vh] xl:-translate-y-[20vh] 2xl:-translate-y-[35vh];

      img {
        @apply w-full h-auto;
      }
    }

    .content__intro__wrapper {
      @apply w-1/2 h-full flex flex-col items-center self-center;
      @apply lg:-translate-y-[10vh]  xl:-translate-y-[15vh] 2xl:-translate-y-[30vh];

      h1 {
        @apply inline-block text-6xl text-dark font-bold capitalize;
        @apply text-left text-6xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl;
      }

      p {
        @apply text-base my-4 font-medium md:text-sm sm:text-xs;
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
        @apply flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
        @apply bg-dark text-light w-20 h-20 rounded-full font-semibold;
    }
  }
}
</style>