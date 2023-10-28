<script setup lang="ts">

const skills = ref(
   [
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
      { text: 'Figma', positionX: 0, positionY: -14 }
   ]
)

const listExperience = [
   {
      position: 'FrontEnd Develop',
      company: 'DayOne',
      time: '05/2023 - Present',
      work: `Worked on a team responsible for elevating user interfaces with Nuxt.js, strategically leveraging SSR to enhance SEO optimization,
         and innovating through the development of a headless CMS for dynamic content management.`,
   },
   {
      position: 'Fullstack Developer',
      company: 'FPT Software',
      time: '01/2021 - 03/2021',
      work: `Worked on a team responsible for enhancing user interfaces with Vue.js,
         pioneered RESTful APIs via Java Spring Boot,
         optimized database systems, and actively engaged in Agile methodologies to streamline project accomplishments.`,
   },
   {
      position: 'Backend Developer',
      company: 'FPT Software',
      time: '10/2020 - 01/2021',
      work: `Worked on a team responsible for enhancing web projects using PHP, focusing on dynamic user experiences. I crafted and executed SQL queries for deep data analysis.
         Within an agile team, I contributed to key milestones through collaborative meetings and strategic input.`,
   },
]
</script>

<template lang="pug">
main.wrapper
   AboutBiography
   AboutSkills(:skills='skills')
   AboutExperience(:listDetail='listExperience')
</template>

<style lang="scss" scoped>
.wrapper {
   @apply flex flex-col w-full items-center justify-center;

   .font--bold {
      @apply font-bold;
   }
}
</style>
