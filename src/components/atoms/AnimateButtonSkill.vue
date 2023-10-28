<script setup lang="ts">
   import { MotionDirective as motion } from '@vueuse/motion'
   import CONFIG from '../../../global-config'
   const { delay, enter } = CONFIG.motionHook
   const vMotion = motion()
   import type { Skill } from '@/types/skill'

   const props = withDefaults(defineProps<Skill>(), {
      text: '',
      positionX: 0,
      positionY: 0,
      unit: 'vw',
   })

   // 1vw = 14.4
   const convertToPx = 14.4

   const finalPositionX = computed(() => {
      return props.positionX * convertToPx
   })

   const finalPositionY = computed(() => {
      return props.positionY * convertToPx
   })
</script>

<template lang="pug">
.skills__wrapper__content__skill(
    v-motion
    :initial="{scale: 1, y: 0 }"
    :enter="{ scale: 1 }"
    :visible="{...enter, x: finalPositionX, y: finalPositionY }"
    :delay="delay"
    :leave="{opacity: 0, scale: 0, y: 0}"
)
   | {{ text }}
</template>

<style lang="scss">
   .skills__wrapper__content__skill {
      @apply absolute flex items-center justify-center rounded-full bg-dark py-2 px-6 text-light font-semibold shadow-dark cursor-pointer;
   }
</style>
