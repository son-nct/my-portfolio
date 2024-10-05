<template>
  <main class="flex items-center w-full min-h-screen text-dark">
    <Layout class="pt-0">
      <div class="flex items-center justify-between w-full">
        <div class="w-1/2">
          <NuxtImg
            sizes="sm:200px md:500px 2xl:550px"
            densities="1x 2x"
            src="/images/avt_portfolio.png"
            format="webp"
            alt="ThaiSon"
            class="md:w-[500px] 2xl:w-[550px] aspect-auto"
            preload
          />
        </div>
        <div class="flex flex-col items-center self-center w-1/2">
          <AnimatedText class="!text-6xl !text-left" :text="t('home.title')" />
          <p
            v-motion="{
              initial: {
                opacity: 0,
                x: -50
              },
              enter: {
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
            class="my-4 text-base font-medium"
          >
            {{ t('home.description') }}
          </p>
          <div
            v-motion="{
              initial: {
                opacity: 0,
                y: 50
              },
              enter: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 500,
                  type: 'spring',
                  stiffness: 250,
                  damping: 50,
                  mass: 1
                }
              }
            }"
            class="flex items-center self-start"
          >
            <NuxtLink
              class="group flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent duration-300 hover:border-dark ease-out"
              href="/dummy.pdf"
            >
              {{ t('home.resume') }}
              <Icon
                name="material-symbols:download"
                class="ml-1 duration-300 ease-out text-light group-hover:text-dark hover:border-dark"
                size="24px"
              />
            </NuxtLink>
            <NuxtLink
              class="ml-4 text-lg font-medium underline capitalize text-dark"
              href="mailto:sonnct.work@gmail.com"
              >{{ t('home.contact') }}</NuxtLink
            >
          </div>
        </div>
      </div>
      <HireMe />
      <div class="absolute inline-block w-24 right-8 bottom-8">
        <NuxtImg
          src="/images/light_bulb.svg"
          alt="light bulb"
          class="w-full h-auto"
        />
      </div>
    </Layout>
  </main>
</template>

<script setup lang="ts">
  import Layout from '~/components/Layout.vue'
  import AnimatedText from '~/components/AnimatedText.vue'
  import HireMe from '~/components/HireMe.vue'
  import { useHead, useI18n } from '#imports'
  
  useHead({
    title: 'Thai Son | Front-end Developer'
  })

  const { t } = useI18n()
</script>
