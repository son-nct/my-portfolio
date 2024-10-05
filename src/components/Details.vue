<template>
  <li
    class="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
  >
    <LiIcon />
    <div>
      <h3 class="text-2xl font-bold capitalize">
        {{ position }}&nbsp;
        <span class="capitalize text-primary">@{{ company }}</span>
      </h3>
      <span class="font-medium capitalize text-dark/75">{{ time }}</span>
      <p class="w-full font-medium">{{ description }}</p>
    </div>
  </li>
</template>

<script lang="ts" setup>
  import LiIcon from './LiIcon.vue'

  interface Props {
    position: string
    company: string
    time: string
    description: string
  }

  defineProps<Props>()
</script>

<style></style>
