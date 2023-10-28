<script setup lang="ts">
   import type { ExperienceDetail } from '@/types/experienceDetail'
   import { MotionDirective as motion } from '@vueuse/motion'
   const vMotion = motion()
   import CONFIG from '../../../../global-config'
   const { delay, enter } = CONFIG.motionHook
   const props = defineProps<{
      listDetail: ExperienceDetail[]
   }>()

   const scrollElement = ref<HTMLElement | null>(null)

   const state = reactive({
      visibleHeight: 0,
      windowHeight: window.innerHeight, // Initially set to the current viewport height
   })

   const updateWindowSize = () => {
      state.windowHeight = window.innerHeight
   }

   const updateLineHeight = () => {
      if (!scrollElement.value) return
      const rect = scrollElement.value.getBoundingClientRect()

      const viewHeight = state.windowHeight

      //calculate the visible portion of the element
      const topVisible = rect.top >= 0 && rect.top < viewHeight
      const bottomVisible = rect.bottom > 0 && rect.bottom < viewHeight

      if (topVisible && bottomVisible) {
         state.visibleHeight = rect.height
      } else if (topVisible) {
         state.visibleHeight = viewHeight - rect.top
      } else if (bottomVisible) {
         state.visibleHeight = viewHeight
      } else if (rect.top < 0 && rect.bottom > viewHeight) {
         state.visibleHeight = viewHeight
      }
   }

   onMounted(() => {
      window.addEventListener('resize', updateWindowSize)
      window.addEventListener('scroll', updateLineHeight)
   })

   onUnmounted(() => {
      window.removeEventListener('resize', updateWindowSize)
      window.removeEventListener('scroll', updateLineHeight)
   })
</script>

<template lang="pug">
.experience__wrapper
    AnimateHeadingText(:text="'Experience'").w-full.text-center
    .experience__list__wrapper
        div.experience__line__wrapper(
         v-motion
         :initial="{ opacity: 0}"
         :visible="{...enter, opacity: 1}"
         :style="{height: state.visibleHeight + 'px'}"
        )
        ul(ref='scrollElement').experience__list
            AnimateListExperienceItem(
                v-for='detail in listDetail'
                :position="detail.position"
                :company="detail.company"
                :work="detail.work"
                :time="detail.time"
                :key='detail'
            )

</template>

<style lang="scss">
   .experience__wrapper {
      @apply container max-w-screen-2xl mx-auto mt-32;
   }

   .experience__line__wrapper {
      @apply max-h-full absolute left-8 top-0 w-[4px] bg-dark origin-top duration-300 ease-linear;
   }

   .experience__list__wrapper {
      @apply w-[75%] relative mx-auto my-24;

      .experience__list {
         @apply w-full flex flex-col items-center justify-between ml-4;
      }
   }
</style>
