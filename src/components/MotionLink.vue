<template>
  <NuxtLink
    v-motion="{
      hovered: {
        backgroundColor: [
          '#121212',
          'rgba(131,58,180,1)',
          'rgba(253,29,29,1)',
          'rgba(252,176,69,1)',
          'rgba(131,58,180,1)',
          '#121212'
        ],
        transition: {}
      }
    }"
    class="flex items-center justify-center w-16 h-16 text-2xl font-bold rounded-full bg-dark text-light"
    href="/"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup></script>

<style></style>
