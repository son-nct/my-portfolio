<template lang="pug">
main.main__section
  AppNavbar
  router-view
  AppFooter
</template>

<style lang="scss" scoped>
.main__section {
  @apply bg-light w-full min-h-screen;
}
</style>