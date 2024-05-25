<template>
  <div class="back-to-top" @click="scrollToTop" v-show="visible">
    ↑
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      this.visible = window.scrollY > 100;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
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