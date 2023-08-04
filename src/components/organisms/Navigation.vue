<script setup lang="ts">

</script>

<template lang="pug">
nav.nav-wrapper
    .nav-wrapper-container
        .nav-wrapper-background
            router-link(to="/" v-scroll-to="'#home'").nav-link-icon
                font-awesome-icon(:icon="['fa', 'house']")
            router-link(to="/about" v-scroll-to="'#about'").nav-link-icon
                font-awesome-icon(:icon="['fa', 'user']")
            router-link(to="/projects" v-scroll-to="'#projects'").nav-link-icon
                font-awesome-icon(:icon="['fa', 'list-check']")
            router-link(to="/work" v-scroll-to="'#work'").nav-link-icon
                font-awesome-icon(:icon="['fa', 'briefcase']")
            router-link(to="/contact" v-scroll-to="'#contact'").nav-link-icon
                font-awesome-icon(:icon="['fa', 'comments']")
</template>

<style lang="scss">
  .nav-wrapper {
    $self: &;
    @apply fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50;

    &-container {
      @apply container mx-auto;
    }

    &-background {
      @apply bg-black/20 backdrop-blur-2xl;
      @apply h-24 max-w-[460px] mx-auto;
      @apply rounded-full px-5 text-2xl text-white/50;
      @apply flex items-center justify-between;

      .nav-link-icon {
        @apply w-[60px] h-[60px];
        @apply flex items-center justify-center cursor-pointer;
      }
    }
  }
</style>
