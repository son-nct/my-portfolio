<script setup  lang='ts'>
import { useHead } from '@vueuse/head'

const siteData = reactive({
      title: `Home`,
      description: `Explore my personal portfolio, intricately crafted with Vue.js, showcasing my passion for innovative design and cutting-edge web development.`,
})

useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
    ],
     
})
</script>

<template lang="pug">
main.wrapper
  Suspense
    template(#fallback)
      Spinner
    HomeLayout 

</template>


<style lang="scss" scoped>
.wrapper {
    @apply flex items-center text-dark w-full min-h-screen;
}
</style>