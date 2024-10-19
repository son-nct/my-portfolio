<script lang="ts" setup>
  import { useI18n } from '#imports'
  interface Props {
    type: string
    title: string
    summary: string
    img: string
    link: string
    github: string
  }

  defineProps<Props>()
  const { t } = useI18n()
</script>

<template>
  <article
    class="flex items-center justify-between w-full p-12 border border-solid shadow-custom border-dark bg-light rounded-3xl"
  >
    <NuxtLink
      target="_blank"
      class="w-1/2 overflow-hidden rounded-lg cursor-pointer"
    >
      <NuxtImg :src="img" :alt="title" class="w-full h-auto" format="webp" />
    </NuxtLink>
    <div class="flex flex-col items-start justify-between w-1/2 pl-6">
      <span class="text-xl font-medium text-primary">{{ type }}</span>
      <NuxtLink
        :to="link"
        target="_blank"
        class="hover:underline underline-offset-2"
      >
        <h2 class="w-full my-2 text-4xl font-bold text-left">{{ title }}</h2>
      </NuxtLink>
      <p class="my-2 font-medium text-dark">{{ summary }}</p>
      <div class="flex items-center mt-2">
        <NuxtLink :to="github" target="_blank" class="w-10">
          <NuxtImg
            width="40"
            height="40"
            src="/images/github.svg"
            alt="github"
          />
        </NuxtLink>
        <NuxtLink
          :to="link"
          target="_blank"
          class="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light"
        >
          {{ t('projects.visit-project') }}
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<style></style>
