<script setup lang="ts">
    // declare component in setup, we have to assign it into a variable and use it as the component in template
   import Vue3autocounter from 'vue3-autocounter'
   const autocounter = Vue3autocounter

   export interface Props {
      startAmount: number
      endAmount: number
      prefix?: string
      suffix?: string
      duration?: number
   }

   const props = withDefaults(defineProps<Props>(), {
      startAmount: 0,
      endAmount: 0,
      duration: 1,
      prefix: '',
      suffix: '',
   })
</script>

<template lang="pug">
autocounter(ref='counter' :startAmount='startAmount' :endAmount='endAmount' :duration='duration' :prefix="prefix"  :suffix='suffix' :autoinit='true')
</template>
