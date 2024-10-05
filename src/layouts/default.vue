<template>
  <div class="w-full min-h-screen bg-light">
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
  import NavBar from '~/components/NavBar.vue'
  import Footer from '~/components/Footer.vue'
</script>

<style></style>
