<template>
  <div class="back-to-top" @click="scrollToTop" v-show="visible">↑</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 定义一个响应式变量来控制 BackToTop 按钮的可见性
const visible = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  visible.value = window.scrollY > 100
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    // 确保只在客户端执行
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    // 确保只在客户端执行
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
.back-to-top {
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  background-color: #4285f4;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0.7;
  z-index: 100000;
}

.back-to-top:hover {
  opacity: 1;
}

@media (max-width: 1279px) {
  .back-to-top {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }
}
</style>
