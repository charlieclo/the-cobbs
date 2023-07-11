<script setup>
import { defineComponent } from 'vue'
import { Waypoint } from 'vue-waypoint'

defineComponent({
  Waypoint
})

defineProps({
  waypointActive: {
    type: Boolean,
    default: false  
  },
  logoMobile: Object,
  title: String,
  description: String,
  image1: Object,
  image2: Object,
  image3: Object
})

const emit = defineEmits(['logo-click', 'waypoint-hit'])

const waypointChange = (state) => {
  if (state.going === 'IN') {
    emit('waypoint-hit', 'home')
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
    id="home"
    class="main-home"
    @change="waypointChange"
  >
    <div class="home-header">
      <img
        :src="logoMobile.node.mediaItemUrl"
        loading="lazy"
        @click="emit('logo-click')"
      />
    </div>
    <div class="home-information">
      <div v-html="title" class="information-title"></div>
      <div v-html="description" class="information-description"></div>
    </div>
    <div class="home-image">
      <img :src="image1.node.mediaItemUrl" loading="lazy" />
      <img :src="image2.node.mediaItemUrl" loading="lazy" />
      <img :src="image3.node.mediaItemUrl" loading="lazy" />
    </div>
    <div class="home-image-mobile">
      <div>
        <img :src="image1.node.mediaItemUrl" loading="lazy" />
        <img :src="image2.node.mediaItemUrl" loading="lazy" />
        <img :src="image3.node.mediaItemUrl" loading="lazy" />
      </div>
    </div>
  </Waypoint>
</template>

<style scoped>
.main-home {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  /* gap: 70px; */
  background-color: var(--cobbs-black);
}

.home-header {
  padding-top: 30px;
  text-align: center;
  order: 3;
}

.home-header>img {
  width: 98px;
  height: 64px;
  object-fit: contain;
  cursor: pointer;
}

.home-information {
  flex-basis: 50%;
  width: 90%;
  height: 100%;
  padding-bottom: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 29px;
}

.information-title {
  font-size: 12vw;
  font-weight: 200;
  line-height: 100%;
  color: var(--cobbs-white);
}

.information-description {
  font-family: 'TT Norms Pro';
  font-size: 3.4vw;
  font-weight: 500;
  line-height: 129%;
  text-align: justify;
}

.home-image {
  flex-basis: 50%;
  width: 100%;
  display: none;
  position: relative;
}

.home-image-mobile {
  flex-basis: 50%;
  width: 100%;
  height: 100%;
}

.home-image-mobile div {
  height: 480px;
  max-height: 480px;
  overflow: hidden;
  display: flex;
  position: relative;
}
.home-image img,
.home-image-mobile img {
  object-fit: cover;
  position: absolute;
}

.home-image-mobile img:nth-child(1) {
  width: 50%;
  height: 207px;
  top: 69px;
  left: 0;
}

.home-image-mobile img:nth-child(2) {
  width: 50%;
  height: 156px;
  bottom: 90px;
  left: 25%;
}

.home-image-mobile img:nth-child(3) {
  width: 50%;
  height: 165px;
  top: 35px;
  right: -50px;
}

@media screen and (min-width: 425px) {
  .information-title {
    font-size: 10vw;
  }

  .information-description {
    font-size: 2vw;
  }
}

@media screen and (min-width: 1024px) {
  .main-home {
    min-height: 100vh;
    padding-top: 0;
    overflow: hidden;
    flex-direction: row;
    gap: 0;
  }

  .home-header {
    display: none;
  }

  .home-information {
    width: 100%;
    height: auto;
    padding: 112px 0;
    gap: 51px;
  }

  .information-title {
    padding-right: 3%;
    padding-left: 18%;
    font-size: 115px;
  }

  .information-description {
    width: 70%;
    padding-left: 18%;
    font-size: 18px;
  }

  .home-image {
    /* padding-top: 112px; */
    min-height: 100vh;
    display: flex;
  }

  .home-image img:nth-child(1) {
    width: 49%; /* 461px */
    height: 523px;
    top: 260px; /* -220px */
    left: 0;
  }

  .home-image img:nth-child(2) {
    width: 44%; /* 415px */
    height: 394px;
    bottom: 0; /* 201px */
    left: 33%; /* 317px */
  }

  .home-image img:nth-child(3) {
    width: 50%;
    height: 415px;
    top: 130px; /* top: -310px */
    right: -155px; /* -157px */
  }

  .home-image-mobile {
    display: none;
  }
}
</style>