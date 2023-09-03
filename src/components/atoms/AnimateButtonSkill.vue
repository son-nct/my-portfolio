<script setup lang="ts">
   import { MotionDirective as motion } from '@vueuse/motion'
   import CONFIG from '../../../global-config'

   const { initial, delay, enter } = CONFIG.motionHook
   const vMotion = motion()
   export interface Props {
      text: string
      positionX?: number
      positionY?: number
      unit?: string
   }

   const props = withDefaults(defineProps<Props>(), {
      text: '',
      positionX: 0,
      positionY: 0,
      unit: 'px',
   })

   // 1vw = 14.4
   const convertToPx = 14.4
</script>

<template lang="pug">
.skills__wrapper__content__skill(
    v-motion
    :initial="{ opacity: 0}"
    :visible="{...enter, opacity: 1, x: `${unit === 'vw' ? positionX * convertToPx : positionX}`, y: `${unit === 'vw' ? positionY * convertToPx : positionY}`}"
    :hovered="{ scale: 1.05}"
)
    | {{ text }}
</template>

<style lang="scss">
   .skills__wrapper__content__skill {
      @apply absolute flex items-center justify-center rounded-full bg-dark py-3 px-6 text-light font-semibold shadow-dark cursor-pointer;
   }
</style>
