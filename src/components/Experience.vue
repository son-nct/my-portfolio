<template>
  <div class="w-full my-64 min-h-fit">
    <h2
      v-motion="{
        initial: {
          opacity: 0,
          y: 50
        },
        visibleOnce: {
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
      class="w-full mb-32 font-bold text-center text-8xl"
    >
      {{ t('about.experience.title') }}
    </h2>
    <div
      v-motion="{
        initial: {
          opacity: 0
        },
        enter: {
          opacity: 1,
          transition: {
            delay: 200,
            type: 'spring',
            stiffness: 250,
            damping: 50,
            mass: 1
          }
        }
      }"
      class="w-[75%] mx-auto relative"
    >
      <div
        id="line"
        class="absolute top-0 w-[4px] h-0 origin-top bg-dark max-h-full left-8 transition-[height] duration-300 ease-linear"
      />
      <ul class="flex flex-col items-start justify-between w-full ml-4">
        <Details
          v-for="detail in details"
          :key="detail.time"
          class="detail"
          :company="detail.company"
          :position="detail.position"
          :time="detail.time"
          :description="detail.description"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, useI18n, useNuxtApp } from '#imports'
  import Details from '~/components/Details.vue'
  import { useGsap } from '#gsap'
  const { $ScrollTrigger } = useNuxtApp()

  onMounted(() => {
    useGsap.registerPlugin($ScrollTrigger as object)

    const experiences = document.querySelectorAll<HTMLElement>('.circle')
    const ulElement = document.querySelector<HTMLElement>('ul')
    const line = document.querySelector<HTMLElement>('#line')

    if (!ulElement || !line) return

    useGsap.to(line, {
      scrollTrigger: {
        trigger: ulElement,
        start: 'top center',
        end: 'bottom center',
        scrub: 0.5,
        invalidateOnRefresh: true
      },
      height: '100%',
      ease: 'none'
    })

    experiences.forEach((experience) => {
      const circle = experience.querySelector<SVGCircleElement>(
        'circle:nth-child(2)'
      )
      if (!circle) return

      const radius = circle.r.baseVal.value
      const circumference = 2 * Math.PI * radius

      // Set initial state
      useGsap.set(circle, {
        strokeDasharray: circumference,
        strokeDashoffset: circumference
      })

      useGsap.to(circle, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: experience,
          start: 'top center',
          end: 'center center',
          scrub: 5,
          invalidateOnRefresh: true
        },
        ease: 'power2.inOut'
      })
    })
  })

  type Details = {
    position: string
    company: string
    time: string
    description: string
  }

  const { t } = useI18n()

  const details: Details[] = [
    {
      position: t('about.experience.front-end'),
      company: 'BurningBros',
      description: t('about.experience.burningbros-description'),
      time: '03/2024 - Present'
    },
    {
      position: t('about.experience.front-end'),
      company: 'DayOne',
      description: t('about.experience.dayone-description'),
      time: '03/2023 - 03/2024'
    },
    {
      position: t('about.experience.full-stack'),
      company: 'FPT Software',
      description: t('about.experience.fpt-description2'),
      time: '01/2021 - 03/2021'
    },
    {
      position: t('about.experience.back-end'),
      company: 'FPT Software',
      description: t('about.experience.fpt-description1'),
      time: '10/2020 - 01/2021'
    }
  ]
</script>

<style></style>
