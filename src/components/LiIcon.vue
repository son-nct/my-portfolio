<template>
  <div>
    <figure
      v-for="(item, index) in 4"
      :key="index"
      class="circle absolute -left-[3px] -translate-y-[16px] stroke-dark"
    >
      <svg class="-rotate-90" width="75" height="75" viewBox="0 0 75 75">
        <circle
          class="stroke-primary fill-none"
          cx="37.5"
          cy="37.5"
          r="20"
        ></circle>
        <circle
          class="fill-light stroke-[5px]"
          pathLength="100"
          stroke-dasharray="100"
          stroke-dashoffset="100"
          cx="37.5"
          cy="37.5"
          r="20"
        ></circle>
        <circle
          class="stroke-1 animate-pulse ani fill-primary"
          cx="37.5"
          cy="37.5"
          r="10"
        ></circle>
      </svg>
    </figure>
  </div>
</template>

<style></style>
