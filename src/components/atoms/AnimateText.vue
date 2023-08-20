<template lang='pug'>
div(
    v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
)
    slot
</template>
    
    
    