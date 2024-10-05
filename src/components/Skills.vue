<template>
  <h2
    v-motion="{
      initial: {
        opacity: 0,
        y: 50
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 250,
          damping: 50,
          mass: 1
        }
      }
    }"
    class="w-full mt-64 font-bold text-center text-8xl"
  >
    Skills
  </h2>
  <div
    class="relative flex items-center justify-center w-full h-screen rounded-full bg-circularLight"
  >
    <Skill :name="t('about.skill.web')" :x="0" :y="0" />
    <Skill :name="t('about.skill.html')" :x="0" :y="-10" />
    <Skill :name="t('about.skill.css')" :x="15" :y="6" />
    <Skill :name="t('about.skill.js')" :x="-14" :y="6" />
    <Skill :name="t('about.skill.vue')" :x="-20" :y="-15" />
    <Skill :name="t('about.skill.nuxt')" :x="20" :y="-15" />
    <Skill :name="t('about.skill.docker')" :x="25" :y="-25" />
    <Skill :name="t('about.skill.github-action')" :x="0" :y="-30" />
    <Skill :name="t('about.skill.aws')" :x="-32" :y="-5" />
    <Skill :name="t('about.skill.strapi')" :x="30" :y="-5" />
    <Skill :name="t('about.skill.graphql')" :x="0" :y="20" />
    <Skill :name="t('about.skill.jest')" :x="-25" :y="20" />
    <Skill :name="t('about.skill.vitest')" :x="25" :y="20" />
    <Skill :name="t('about.skill.ci-cd')" :x="-25" :y="-25" />
  </div>
</template>

<script lang="ts" setup>
  import { useI18n } from '#imports'
  import Skill from './Skill.vue'
  const { t } = useI18n()
</script>
