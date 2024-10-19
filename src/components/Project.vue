<script lang="ts" setup>
  import { useI18n } from '#imports'

  interface Props {
    type: string
    title: string
    img: string
    link: string
    github: string
  }

  defineProps<Props>()
  const { t } = useI18n()
</script>

<template>
  <article
    class="relative flex flex-col items-center justify-center w-full p-6 border border-solid shadow-custom rounded-2xl border-dark bg-light"
  >
    <NuxtLink
      target="_blank"
      class="w-full overflow-hidden rounded-lg cursor-pointer"
    >
      <NuxtImg
        v-motion="{
          initial: {
            scale: 1
          },
          enter: {
            scale: 1
          },
          hovered: {
            scale: 1.05,
            transition: {
              duration: 300,
              type: 'spring',
              stiffness: 250,
              damping: 50,
              mass: 1
            }
          }
        }"
        :src="img"
        :alt="title"
        class="w-full h-auto"
        format="webp"
      />
    </NuxtLink>
    <div class="flex flex-col items-start justify-between w-full mt-4">
      <span class="text-xl font-medium text-primary">{{ type }}</span>
      <NuxtLink
        :to="link"
        target="_blank"
        class="hover:underline underline-offset-2"
      >
        <h2 class="w-full my-2 text-3xl font-bold text-left">{{ title }}</h2>
      </NuxtLink>
      <div class="flex items-center justify-between w-full mt-2">
        <NuxtLink
          :to="link"
          target="_blank"
          class="text-lg font-semibold underline text-dark"
        >
          {{ t('projects.visit') }}
        </NuxtLink>
        <NuxtLink :to="github" target="_blank" class="w-10">
          <NuxtImg
            width="40"
            height="40"
            src="/images/github.svg"
            alt="github"
          />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<style></style>
