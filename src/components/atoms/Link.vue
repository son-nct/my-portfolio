<script setup lang='ts'>
const props = defineProps<{
    to: string,
    title: string
}>()
</script>

<template lang='pug'>
router-link(:to="to").link {{ title }}
    span.link__style
        | &nbsp;
</template>



<style lang="scss" scoped>

.link {
    @apply mr-4 relative;

    &__style {
        @apply h-[1px] inline-block w-0 bg-dark absolute -bottom-0.5 left-0;
    }

    &:hover {
        .link__style {
            @apply w-full ease-out duration-300;
        }
    }

    
}

</style>