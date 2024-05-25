<template>
  <Layout>
    <template v-if="isMobile" #layout-bottom>
      <BackToTop />
    </template>
    <template v-else #aside-bottom>
      <BackToTop />
    </template>
  </Layout>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import DefaultTheme from 'vitepress/theme'
import BackToTop from './BackToTop.vue'

const { Layout } = DefaultTheme

const isMobile = ref(window.innerWidth <= 1279)
const mediaQuery = window.matchMedia('(max-width: 1279px)')

const checkMediaQuery = (e) => {
  isMobile.value = e.matches
}

onMounted(() => {
  mediaQuery.addEventListener('change', checkMediaQuery)
  checkMediaQuery(mediaQuery)
})

onUnmounted(() => {
  mediaQuery.removeEventListener('change', checkMediaQuery)
})
</script>