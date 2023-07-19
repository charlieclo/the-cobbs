<script setup>
import { navigations } from '@/constant/navigation'
import { socialMedia } from '@/constant/social-media'

defineProps({
  logo: Object,
  logoMobile: Object,
  contact: Object,
  background: Object,
  disclaimer: String,
  company: String
})

const emit = defineEmits(['nav-click'])

const moveToSection = (nav) => {
  emit('nav-click', nav)
}
</script>

<template>
  <footer :style="{ backgroundImage: `url(${background.node.mediaItemUrl})`}" class="footer">
    <div class="footer-logo">
      <img :src="logoMobile.node.mediaItemUrl" alt="footer-logo-mobile" />
    </div>
    <div class="footer-logo-mobile">
      <img :src="logo.node.mediaItemUrl" alt="footer-logo" />
    </div>
    <div class="footer-menu">
      <a
        v-for="(nav, index) in navigations"
        :key="`footer-nav-${index}`"
        @click="moveToSection(nav.id)"
      >
        {{ nav.footerName }}
      </a>
    </div>
    <div class="footer-contacts">
      <a
        v-for="(media, index) in socialMedia"
        :key="`social-media-${index}`"
        :href="[media.prepend, contact[media.data]].join('')"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ media.platform }}
      </a>
    </div>
    <div v-html="disclaimer" class="footer-disclaimer"></div>
    <div v-html="company" class="footer-company"></div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--cobbs-dark-beige);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 12%;
}

.footer-logo {
  display: none;
}

.footer-logo-mobile {
  padding: 48px 77px;
  display: block;
}

.footer-logo-mobile>img {
  width: 209px;
  height: 19px;
  filter: brightness(6);
}

.footer-menu {
  padding-bottom: 102px;
  display: none;
  gap: 62px;
}

.footer-menu>a {
  font-family: 'TT Norms Pro';
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  color: var(--cobbs-black);
  cursor: pointer;
}

.footer-contacts {
  width: 100%;
  padding-bottom: 45px;
  display: flex;
  flex-direction: column;
  gap: 31px;
}

.footer-contacts>a {
  font-family: 'TT Norms Pro';
  font-size: 10px;
  font-weight: 500;
  line-height: 129%;
  letter-spacing: 2.56px;
  text-align: center;
  color: var(--cobbs-black);
}

.footer-disclaimer {
  padding: 0 15px 18px 15px;
  font-family: 'TT Norms Pro';
  font-size: 8px;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  color: var(--cobbs-black);
}

.footer-company {
  padding-bottom: 31px;
  font-family: 'TT Norms Pro';
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  color: var(--cobbs-black);
}

@media screen and (min-width: 1024px) {
  .footer {
    opacity: 1;
  }

  .footer-logo {
    padding: 83px 0 112px 0;
    display: block;
    text-align: center;
  }

  .footer-logo>img {
    width: 211px;
    height: 139px;
  }

  .footer-logo-mobile {
    display: none;
  }

  .footer-menu {
    display: flex;
  }

  .footer-contacts {
    padding: 0 40px 35px 0;
    flex-direction: row;
    justify-content: center;
    gap: 205px;
  }

  .footer-contacts>a {
    font-size: 16px;
  }

  .footer-disclaimer {
    padding: 0 15px 33px 15px;
    font-size: 14px;
  }

  .footer-company {
    font-size: 14px;
  }
}
</style>