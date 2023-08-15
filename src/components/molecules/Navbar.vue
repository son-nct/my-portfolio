<script setup lang='ts'>

</script>

<template lang="pug">
header.header__wrapper
    nav
        router-link(to='/') Home
        router-link(to='/about') About
        router-link(to='/projects') Projects
        router-link(to='/articles') Article
    Logo
    nav
        router-link(to='/' target='_blank') T
        router-link(to='/' target='_blank') T
        router-link(to='/' target='_blank') T
        router-link(to='/' target='_blank') T
</template>


<style lang="scss" scoped>
.header__wrapper {
    @apply px-32 py-8 font-medium w-full flex items-center justify-between;
}
</style>