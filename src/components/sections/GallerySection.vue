<script setup>
import { defineComponent, ref, toRefs } from 'vue'
import { animate } from '@/util/animation'
import { Waypoint } from 'vue-waypoint'

defineComponent({
  Waypoint
})

const props = defineProps({
  waypointActive: {
    type: Boolean,
    default: false  
  },
  title: String,
  description: String,
  images: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['waypoint-hit'])

const { images } = toRefs(props)

const activeGallery = ref(0)

const waypointChange = (state) => {
  if (state.going === 'IN') {
    emit('waypoint-hit', 'gallery')
  }
}

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

const waypointOptions = {
  root: document,
  rootMargin: "0px 0px 0px 0px",
  threshold: [0.5, 0.5],
}
</script>

<template>
  <Waypoint
    :active="waypointActive"
    :options="waypointOptions"
    id="gallery"
    class="main-gallery"
    @change="waypointChange"
  >
    <div class="gallery-headline">GALLERY</div>
    <div v-html="title" class="gallery-title"></div>
    <div v-html="description" class="gallery-description"></div>
    <div class="gallery-image">
      <img
        v-if="Array.isArray(images) && images.length"
        :src="images[activeGallery].node.mediaItemUrl"
        alt="gallery-image"
        loading="lazy"
      />
    </div>
    <div class="gallery-information">
      <div class="information-detail">
        <p>{{ activeGallery + 1 }}/{{ images.length }}</p>
      </div>
      <div class="information-control">
        <img
          src="@/assets/icons/chevron-left.svg"
          alt="chevron-left"
          @click="changeActiveGallery(activeGallery - 1)"
        />
        <img
          src="@/assets/icons/chevron-right.svg"
          alt="chevron-right"
          @click="changeActiveGallery(activeGallery + 1)"
        />
      </div>
    </div>
  </Waypoint>
</template>

<style scoped>
.main-gallery {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/textures/brown-texture-full.png');
  background-size: cover;
  background-repeat: no-repeat;
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
  font-size: 21px;
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

  .information-detail {
    font-size: 43px;
  }

  .information-control {
    gap: 50px;
  }

  .information-control>img {
    width: 18px;
  }
}
</style>