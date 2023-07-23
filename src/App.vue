<script setup>
import { ref, computed, defineAsyncComponent } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_MAIN_PAGE_SETTINGS, GET_GALLERY_IMAGES } from '@/graphql/query'
import { initiateMenuData } from '@/util/menu'
import { initiateEventData } from '@/util/event'
import { initiateGalleryImages } from '@/util/gallery'

const {
  result: mainPageSettingsResult,
  error: mainPageSettingsError,
  loading: mainPageSettingsLoading
} = useQuery(GET_MAIN_PAGE_SETTINGS, { title: 'Settings' })
const data = computed(() => mainPageSettingsResult.value?.mainPages.nodes[0].pageSettings ?? {})
const errorMessage = computed(() => mainPageSettingsError.value ?? null)

const {
  result: galleryImagesResult,
  loading: galleryImagesLoading
} = useQuery(GET_GALLERY_IMAGES, { title: 'Gallery ' })
const galleryImages = computed(() => galleryImagesResult.value?.mainPages.nodes[0].gallerySettings ?? {})

// Views
const Main = defineAsyncComponent(() => import('@/views/Main.vue'))
const Loading = defineAsyncComponent(() => import('@/views/Loading.vue'))

// Components
const Promo = defineAsyncComponent(() => import('@/components/sections/PromoSection.vue'))
const Header = defineAsyncComponent(() => import('@/components/Header.vue'))
const Hero = defineAsyncComponent(() => import('@/components/sections/HeroSection.vue'))
const Home = defineAsyncComponent(() => import('@/components/sections/HomeSection.vue'))
const About = defineAsyncComponent(() => import('@/components/sections/AboutSection.vue'))
const Menu = defineAsyncComponent(() => import('@/components/sections/MenuSection.vue'))
const Event = defineAsyncComponent(() => import('@/components/sections/EventSection.vue'))
const Gallery = defineAsyncComponent(() => import('@/components/sections/GallerySection.vue'))
const FindUs = defineAsyncComponent(() => import('@/components/sections/FindUsSection.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
const RSVPButton = defineAsyncComponent(() => import('@/components/RSVPButton.vue'))

const promo = ref(null)
const header = ref(null)
const waypointActive = ref(false)

const togglePromo = (toggle) => {
  if (promo.value !== null) promo.value.togglePromo(toggle)
}

const changeActiveNav = (nav) => {
  header.value.changeActiveNav(nav)
}

const onLogoClick = () => {
  header.value.onLogoClick()
}

const moveToSection = (nav, toMiddle) => {
  header.value.moveToSection(nav, toMiddle)
}

const changeWaypointActive = (active) => {
  waypointActive.value = active
}
</script>

<template>
  <template v-if="mainPageSettingsLoading">
    <Loading />
  </template>
  <template v-else>
    <Main @scrollToTop="onLogoClick">
      <template #promo>
        <Promo
          ref="promo"
          v-if="data.promo.image !== null"
          :image="data.promo.image"
        />
      </template>
      <template #header>
        <Header
          ref="header"
          :logo="data.header.logo"
          :logoMobile="data.header.logoMobile"
          @togglePromo="togglePromo"
          @toggleWaypoint="changeWaypointActive"
        />
      </template>
      <template #hero>
        <Hero
          :title="data.hero.title"
          :background="data.hero.background"
          @clickMore="changeActiveNav"
          @toggleWaypoint="changeWaypointActive"
        />
      </template>
      <template #content>
        <Home
          :waypointActive="waypointActive"
          :logoMobile="data.header.logoMobile"
          :title="data.home.title"
          :description="data.home.description"
          :image1="data.home.image1"
          :image2="data.home.image2"
          :image3="data.home.image3"
          @logoClick="onLogoClick"
          @waypointHit="changeActiveNav"
        />
        <About
          :waypointActive="waypointActive"
          :title="data.about.title"
          :description="data.about.description"
          :image="data.about.image"
          @waypointHit="changeActiveNav"
        />
        <Menu
          :waypointActive="waypointActive"
          :menuData="initiateMenuData(data)"
          @waypointHit="changeActiveNav"
        />
        <Event
          :waypointActive="waypointActive"
          :eventData="initiateEventData(data)"
          @waypointHit="changeActiveNav"
        />
        <Gallery
          v-if="!galleryImagesLoading"
          :waypointActive="waypointActive"
          :title="data.gallery.title"
          :description="data.gallery.description"
          :images="initiateGalleryImages(galleryImages)"
          @waypointHit="changeActiveNav"
        />
        <FindUs
          :waypointActive="waypointActive"
          :location="data.location"
          :contact="data.contacts"
          :workingHours="data.workingHours"
          @waypointHit="changeActiveNav"
        />
        <Footer
          :logo="data.header.logo"
          :logoMobile="data.header.logoMobile"
          :contact="data.contacts"
          :background="data.footer.image"
          :disclaimer="data.footer.disclaimer"
          :company="data.footer.company"
          @navClick="moveToSection"
        />
      </template>
      <template #rsvp>
        <RSVPButton :url="data.contacts.rsvpUrl" />
      </template>
    </Main>
  </template>
</template>
