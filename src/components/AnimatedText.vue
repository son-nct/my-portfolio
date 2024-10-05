<template>
  <div class="flex items-center justify-center w-full py-2 mx-auto text-center">
    <h1
      class="inline-block w-full font-bold capitalize text-dark text-8xl"
      :class="$attrs.class"
    >
      <span
        v-motion="{
          initial: {
            opacity: 1
          },
          enter: {
            opacity: 1,
            transition: {
              delay: 500 * index
            }
          }
        }"
        v-for="(word, index) in text.split(' ')"
        :key="word + '-' + index"
      >
        <span
          v-motion="{
            initial: {
              opacity: 0,
              y: 50
            },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 100 * index,
                type: 'spring',
                stiffness: 250,
                damping: 30,
                mass: 1
              }
            }
          }"
          class="inline-block"
          >{{ word }}&nbsp;</span
        >
      </span>
    </h1>
  </div>
</template>

<script lang="ts" setup>
  interface Props {
    text: string
  }

  defineProps<Props>()
</script>

<style></style>
