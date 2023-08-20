<script setup lang='ts'>
import avatar from '@/assets/images/avatar.webp';

</script>

<template lang="pug">
.home__layout__wrapper
  .home__layout__wrapper__content
    .image__wrapper
      img(:src="avatar")
    .content__intro__wrapper
      AnimateText
        h1(
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
        ) Turning Vision Into Reality With Code And Design.
      AnimateText
        p As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
          | Explore my latest projects and articles, showcasing my expertise in Vue.JS and web development.
</template>


<style lang="scss" scoped>
.home__layout__wrapper {
  @apply w-full h-screen inline-block z-0 bg-light px-32 overflow-hidden;

  &__content {
    @apply relative flex items-center justify-center;

    .image__wrapper {
      @apply flex items-center justify-start w-1/2 h-full;
      @apply -translate-y-[35vh];

      img {
        @apply w-full h-auto;
      }

    }

    .content__intro__wrapper {
      @apply w-1/2 h-full;
      @apply -translate-y-[20vh];

      h1 {
        @apply inline-block text-6xl text-dark font-bold capitalize;
      }
    }
  }

  


}
</style>