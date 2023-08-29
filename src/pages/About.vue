<script setup  lang='ts'>
import { useHead } from '@vueuse/head'

const siteData = reactive({
      title: `Thai Son | About Page`,
      description: `Dive into my portfolio, meticulously built with Vue.js, highlighting my flair for distinctive design and advanced web development.`,
})

useHead({
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
        AboutLayout
</template>


<style lang="scss" scoped>
.wrapper {
    // @apply flex items-center text-dark w-full min-h-screen;
    @apply flex flex-col w-full items-center justify-center;
}
</style>