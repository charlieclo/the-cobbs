<script setup>
import { animate } from '@/util/animation'

defineProps({
  title: String,
  background: Object
})

const emit = defineEmits(['click-more'])

const checkMimeType = (storedMimeType, mimeType) => {
  return storedMimeType.includes(mimeType)
}

const navigateToHomeSection = () => {
  emit('click-more', 'home')
  animate('.main-content', { scrollTop: 0 }, 0, () => {
    animate('.main', { scrollTop: $('.main').scrollTop() + $('.main-content').offset().top }, 500, () => {
      $('#hero').addClass('display-none')
    })
    animate('.hero-img', { opacity: 0.5 }, 1000)
  })
}
</script>

<template>
  <div id="hero" class="hero-container">
    <img
      v-if="checkMimeType(background.node.mimeType, 'image')"
      :src="background.node.mediaItemUrl"
      loading="lazy"
      class="hero-background"
    />
    <video
      v-else-if="checkMimeType(background.node.mimeType, 'video')"
      :src="background.node.mediaItemUrl"
      autoplay
      muted
      loop
      class="hero-background"
    />
    <div class="hero-text" @click="navigateToHomeSection()">
      <div>
        <h1 v-html="title"></h1>
      </div>
    </div>
    <div class="clickable-more" @click="navigateToHomeSection()">MORE TO SEE!</div>
  </div>
</template>

<style scoped>
.hero-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.hero-background {
  width: 100%;
  height: calc(100vh - 49px); /* 100% */
  object-fit: cover;
}

.hero-text {
  width: 100%;
  height: calc(100vh - 48px - 103px); /* 100% */
  padding-top: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.hero-text>div {
  padding: 0 58px;
}

.hero-text h1 {
  width: min-content;
  font-size: 15vw;
  line-height: 100%;
}

.clickable-more {
  flex: 1 1 auto;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'TT Norms Pro';
  font-size: 12px;
  font-weight: 500;
  line-height: 129%;
  letter-spacing: 2.45px;
  background-color: var(--cobbs-black);
}

.clickable-more:hover {
  cursor: pointer;
}

@media screen and (max-width: 1024px) and (orientation: landscape) {
  .hero-text h1 {
    font-size: 15vh;
  }
}

@media screen and (min-width: 1024px) {
  .hero-background {
    height: calc(100vh - 67px);
  }
  .hero-text {
    height: calc(100vh - 67px - 112px); /* 100% */
    padding-top: 112px;
  }
  .hero-text h1 {
    width: auto;
    font-size: 106px;
    line-height: initial;
  }

  .clickable-more {
    padding: 23px 0;
    font-size: 14px;
  }
}
</style>