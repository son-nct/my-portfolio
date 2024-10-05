<template>
  <header
    class="flex items-center justify-between w-full px-32 py-8 font-medium"
  >
    <nav>
      <CustomLink class="mr-4" href="/" :title="t('navbar.home')" />
      <CustomLink class="mx-4" href="/about" title="About" />
      <CustomLink class="mx-4" href="/projects" title="Projects" />
      <CustomLink class="ml-4" href="/articles" title="Articles" />
    </nav>
    <nav class="flex flex-wrap items-center justify-center gap-3">
      <NuxtLink
        v-motion="{
          enter: {
            y: 0
          },
          hovered: {
            y: -2
          }
        }"
        target="_blank"
        href="https://github.com/son-nct"
      >
        <NuxtImg width="24" height="24" src="/images/github.svg" alt="github" />
      </NuxtLink>

      <NuxtLink
        v-motion="{
          enter: {
            y: 0
          },
          hovered: {
            y: -2
          }
        }"
        target=" _blank"
        href="https://www.linkedin.com/in/nguy%E1%BB%85n-c%C3%B4ng-th%C3%A1i-s%C6%A1n-7241b0299/"
      >
        <NuxtImg
          width="24"
          height="24"
          src="/images/linkedin.svg"
          alt="linkedin"
        />
      </NuxtLink>
    </nav>

    <div class="absolute -translate-x-1/2 left-1/2 top-2">
      <Logo />
    </div>
  </header>
</template>

<script lang="ts" setup>
  import Logo from './Logo.vue'
  import CustomLink from './CustomLink.vue'
  import { useI18n } from '#imports'

  const { t } = useI18n()
</script>
