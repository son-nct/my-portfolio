<template>
  <NuxtLink :class="className" class="relative group" :href="href">
    {{ title }}
    <span
      :class="{ '!w-full': localePath(route.path) === localePath(href) }"
      class="absolute left-0 w-0 inline-block h-px -bottom-0.5 bg-dark group-hover:w-full transition-[width] ease-in-out duration-300"
      >&nbsp;</span
    >
  </NuxtLink>
</template>

<script lang="ts" setup>
  import { useLocalePath } from '#imports'
  import { useRoute } from 'vue-router'

  const localePath = useLocalePath()
  const route = useRoute()

  interface Props {
    href: string
    title: string
    className?: string
  }

  defineProps<Props>()
</script>

<style></style>
