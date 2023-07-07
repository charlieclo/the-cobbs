<script setup>
import { ref, toRefs } from 'vue'
import { animate } from '@/util/animation'

const props = defineProps({
  title: String,
  description: String,
  images: {
    type: Array,
    default: () => []
  }
})

const { images } = toRefs(props)

const activeGallery = ref(0)

const animateGalleryImage = (index) => {
  animate('.gallery-image', { opacity: 0 }, 0, () => {
    activeGallery.value = index
    animate('.gallery-image', { opacity: 1 }, 150)
  })
}

const changeActiveGallery = (index) => {
  if (index >= 0 && index < images.value.length) {
    animateGalleryImage(index)
  } else if (index >= images.value.length) {
    animateGalleryImage(0)
  } else if (index < 0) {
    animateGalleryImage(images.value.length - 1)
  }
}
</script>

<template>
  <div id="gallery" class="main-gallery">
    <div class="gallery-headline">GALLERY</div>
    <div v-html="title" class="gallery-title"></div>
    <div v-html="description" class="gallery-description"></div>
    <div class="gallery-image">
      <img
        v-if="Array.isArray(images) && images.length"
        :src="images[activeGallery].node.mediaItemUrl"
        loading="lazy"
      />
    </div>
    <div class="gallery-information">
      <div class="information-detail">
        <p>{{ activeGallery + 1 }}/{{ images.length }}</p>
      </div>
      <div class="information-control">
        <img
          src="@/assets/Chevron Left.svg"
          @click="changeActiveGallery(activeGallery - 1)"
        />
        <img
          src="@/assets/Chevron Right.svg"
          @click="changeActiveGallery(activeGallery + 1)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-gallery {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--cobbs-beige);
}

.gallery-headline {
  padding-top: 36px;
  padding-bottom: 25px;
  font-family: 'TT Norms Pro';
  font-size: 3vw;
  font-weight: 500;
  line-height: 129%;
  letter-spacing: 2.45px;
  background: var(--cobbs-gradient);
  -webkit-text-fill-color: transparent;
  background-clip: initial;
  -webkit-background-clip: text;
}

.gallery-title {
  width: 90%;
  padding-bottom: 28px;
  font-size: 10vw;
  font-weight: 200;
  line-height: 100%;
  text-align: center;
  color: var(--cobbs-grey);
}

.gallery-description {
  width: 90%;
  padding-bottom: 37px;
  font-family: 'TT Norms Pro';
  font-size: 3vw;
  font-weight: 500;
  line-height: 129%;
  text-align: center;
  color: var(--cobbs-grey);
}

.gallery-image {
  width: 90%;
}

.gallery-image>img {
  width: 100%;
}

.gallery-information {
  width: 90%;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
}

.information-detail {
  font-size: 20px;
  font-weight: 200;
  line-height: 0%;
  color: var(--cobbs-grey);
}

.information-control {
  display: flex;
  gap: 30px;
}

.information-control>img {
  width: 10px;
  filter: invert(100%) brightness(2);
  cursor: pointer;
}

@media screen and (min-width: 1024px) {
  .main-gallery{
    min-height: 100vh;
  }

  .gallery-headline {
    padding-top: 100px;
    padding-bottom: 21px;
    font-size: 14px;
  }

  .gallery-title {
    width: 67%;
    padding-bottom: 65px;
    font-size: 115px;
  }

  .gallery-description {
    width: 67%;
    padding-bottom: 79px;
    font-size: 18px;
  }

  .gallery-image {
    width: 67%;
  }

  .gallery-image>img {
    max-height: 682px;
  }

  .gallery-information {
    width: 67%;
  }

  .information-title {
    font-size: 43px;
  }

  .information-control {
    gap: 50px;
  }

  .information-control>img {
    width: 1vw;
  }
}
</style>