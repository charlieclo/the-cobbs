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
  title: String,
  description: String,
  image: Object
})

const emit = defineEmits(['waypoint-hit'])

const waypointChange = (state) => {
  if (state.going === 'IN') {
    emit('waypoint-hit', 'about')
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
    id="about"
    class="main-about"
    @change="waypointChange"
  >
    <div class="about-image">
      <img :src="image.node.mediaItemUrl" alt="about-image" />
    </div>
    <div class="about-information">
      <div class="information-headline">ABOUT THE COBBS</div>
      <div v-html="title" class="information-title"></div>
      <div v-html="description" class="information-description"></div>
    </div>
  </Waypoint>
</template>

<style scoped>
.main-about {
  display: flex;
  flex-direction: column;
  background-image: url('@/assets/textures/brown-texture-half.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.main-about>div {
  flex-basis: 50%;
}

.about-image>img {
  width: 100%;
  height: 520px;
  object-fit: cover;
}

.about-information {
  height: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.information-headline {
  width: 90%;
  font-family: 'TT Norms Pro';
  font-size: 2.15vw;
  font-weight: 500;
  line-height: 129%;
  letter-spacing: 1.75px;
  background: var(--cobbs-gradient);
  -webkit-text-fill-color: transparent;
  background-clip: initial;
  -webkit-background-clip: text;
}

.information-title {
  width: 90%;
  padding-top: 15px;
  padding-bottom: 33px;
  font-size: 12vw;
  font-weight: 200;
  line-height: 100%;
}

.information-description {
  width: 90%;
  font-family: 'TT Norms Pro';
  font-size: 3.4vw;
  font-weight: 500;
  line-height: 129%;
  text-align: justify;
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
  .main-about {
    min-height: 100vh;
    flex-direction: row;
  }

  .about-image>img {
    height: 100%;
  }

  .about-information {
    width: 80%;
    height: auto;
    padding: 112px 0;
    align-items: normal;
  }

  .information-headline {
    padding-left: 10%;
    font-size: 14px;
    letter-spacing: 2.45px;
  }

  .information-title {
    width: 80%;
    padding-top: 17px;
    padding-bottom: 51px;
    padding-left: 10%;
    font-size: 115px;
  }

  .information-description {
    width: 70%;
    padding-left: 10%;
    font-size: 18px;
  }
}
</style>