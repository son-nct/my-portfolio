<script setup lang='ts'>
import  GLOBAL_CONFIG from '../../../global-config'
const { initial, enter, delay } = GLOBAL_CONFIG.motionHook
import { MotionDirective as motion } from '@vueuse/motion';
const vMotion = motion()

const props = defineProps<{
    text: string
}>()
</script>

<template lang='pug'>
p.animate__paragraph(
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="delay"
) {{ text }}
</template>

<style lang="scss" scoped>
.animate__paragraph {
    @apply md:text-base  xl:text-lg my-4 font-medium  sm:text-xs;
}

</style>