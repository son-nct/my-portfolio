<script lang="ts" setup>
  import { useHead, useI18n } from '#imports'
  import AnimatedText from '~/components/AnimatedText.vue'
  import Layout from '~/components/Layout.vue'
  import FeaturedProject from '~/components/FeaturedProject.vue'
  import Project from '~/components/Project.vue'
  const { t } = useI18n()

  useHead({
    title: t('projects.seo.title')
  })
</script>

<template>
  <main class="flex flex-col items-center justify-center w-full mb-16">
    <Layout class="pt-16">
      <AnimatedText class="mb-16" :text="t('projects.title')" />

      <div class="grid grid-cols-12 gap-24">
        <div class="col-span-12">
          <FeaturedProject
            :summary="t('projects.featured-project-description')"
            :title="t('projects.featured-project-title')"
            link="/"
            github="/"
            :type="t('projects.featured-project')"
            img="/images/crypto-screener-cover-image.jpg"
          />
        </div>
        <div class="col-span-6">
          <Project
            type="Project"
            :title="t('projects.project-title')"
            img="/images/nft-collection-website-cover-image copy.jpg"
            link="/"
            github="/"
          />
        </div>
        <div class="col-span-6">
          <Project
            type="Project"
            :title="t('projects.project-title')"
            img="/images/fashion-studio-website.jpg"
            link="/"
            github="/"
          />
        </div>
      </div>
    </Layout>
  </main>
</template>

<style></style>
