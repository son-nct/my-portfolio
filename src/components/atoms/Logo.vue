<script lang='ts'>
import { MotionDirective as motion } from '@vueuse/motion'

export default {
  directives: {
    motion: motion(),
  },
}
</script>

<template lang='pug'>
div(
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :hovered="{ scale: 1.2 }"
    :delay="200"
).logo__wrapper
    router-link(to='/').logo__wrapper__link
        | Thái Sơn
</template>



<style lang='scss' scoped>
.logo__wrapper {
    @apply flex items-center justify-center mt-2;

    &__link {
        @apply w-44 h-16 bg-dark text-light font-bold flex items-center justify-center rounded-full text-2xl;
    }
}
</style>