<script setup lang="ts">
 const skills = ref([
      { text: 'Web' },
      { text: 'CSS', positionX: -5, positionY: -8, unit: 'vw' },
      { text: 'SCSS', positionX: -5, positionY: 8, unit: 'vw' },
      { text: 'HTML', positionX: -20, positionY: 2, unit: 'vw' },
      { text: 'Javascript', positionX: -25, positionY: -6, unit: 'vw' },
      { text: 'VueJS', positionX: 0, positionY: 13, unit: 'vw' },
      { text: 'NuxtJS', positionX: -15, positionY: 15, unit: 'vw' },
      { text: 'Java', positionX: 10, positionY: -12, unit: 'vw' },
      { text: 'NodeJS', positionX: 0, positionY: -18, unit: 'vw' },
      { text: 'Bootstrap', positionX: 32, positionY: -5, unit: 'vw' },
      { text: 'Tailwind CSS', positionX: 28, positionY: -20, unit: 'vw' },
      { text: 'Figma', positionX: 20, positionY: 18, unit: 'vw' },
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
         @apply font-bold text-8xl mt-60 w-full text-center;
      }

      &__content {
         @apply w-full h-screen relative flex items-center justify-center bg-circularLight rounded-full;
      }
   }
</style>
