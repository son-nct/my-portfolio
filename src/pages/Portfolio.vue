<script setup lang="ts">
import { useTitle } from '@vueuse/core'

const title = useTitle()
title.value = 'Home Page'
onMounted(() => {
const { scrollToElement} = useScrollToElement()
scrollToElement()
})
</script>

<template lang="pug">

</template>


<style lang="scss">


</style>