<template>
  <div class="w-full min-h-screen bg-light">
    <NavBar />
    <slot id="viewport" />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
  import NavBar from '~/components/NavBar.vue'
  import Footer from '~/components/Footer.vue'
  import { onMounted } from 'vue'
  import { useSmoothScroll } from '~/composables/useSmoothScroll'

  onMounted(() => {
    useSmoothScroll()
  })
</script>

<style></style>
