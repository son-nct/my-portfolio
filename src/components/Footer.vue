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
      <!-- <NuxtLink href="/">{{ t('footer.say-hello') }}</NuxtLink> -->
      <div ref="dropdownRef" class="relative">
        <button
          class="flex items-center gap-2 cursor-pointer w-fit"
          @click="toggleDropdown"
        >
          <NuxtImg
            width="24"
            height="24"
            :src="`/images/earth.svg`"
            :alt="currentLanguage"
          />
          {{ currentLanguage }}
          <!-- <span
            :class="{ 'rotate-180': isOpen }"
            class="transition-transform duration-300"
          >
            ▲
          </span> -->
        </button>
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <div
            v-if="isOpen"
            class="absolute right-0 z-50 w-24 mb-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bottom-full"
          >
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                v-for="lang in languages"
                :key="lang.value"
                class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                @click="changeLanguage(lang)"
              >
                {{ lang.label }}
              </a>
            </div>
          </div>
        </transition>
      </div>
    </Layout>
  </footer>
</template>

<script lang="ts" setup>
  import Layout from './Layout.vue'
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useI18n } from '#imports'

  const { t, locale, setLocale } = useI18n()

  const isOpen = ref(false)
  const dropdownRef = ref(null)
  const languages = [
    { label: 'VN', value: 'vi' },
    { label: 'EN', value: 'en' }
  ]
  const currentLanguage = ref(locale.value === 'vi' ? 'VN' : 'EN')

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
  }

  const changeLanguage = async (lang: { label: string; value: string }) => {
    currentLanguage.value = lang.label
    await setLocale(lang.value)
    isOpen.value = false
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.value &&
      !dropdownRef.value.contains(event.target as Node)
    ) {
      isOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
</script>
