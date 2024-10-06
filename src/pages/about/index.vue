<script lang="ts" setup>
  import AnimatedText from '~/components/AnimatedText.vue'
  import AnimatedNumber from '~/components/AnimatedNumber.vue'
  import Layout from '~/components/Layout.vue'
  import Skills from '~/components/Skills.vue'
  import Experience from '~/components/Experience.vue'
  import { useHead, useI18n } from '#imports'
  const { t } = useI18n()

  useHead({
    title: t('about.seo.title')
  })
</script>

<template>
  <main>
    <Layout class="pt-16">
      <AnimatedText class="mb-16" :text="t('about.title')" />
      <div class="grid w-full grid-cols-8 gap-16">
        <div
          v-motion="{
            initial: {
              opacity: 0,
              x: -50
            },
            visibleOnce: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 200,
                type: 'spring',
                stiffness: 250,
                damping: 50,
                mass: 1
              }
            }
          }"
          class="flex flex-col items-start justify-start col-span-3"
        >
          <h2 class="mb-4 text-lg font-bold uppercase text-dark/75">
            {{ t('about.biography') }}
          </h2>
          <p class="font-medium">{{ t('about.description1') }}</p>
          <p class="my-4 font-medium">{{ t('about.description2') }}</p>
          <p class="font-medium">{{ t('about.description3') }}</p>
        </div>
        <div
          class="relative col-span-3 p-8 border-2 border-solid border-dark h-max rounded-2xl bg-light shadow-custom"
        >
          <NuxtImg
            sizes="sm:200px md:500px 2xl:550px"
            densities="1x 2x"
            src="/images/avt_about.jpg"
            format="webp"
            alt="ThaiSon"
            class="w-full h-auto"
            preload
          />
        </div>
        <div
          v-motion="{
            initial: {
              opacity: 0,
              x: 50
            },
            visibleOnce: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 200,
                type: 'spring',
                stiffness: 250,
                damping: 50,
                mass: 1
              }
            }
          }"
          class="flex flex-col items-end justify-between col-span-2"
        >
          <div class="flex flex-col items-end justify-center">
            <span class="inline-block font-bold text-7xl">
              <AnimatedNumber :value="3" />
            </span>
            <h2 class="text-xl font-medium capitalize text-dark/75">
              {{ t('about.yoe') }}
            </h2>
          </div>

          <div class="flex flex-col items-end justify-center">
            <span class="inline-block font-bold text-7xl">
              <AnimatedNumber :value="3" />
            </span>
            <h2 class="text-xl font-medium capitalize text-dark/75">
              {{ t('about.project-completed') }}
            </h2>
          </div>

          <div class="flex flex-col items-end justify-center">
            <span class="inline-block font-bold text-7xl">
              <AnimatedNumber :value="3" />
            </span>
            <h2 class="text-xl font-medium capitalize text-dark/75">
              {{ t('about.blog-written') }}
            </h2>
          </div>
        </div>
      </div>

      <Skills />
      <Experience />
    </Layout>
  </main>
</template>
