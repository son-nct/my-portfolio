<script setup lang="ts">
   const internalInstance = getCurrentInstance()
   const $progress = internalInstance?.appContext.config.globalProperties.$Progress

   const route = useRoute()
   const router = useRouter()

   onBeforeMount(() => {
      $progress.start()

      router.beforeEach((to, _, next) => {
         if (to.meta.progress !== undefined) {
            let meta = to.meta.progress
            $progress.parseMeta(meta)
         }
         $progress.start()
         next()
      })

      router.afterEach(() => {
         $progress.finish()
      })
   })

   onMounted(() => {
      $progress.finish()
   })
</script>

<template lang="pug">
main.main__section
  AppNavbar
  router-view
  vue-progress-bar
  AppFooter
</template>

<style lang="scss" scoped>
   .main__section {
      @apply bg-light w-full min-h-screen;
   }
</style>
