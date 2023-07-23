<script setup>
import { ref } from 'vue'
import { navigations } from '@/constant/navigation'
import { animate } from '@/util/animation'

defineProps({
  logo: Object,
  logoMobile: Object
})

const emit = defineEmits(['toggle-promo', 'toggle-waypoint'])

const activeNav = ref('')

const changeActiveNav = (nav) => {
  activeNav.value = nav
}

const onLogoClick = () => {
  changeActiveNav('')
  emit('toggle-waypoint', false)
  emit('toggle-promo', false)
  const offset = $('.main-content').offset().top - $('.main').scrollTop();
  $('.header-logo-mobile').removeClass('display-none')
  $('#hero').removeClass('display-none')
  $('.main').scrollTop($('.main-content').offset().top - offset);
  $('.rsvp-button').removeClass('no-rotate');
  animate('.main', { scrollTop: $('#hero').offset().top }, 1000, () => {
    $('.main-content').scrollTop(0)
  })
}

const moveToSection = (menuId, toMiddle = false) => {
  changeActiveNav(menuId)
  if ($('#hero').offset().top === 0 && !($('#hero').hasClass('display-none'))) {
    animate('.main-content', { scrollTop: $('#hero').outerHeight() }, 0, () => {
      animate('.main-content', { scrollTop: $(`#${menuId}`).offset().top - (toMiddle ? ($(window).height() / 2) - ($(`#${menuId}`).height() / 2) : 0) }, 0, () => {
        $('.rsvp-button').addClass('no-rotate');
        animate('.main', { scrollTop: $('.main-content').offset().top }, 500, () => {
          $('.header-logo-mobile').addClass('display-none')
          $('#hero').addClass('display-none')
          emit('toggle-waypoint', true)
        })
        animate('.hero-img', { opacity: 0.1 }, 1000)
      })
    })
  } else {
    if (toMiddle) $(`#${menuId}`).get(0).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
    else $(`#${menuId}`).get(0).scrollIntoView({ behavior: 'smooth' })
  }
}

defineExpose({
  changeActiveNav,
  onLogoClick,
  moveToSection
})
</script>

<template>
  <header class="header">
    <div class="header-logo">
      <img
        :src="logo.node.mediaItemUrl"
        alt="header-logo"
        @click="onLogoClick()"
      />
    </div>
    <div class="header-logo-mobile">
      <img
        :src="logoMobile.node.mediaItemUrl"
        alt="header-logo-mobile"
        @click="onLogoClick()"
      />
    </div>
    <div class="header-navigation">
      <a
        v-for="(nav, index) in navigations"
        :key="`nav-${index}`"
        :class="{ active: nav.id === activeNav }"
        @click="moveToSection(nav.id, nav.toMiddle)"
      >
        {{ nav.name }}
      </a>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  position: absolute;
  z-index: 0;
  background: linear-gradient(180deg, rgba(33, 39, 33, 0.70) 0%, rgba(33, 39, 33, 0.00) 100%);
}

.header>div {
  flex: 1 1 auto;
}

.header-logo {
  padding: 35px 0 35px 110px;
  display: none;
}

.header-logo>img {
  width: 342px;
  height: 34px;
  object-fit: contain;
}

.header-logo>img:hover {
  cursor: pointer;
}

.header-logo-mobile {
  padding-top: 31px;
  text-align: center;
}

.header-logo-mobile>img {
  width: 98px;
  height: 64px;
  object-fit: contain;
}

.header-logo-mobile>img:hover {
  cursor: pointer;
}

.header-navigation {
  margin-bottom: 2px;
  padding-right: 101px;
  display: none;
  justify-content: flex-end;
  gap: 7%;
}

.header-navigation>a {
  font-size: 24px;
  font-weight: 300;
  color: var(--cobbs-grey);
  white-space: nowrap;
  transition: 1s ease;
}

.header-navigation>a:hover {
  background: var(--cobbs-gradient);
  -webkit-text-fill-color: transparent;
  background-clip: initial;
  -webkit-background-clip: text;
  cursor: pointer;
}

.header-navigation>a.active {
  background: var(--cobbs-gradient);
  -webkit-text-fill-color: transparent;
  background-clip: initial;
  -webkit-background-clip: text;
}

@media screen and (min-width: 1024px) {
  .header {
    position: fixed;
    z-index: 96;
  }

  .header-logo {
    display: block;
  }

  .header-logo-mobile {
    display: none;
  }

  .header-navigation {
    display: flex;
  }
}
</style>
