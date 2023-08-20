<script setup lang='ts'>

</script>

<template lang="pug">
footer.footer__wrapper
    .footer__wrapper__layout
        span.footer__wrapper__layout
            | {{ new Date().getFullYear()}} &copy; All Right Reserved.
        div.my__name__wrapper
            span
                | Build with 
                span.custom_txt
                    | &#9825;
                span.my__name By Nguyen Cong Thai Son
    

</template>


<style lang="scss" scoped>
.footer__wrapper {
    @apply w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base;

    &__layout {
        @apply py-8 lg:py-4 flex flex-col items-center justify-between px-10 text-lg text-dark;

        .custom_txt {
            @apply text-primary text-2xl px-1;
        }

        .my__name {
            @apply underline underline-offset-2 pl-1;
            &:hover {
              @apply cursor-pointer;  
            }
        }
      
    }

}
</style>