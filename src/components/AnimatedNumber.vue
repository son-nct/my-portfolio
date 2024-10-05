<template>
  <div>{{ tweened.number.toFixed(0) }}+</div>
</template>

<script lang="ts" setup>
  import { useGsap } from '#gsap'
  import { reactive, ref } from '#imports'

  const props = defineProps<{
    value: number
  }>()

  const tweened = reactive({
    number: 0
  })

  setTimeout(() => {
    useGsap.to(tweened, { duration: 0.5, number: Number(props.value) || 0 })
  }, 100)
</script>
