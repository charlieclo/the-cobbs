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
} = useQuery(GET_MAIN_PAGE_SETTINGS)
const data = computed(() => mainPageSettingsResult.value?.mainPages.nodes[0].pageSettings ?? {})
const errorMessage = computed(() => mainPageSettingsError.value ?? null)

const {
  result: galleryImagesResult,
  loading: galleryImagesLoading
} = useQuery(GET_GALLERY_IMAGES)
const galleryImages = computed(() => galleryImagesResult.value?.mainPages.nodes[0].gallerySettings ?? {})

// Views
const Main = defineAsyncComponent(() => import('@/views/Main.vue'))
const Loading = defineAsyncComponent(() => import('@/views/Loading.vue'))

// Components
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

const header = ref(null)

const changeActiveNav = (nav) => {
  header.value.changeActiveNav(nav)
}

const onLogoClick = () => {
  header.value.onLogoClick()
}

const moveToSection = (nav) => {
  header.value.moveToSection(nav)
}
</script>

<template>
  <template v-if="mainPageSettingsLoading">
    <Loading />
  </template>
  <template v-else>
    <!-- <h6 style="color: black;">{{ JSON.stringify(promo) }}</h6>
    <pre style="color: black">Bad:
      <span>{{ errorMessage }}</span>
    </pre> -->
    <Main>
      <template #header>
        <Header
          ref="header"
          :logo="data.header.logo"
          :logoMobile="data.header.logoMobile"
        />
      </template>
      <template #hero>
        <Hero
          :title="data.hero.title"
          :background="data.hero.background"
          @clickMore="changeActiveNav"
        />
      </template>
      <template #content>
        <Home
          :logoMobile="data.header.logoMobile"
          :title="data.home.title"
          :description="data.home.description"
          :image1="data.home.image1"
          :image2="data.home.image2"
          :image3="data.home.image3"
          @logoClick="onLogoClick"
        />
        <About
          :title="data.about.title"
          :description="data.about.description"
          :image="data.about.image"
        />
        <Menu :menuData="initiateMenuData(data)" />
        <Event :eventData="initiateEventData(data)" />
        <Gallery
          v-if="!galleryImagesLoading"
          :title="data.gallery.title"
          :description="data.gallery.description"
          :images="initiateGalleryImages(galleryImages)"
        />
        <FindUs
          :location="data.location"
          :contact="data.contacts"
          :workingHours="data.workingHours"
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
