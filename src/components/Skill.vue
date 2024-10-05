<template>
  <div
    v-motion="{
      initial: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      },
      visibleOnce: {
        opacity: 1,
        x: xVw,
        y: yVw,
        scale: 1,
        transition: {
          duration: 1500,
          ease: 'easeInOut'
        }
      },
      hovered: {
        scale: 1.2,
        transition: {
          duration: 500
        }
      }
    }"
    class="absolute flex items-center justify-center px-6 py-3 font-semibold rounded-full cursor-pointer shadow-dark bg-dark text-light"
  >
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
  import { computed } from '#imports'
  import { useWindowSize } from '@vueuse/core'

  interface Props {
    name: string
    x: number
    y: number
  }

  const props = defineProps<Props>()
  const { width } = useWindowSize()

  const xVw = computed(() => (props.x / width.value) * (width.value * 9))
  const yVw = computed(() => (props.y / width.value) * (width.value * 9))
</script>
