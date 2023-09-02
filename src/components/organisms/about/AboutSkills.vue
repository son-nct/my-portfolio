<script setup lang="ts"></script>

<template lang="pug">
.skills__wrapper
    h2.skills__wrapper__title Skills
    .skills__wrapper__content
    
</template>

<style lang="scss">
   .skills__wrapper {
      @apply container max-w-screen-2xl;

      &__title {
         @apply font-bold text-8xl mt-64 w-full text-center;
      }

      &__content {
         @apply w-full h-screen relative flex items-center justify-center bg-circularLight rounded-full;
      }
   }
</style>
