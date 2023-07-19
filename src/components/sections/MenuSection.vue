<script setup>
import { defineComponent, onMounted, ref, toRefs } from 'vue'
import { animate } from '@/util/animation'
import { Waypoint } from 'vue-waypoint'
import MenuSlider from '@/components/MenuSlider.vue'

defineComponent({
  Waypoint
})

const props = defineProps({
  waypointActive: {
    type: Boolean,
    default: false  
  },
  menuData: {
    type: Object,
    default: () => {}
  }
})

const emit = defineEmits(['waypoint-hit'])

const { menuData } = toRefs(props)

const slider = ref(null)
const activeMenu = ref('Mains')
const allImagesLoading = ref(true)

const waypointChange = (state) => {
  if (state.going === 'IN') {
    emit('waypoint-hit', 'menu')
  }
}

const changeActiveMenu = (key) => {
  if (activeMenu.value !== key) {
    animate('#menu-title', { opacity: 0 }, 150, () => {
      slider.value.changeActiveDots(0)
      activeMenu.value = key
      animate('#menu-title', { opacity: 1 }, 150)
    })
  }
}

const waypointOptions = {
  root: document,
  rootMargin: "0px 0px 0px 0px",
  threshold: [0.5, 0.5],
}

onMounted(() => {
  const imagePromises = []
  for (const key in menuData.value) {
    const products = menuData.value[key].products
    if (Array.isArray(products) && products.length) {
      imagePromises.push(products.map((product, index) => {
        if (product !== null) {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = product.node.mediaItemUrl;
            img.onload = resolve;
            img.onerror = reject;
          })
        }
      }))
    }
  }

  Promise.allSettled(imagePromises).then(() => { 
    allImagesLoading.value = false
  })
})
</script>

<template>
  <Waypoint
    :active="waypointActive"
    :options="waypointOptions"
    id="menu"
    class="main-menu"
    @change="waypointChange"
  >
    <div class="menu-selector">
      <img
        v-for="(menu, index) of Object.entries(menuData)"
        :key="`menuCategory-${index}`"
        :src="menu[1].category.node.mediaItemUrl"
        :alt="`menu-category-${index + 1}`"
        :class="`category-${menu[0].toLowerCase()}`"
        @click="changeActiveMenu(menu[0])"
      />
    </div>
    <div class="menu-selector-mobile">
      <div class="selector-headline">MENU</div>
      <div class="selector-container">
        <div
          v-for="(menu, index) of Object.entries(menuData)"
          :key="`select-${index}`"
          :class="{ 'active':  menu[0] === activeMenu }"
          class="selector-tab"
          @click="changeActiveMenu(menu[0])"
        >
          {{ menu[0].toUpperCase() }}
        </div>
      </div>
    </div>
    <div class="menu-information">
      <div class="information-headline">OUR MENU</div>
      <div id="menu-title" class="information-title">{{ activeMenu }}</div>
      <MenuSlider
        v-if="!allImagesLoading"
        ref="slider"
        :images="menuData[activeMenu].products ?? []"
      />
    </div>
  </Waypoint>  
</template>

<style scoped>
.main-menu {
  display: flex;
  flex-direction: column;
}

.menu-selector {
  display: none;
  background-image: url('@/assets/textures/brown-texture-half.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.menu-selector>img {
  width: 36.5%;
  min-width: 250px;
  height: 32.5%;
  min-height: 250px;
  object-fit: contain;
  position: absolute;
  cursor: pointer;
}

.menu-selector-mobile {
  flex-basis: 0;
  padding: 40px 0 16px 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  background-color: var(--cobbs-grey);
}

.selector-headline {
  width: 100%;
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

.selector-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.selector-tab {
  padding: 10px 25px;
  border: 1px solid var(--cobbs-brown);
  border-radius: 19.5px;
  font-family: 'TT Norms Pro';
  font-size: 10px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 1.7px;
  text-align: center;
  color: var(--cobbs-black);
  cursor: pointer;
}

.selector-tab.active {
  background-color: var(--cobbs-brown);
}

.menu-information {
  flex-basis: auto;
  padding: 15px 0 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--cobbs-grey);
}

.information-headline {
  width: 100%;
  padding: 0 16px;
  display: none;
  text-align: center;
  font-family: 'TT Norms Pro';
  font-size: 14px;
  font-weight: 500;
  line-height: 129%;
  letter-spacing: 2.45px;
  background: var(--cobbs-gradient);
  -webkit-text-fill-color: transparent;
  background-clip: initial;
  -webkit-background-clip: text;
}

.information-title {
  padding: 0 0 15px 0;
  font-size: 56px;
  font-weight: 200;
  line-height: 100%;
  color: var(--cobbs-dark-beige);
}

@media screen and (min-width: 1024px) {
  .main-menu {
    height: auto;
    min-height: 100vh;
    overflow: hidden;
    flex-direction: row;
  }

  .menu-selector {
    flex-basis: 50%;
    height: auto;
    display: flex;
    overflow: hidden;
    position: relative;
  }

  .category-mains {
    top: 35%;
    left: 30%;
  }

  .category-appertizer {
    top: 10%;
    left: -5%;
  }

  .category-desserts {
    left: 5%;
    bottom: 3%;
  }

  .category-boulangerie {
    top: 15%;
    right: -4%;
    z-index: 1;
  }

  .category-drinks {
    right: -1%;
    bottom: -2%;
  }

  .menu-selector-mobile {
    display: none;
  }

  .menu-information {
    flex-basis: 50%;
    height: auto;
    padding: 112px 0;
    background-image: url('@/assets/textures/grey-texture-half.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .information-headline {
    display: block;
  }

  .information-title {
    padding: 28px 0 39px 0;
    font-size: 115px;
  }
}
</style>