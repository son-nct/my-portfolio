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
h1.animate__heading(
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="delay"
) {{ text }}
</template>

<style lang="scss" scoped>
.animate__heading {
    @apply inline-block text-6xl text-dark font-bold capitalize;
    @apply text-left text-6xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-3xl;
}

</style>