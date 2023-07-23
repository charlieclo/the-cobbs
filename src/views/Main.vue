<script setup>
import { onMounted, ref } from 'vue'
import { isMobile } from 'mobile-device-detect'
import { useWheel, useDrag } from '@vueuse/gesture'
import { animate } from '@/util/animation'

const emit = defineEmits(['scroll-to-top'])

const mainContent = ref(null)
const firstWheel = ref(0)

useWheel(({ movement: [x, y], direction: [xDirection, yDirection], wheeling }) => {
  if (wheeling && y <= 0 && yDirection === -1 && $('.main-content').scrollTop() === 0) {
    if (firstWheel.value === 0) {
      firstWheel.value = y
    } else if (firstWheel.value === y) {
      emit('scroll-to-top')
    }
  }
}, {
  domTarget: mainContent,
  enabled: !isMobile
})

useDrag(({ movement: [x, y], direction: [xDirection, yDirection], dragging }) => {
  if (!dragging && y > 150 && yDirection > 0 && $('.main-content').scrollTop() === 0) {
    emit('scroll-to-top')
  }
}, {
  domTarget: mainContent,
  enabled: isMobile
})

onMounted(() => {
  animate('.main', { opacity: 1 }, 1000)
})
</script>

<template>
  <main class="main">
    <slot name="promo" />
    <slot name="header" />
    <slot name="hero" />
    <div ref="mainContent" class="main-content">
      <slot name="content" />
    </div>
    <slot name="rsvp" />
  </main>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100vh; /* 100% */
  overflow: hidden;
  position: relative;
  opacity: 0;
}

.main-content {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
}

.main-content::-webkit-scrollbar {
  display: none;
}
</style>
