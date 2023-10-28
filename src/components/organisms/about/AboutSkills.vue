<script setup lang="ts">
   import type { Skill } from '@/types/skill'
   const props = defineProps<{
      skills: Skill[]
   }>()
</script>

<template lang="pug">
.skills__wrapper
   AnimateHeadingText(:text="'Skills'")
   .skills__wrapper__content
      AnimateButtonSkill(
      v-for="skill in skills"
      :key="skill.text"
      :text="skill.text"
      :position-x="skill.positionX"
      :position-y="skill.positionY"
      :unit="skill.unit"
      )
</template>

<style lang="scss">
   .skills__wrapper {
      @apply container max-w-screen-2xl mx-auto text-center mt-32;

      &__title {
         @apply text-center 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-3xl;
         @apply font-bold mt-40 w-full text-center;
      }

      &__content {
         @apply w-full h-screen relative flex items-center justify-center bg-circularLight rounded-full;
      }
   }
</style>
