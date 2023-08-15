<script setup lang='ts'>

</script>

<template lang="pug">
div
    header.header__wrapper
        nav
            Link(:to="'/'" :title="'Home'") 
            Link(:to="'/about'" :title="'About'") 
            Link(:to="'/projects'" :title="'Projects'")
            Link(:to="'/articles'" :title="'Article'") 
        div.header__wrapper__logo
            Logo
        //- nav
            //- Link(:to='/' target='_blank') T
            //- Link(:to='/' target='_blank') T
            //- Link(:to='/' target='_blank') T
            //- Link(:to='/' target='_blank') T
</template>


<style lang="scss" scoped>
.header__wrapper {
    @apply px-32 py-8 font-medium w-full flex items-center justify-between;

    &__logo {
        @apply absolute left-1/2 top-2 translate-x-[-50%]
    }
}
</style>