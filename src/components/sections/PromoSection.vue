<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { animate } from '@/util/animation'

defineProps({
  image: Object
})

const show = ref(true)

const togglePromo = (toggle) => {
  if (toggle) {
    show.value = toggle
    nextTick(() => {
      animate('.promo', { opacity: 1 }, 500)
    })
  } else {
    animate('.promo', { opacity: 0 }, 500, () => {
      show.value = toggle
    })
  }
}

defineExpose({
  togglePromo
})

onMounted(() => {
  animate('.promo', { opacity: 0 }, 0 , () => {
    animate('.promo', { opacity: 1 }, 1000)
  })
})
</script>

<template>
  <div v-if="show" class="promo" @click="togglePromo(false)">
    <img :src="image.node.mediaItemUrl" loading="lazy" />
    <div class="promo-notification">Click anywhere outside to close this pop-up</div>
  </div>
</template>

<style scoped>
.promo {
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;
  position: fixed;
  top: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  opacity: 0;
}

.promo>img {
  max-width: 1240px;
  max-height: 85%;
  object-fit: cover;
}

.promo-notification {
  font-family: 'TT Norms Pro';
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  color: var(--cobbs-white);
}

@media screen and (min-width: 1024px) {
  .promo {
    display: flex;
  }
}
</style>