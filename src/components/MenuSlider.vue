<script setup>
import { ref, toRefs } from 'vue'
import { animate } from '@/util/animation'

const props = defineProps({
  images: Array
})

const { images } = toRefs(props)

const activeDots = ref(0)

const changeActiveDots = (index) => {
  if (index >= 0 && index < images.value.length) {
    animate('.slider-image', { opacity: 0 }, 0, () => {
      activeDots.value = index
      animate('.slider-image', { opacity: 1 }, 150)
    })
  }
}

defineExpose({
  changeActiveDots
})
</script>

<template>
  <div class="menu-slider">
    <div class="slider-image">
      <img :src="images[activeDots].mediaItemUrl" loading="lazy" />
    </div>
    <div class="slider-control">
      <img
        src="@/assets/Chevron Left.svg"
        class="slider-chevron"
        @click="changeActiveDots(activeDots - 1)"
        />
      <div class="slider-dots">
        <div
          v-for="(image, index) in images"
          :key="`slider-dot-${index}`"
          :class="{ 'active': index === activeDots }"
          @click="changeActiveDots(index)"
        />
      </div>
      <img
        src="@/assets/Chevron Right.svg"
        class="slider-chevron"
        @click="changeActiveDots(activeDots + 1)"
      />
    </div>
  </div>  
</template>

<style scoped>
.menu-slider {
  width: 90%;
  height: 100%;
  padding: 0 16px;
}

.slider-image {
  width: 100%;
  height: 100%;
}

.slider-image>img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.slider-control {
  width: 100%;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slider-dots {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.slider-dots>div {
  width: 11px;
  height: 11px;
  border-radius: 11px;
  opacity: 0.4;
  background: var(--cobbs-beige);
  cursor: pointer;
}

.slider-dots>div.active {
  opacity: 1;
  background: var(--cobbs-gradient);
}

.slider-chevron {
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .slider-image>img {
    height: 340px;
  }
}

@media screen and (min-width: 1024px) {
  .menu-slider {
    width: 75%;
    height: 60%;
    max-height: 480px;
  }

  .slider-control {
    padding-top: 40px;
  }

  .slider-image>img {
    height: 100%;
  }
}
</style>