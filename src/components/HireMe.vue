<template>
  <div
    class="fixed flex items-center justify-center overflow-hidden left-4 bottom-4"
  >
    <div class="relative flex items-center justify-center w-48 h-auto">
      <NuxtImg
        src="/images/circular_text.svg"
        alt="circular text"
        class="animate-spin-slow"
        loading="lazy"
      />

      <NuxtLink
        to="mailto:sonnct.work@gmail.com"
        class="absolute flex items-center justify-center w-20 h-20 font-semibold duration-300 ease-in-out -translate-x-1/2 -translate-y-1/2 border border-solid rounded-full shadow-md left-1/2 top-1/2 bg-dark text-light border-dashed-dark hover:bg-light hover:text-dark"
      >
        {{ t('footer.hire-me') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useI18n } from '#imports'
  const { t } = useI18n()
</script>
