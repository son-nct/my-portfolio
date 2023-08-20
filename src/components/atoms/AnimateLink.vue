<script setup lang='ts'>
defineProps<{
    href: string
}>()

</script>

<template lang='pug'>
a(
    :href="href"
    target="_blank"
    v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :hovered="{ scale: 1.2 }"
            :tapped="{scale: 0.9}"
            :delay="200"
)
    slot
</template>
        
        
        