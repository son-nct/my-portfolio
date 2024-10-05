<template>
  <footer
    class="w-full text-lg font-medium border-t-2 border-solid border-dark"
  >
    <Layout class="flex items-center justify-between py-8">
      <span
        >{{ new Date().getFullYear() }} &copy;
        {{ t('footer.all-right-reserved') }}</span
      >
      <div class="flex items-center">
        {{ t('footer.build-with') }}
        <span class="px-1 text-2xl text-primary">&#9825;</span> by&nbsp;
        <NuxtLink class="underline underline-offset-2" href="/">{{
          t('footer.name')
        }}</NuxtLink>
      </div>
      <NuxtLink href="/">{{ t('footer.say-hello') }}</NuxtLink>
    </Layout>
  </footer>
</template>

<script lang="ts" setup>
  import { useI18n } from '#imports'
  import Layout from './Layout.vue'
  const { t } = useI18n()
</script>
