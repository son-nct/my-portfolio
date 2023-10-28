<script setup lang="ts">
 const skills = ref([
      { text: 'Web' },
      { text: 'CSS', positionX: -13, positionY: 0 },
      { text: 'SCSS', positionX: 13, positionY: 0 },
      { text: 'HTML', positionX: 0, positionY: -7 },
      { text: 'Javascript', positionX: 0, positionY: 7 },
      { text: 'VueJS', positionX: 10, positionY: 13 },
      { text: 'NuxtJS', positionX: -10, positionY: 13 },
      { text: 'Java', positionX: 10, positionY: -17 },
      { text: 'NodeJS', positionX: -10, positionY: -17 },
      { text: 'Bootstrap', positionX: 18, positionY: -6 },
      { text: 'Tailwind CSS', positionX: -18, positionY: -6 },
      { text: 'Figma', positionX: 0, positionY: -14 },
]);
</script>

<template lang="pug">
.skills__wrapper
   h2.skills__wrapper__title Skills
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
      @apply container max-w-screen-2xl;

      &__title {
         @apply text-center 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-3xl;
         @apply font-bold mt-40 w-full text-center;
      }

      &__content {
         @apply w-full h-screen relative flex items-center justify-center bg-circularLight rounded-full;
      }
   }
</style>
