<script setup>
import { ref, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_ALL_DATA_QUERY } from '@/graphql/query'
import { initiateMenuData } from '@/util/menu'

const { result, error, loading } = useQuery(GET_ALL_DATA_QUERY)
const data = computed(() => result.value?.menus.nodes[0].settings ?? {})
const errorMessage = computed(() => error.value ?? null)

// Views
import Main from '@/views/Main.vue'
import Loading from '@/views/Loading.vue'

// Components
import Header from '@/components/Header.vue'
import Hero from '@/components/sections/HeroSection.vue'
import Home from '@/components/sections/HomeSection.vue'
import About from '@/components/sections/AboutSection.vue'
import Menu from '@/components/sections/MenuSection.vue'

const header = ref(null)

const changeActiveNav = (nav) => {
  header.value.changeActiveNav(nav)
}
</script>

<template>
  <template v-if="loading">
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
          :title="data.home.title"
          :description="data.home.description"
          :image1="data.home.image1"
          :image2="data.home.image2"
          :image3="data.home.image3"
        />
        <About
          :title="data.about.title"
          :description="data.about.description"
          :image="data.about.image"
        />
        <Menu :menuData="initiateMenuData(data)" />
      </template>
    </Main>
  </template>
</template>
