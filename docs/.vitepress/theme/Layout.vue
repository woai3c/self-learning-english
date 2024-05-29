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

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import BackToTop from './BackToTop.vue'

const { Layout } = DefaultTheme

// 检查是否在浏览器环境中
const isInWindow = typeof window !== 'undefined'
const isMobile = ref(false)

// 响应 media query 变更的回调函数
const checkMediaQuery = (e) => {
  isMobile.value = e.matches
}

let mediaQuery
onMounted(() => {
  if (isInWindow) {
    // 初始化媒体查询对象
    mediaQuery = window.matchMedia('(max-width: 1279px)')
    isMobile.value = mediaQuery.matches
    mediaQuery.addEventListener('change', checkMediaQuery)
  }
})

onUnmounted(() => {
  if (isInWindow) {
    // 删除媒体查询变化的事件监听器
    mediaQuery.removeEventListener('change', checkMediaQuery)
  }
})
</script>
