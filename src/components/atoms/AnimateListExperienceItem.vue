<script setup lang="ts">
   import type { ExperienceDetail } from '@/types/experienceDetail'
   import { MotionDirective as motion } from '@vueuse/motion'
   const vMotion = motion()
   import CONFIG from '../../../global-config'
   const { delay, enter } = CONFIG.motionHook
   const props = withDefaults(defineProps<ExperienceDetail>(), {
      company: '',
      position: '',
      time: '',
      work: '',
   })
</script>

<template lang="pug">
li.experience__detail__item
   div(
      v-motion
      :initial="{ opacity: 0, y: 100}"
      :visible="{...enter, opacity: 1}"
      :delay="delay"
   )
      h3.position__company.text-2xl
         | {{ position }}&nbsp;
         span.company @{{ company }}
      span.time
         | {{ time }}
      p.work
         | {{ work }}
</template>

<style lang="scss" scoped>
   .experience__detail__item {
      @apply my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between;

      .position__company {
         @apply capitalize font-bold text-dark sm:text-xl md:text-2xl #{!important};

         .company {
            @apply text-primary capitalize;
         }
      }

      .time {
         @apply capitalize font-medium text-dark/75;
      }

      .work {
         @apply font-medium w-full;
      }
   }
</style>
