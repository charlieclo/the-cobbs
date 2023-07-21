<script setup>
import { defineComponent, ref, toRefs } from 'vue'
import { Waypoint } from 'vue-waypoint'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { animate } from '@/util/animation'
import moment from 'moment'

defineComponent({
  Waypoint,
  Swiper,
  SwiperSlide
})

const props = defineProps({
  waypointActive: {
    type: Boolean,
    default: false  
  },
  eventData: {
    type: Array,
    default: []
  }
})

const emit = defineEmits(['waypoint-hit'])

const { eventData } = toRefs(props)
const eventSwiper = ref(null)
const activeEvent = ref(0)

const waypointChange = (state) => {
  if (state.going === 'IN') {
    emit('waypoint-hit', 'events')
  }
}

const onSwiper = (swiper) => {
  eventSwiper.value = swiper
}

const formatEventDate = (startDate, endDate, mobile) => {
  if (startDate === undefined || endDate === undefined) {
    return 'Invalid Date'
  }

  if (startDate === endDate) {
    return mobile
      ? moment(startDate, 'MM/DD/YYYY').format('dddd, DD MMM YYYY').toUpperCase()
      : moment(startDate, 'MM/DD/YYYY').format('dddd<br />DD MMM YYYY').toUpperCase()
  } else {
    return mobile
      ? moment(startDate, 'MM/DD/YYYY').format('dddd, DD MMM YYYY').toUpperCase().concat(' - ', moment(endDate, 'MM/DD/YYYY').format('dddd, DD MMM YYYY').toUpperCase())
      : moment(startDate, 'MM/DD/YYYY').format('dddd<br />DD MMM YYYY').toUpperCase()
  }
}

const changeActiveEvent = (index) => {
  if (index >= 0 && index < eventData.value.length && activeEvent.value !== index) {
    animate('.event-image', { opacity: 0 }, 0, () => {
      activeEvent.value = index
      animate('.event-image', { opacity: 1 }, 500)
    })
  } else if (index >= eventData.value.length) {
    animate('.event-image', { opacity: 0 }, 0, () => {
      activeEvent.value = 0
      animate('.event-image', { opacity: 1 }, 500)
    })
  } else if (index < 0) {
    animate('.event-image', { opacity: 0 }, 0, () => {
      activeEvent.value = eventData.value.length - 1
      animate('.event-image', { opacity: 1 }, 500)
    })
  }
}

const slide = (index) => {
  if (index >= 0 && index < eventData.value.length) {
    activeEvent.value = index
  } else if (index >= eventData.value.length) {
    activeEvent.value = 0
  } else if (index < 0) {
    activeEvent.value = eventData.value.length - 1
  }

  eventSwiper.value.slideToLoop(activeEvent.value)
}

const slideChange = () => {
  activeEvent.value = eventSwiper.value.realIndex
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
    id="events"
    class="main-event"
    @change="waypointChange"
  >
    <div class="event-information">
      <div class="information-headline">EVENTS</div>
      <a
        v-for="(event, index) in eventData"
        :key="`event-${index}`"
        :href="event.url"
        target="_blank"
        rel="noopener noreferrer"
        class="information-detail"
        @mouseover="changeActiveEvent(index)"
      >
        <div class="information-title">
          {{ event.title.toUpperCase() }}
        </div>
        <div v-html="formatEventDate(event.startDate, event.endDate, false)" class="information-date"></div>
      </a>
    </div>
    <div class="event-information-slider">
      <img
        src="@/assets/icons/chevron-left.svg"
        alt="chevron-left"
        class="slider-chevron"
        @click="slide(activeEvent - 1)"
      />
      <div class="slider-detail">
        <div class="slider-headline">EVENTS</div>
        <a
          :href="eventData[activeEvent].url"
          target="_blank"
          class="slider-title"
        >
          {{ eventData[activeEvent].title.toUpperCase() }}
        </a>
        <div v-html="formatEventDate(eventData[activeEvent].startDate, eventData[activeEvent].endDate, true)" class="slider-date"></div>
      </div>
      <img
        src="@/assets/icons/chevron-right.svg"
        alt="chevron-right"
        class="slider-chevron"
        @click="slide(activeEvent + 1)"
      />
    </div>
    <div class="event-image">
      <img :src="eventData[activeEvent].image.node.mediaItemUrl" alt="event-image" />
    </div>
    <div class="event-image-mobile">
      <swiper
        :slides-per-view="1"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="slideChange"
      >
        <swiper-slide
          v-for="(event, index) in eventData"
          :key="`slide-${index}`"
        >
        <img :src="event.image.node.mediaItemUrl" alt="event-image-mobile" />
        </swiper-slide>
      </swiper>
    </div>
  </Waypoint>
</template>

<style scoped>
.main-event {
  display: flex;
  flex-direction: column-reverse;
}

.event-information {
  flex: 1 1 50%;
  align-self: stretch;
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  background-image: url('@/assets/textures/grey-texture-half.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.information-headline {
  font-family: 'TT Norms Pro';
  font-size: 14px;
  font-weight: 500;
  line-height: 129%;
  letter-spacing: 2.45px;
  text-align: center;
  background: var(--cobbs-gradient);
  -webkit-text-fill-color: transparent;
  background-clip: initial;
  -webkit-background-clip: text;
}

.information-detail {
  align-self: center;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
  color: var(--cobbs-beige);
}

.information-title {
  font-size: 4vw;
  font-weight: 200;
  line-height: 97%;
  text-align: center;
  white-space: nowrap;
}

.information-date {
  padding-bottom: 8px;
  font-family: 'TT Norms Pro';
  font-size: 1vw;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.36px;
  text-align: left;
  white-space: nowrap;
}

.event-information-slider {
  padding: 25px 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
}

.event-information-slider>img {
  height: 6vw;
  cursor: pointer;
}

.slider-detail {
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.slider-headline {
  padding-bottom: 4px;
  font-family: 'TT Norms Pro';
  font-size: 3vw;
  font-weight: 500;
  line-height: 129%;
  letter-spacing: 1.75px;
  text-align: center;
  background: var(--cobbs-gradient);
  -webkit-text-fill-color: transparent;
  background-clip: initial;
  -webkit-background-clip: text;
}

.slider-title {
  font-size: 10vw;
  font-weight: 200;
  line-height: 97%;
  text-align: center;
  color: var(--cobbs-beige);
}

.slider-date {
  font-family: 'TT Norms Pro';
  font-size: 2.15vw;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.3px;
  text-align: center;
  color: var(--cobbs-beige);
}

.event-image {
  flex: 1 1 50%;
  align-self: stretch;
  display: none;
}

.event-image>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-image-mobile {
  flex: 1 1 50%;
  align-self: stretch;
}

.swiper {
  height: 100%;
}

.swiper-slide {
  height: auto;
}

.swiper-content {
  height: 100%;
}

.event-image-mobile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (min-width: 1024px) {
  .main-event {
    height: auto;
    min-height: 1080px;
    flex-direction: row;
  }

  .event-information {
    display: flex;
  }

  .event-image {
    display: block;
  }

  .event-image-mobile {
    display: none;
  }

  .event-information-slider {
    display: none;
  }
}

@media screen and (min-width: 1024px) and (min-height: 720px) {
  .main-event {
    min-height: 100vh;
  }
}
</style>