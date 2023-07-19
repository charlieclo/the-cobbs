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
  location: Object,
  contact: Object,
  workingHours: Object
})

const emit = defineEmits(['waypoint-hit'])

const waypointChange = (state) => {
  if (state.going === 'IN') {
    emit('waypoint-hit', 'find-us')
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
    id="find-us"
    class="main-find-us"
    @change="waypointChange"
  >
    <div class="find-us-image">
      <img :src="location.image.node.mediaItemUrl" alt="find-us-image" />
    </div>
    <div class="find-us-information">
      <div class="information-headline">ADDRESS</div>
      <div v-html="location.title" class="information-location"></div>
      <div v-html="location.address" class="information-address"></div>
      <a
        :href="location.url"
        target="_blank"
        rel="noopener noreferrer"
        class="information-direction"
      >
        GET DIRECTIONS <img src="@/assets/icons/arrow.svg" alt="arrow" />
      </a>
      <div class="information-opening">
        <div class="information-headline">OPENING HOURS</div>
        <div>
          <div>
            <div>WEEKDAY</div>
            <div>{{ workingHours.weekday.open }} - {{ workingHours.weekday.close }}</div>
          </div>
          <div>
            <div>WEEKEND</div>
            <div>{{ workingHours.weekend.open }} - {{ workingHours.weekend.close }}</div>
          </div>
        </div>
      </div>
      <div class="information-contacts">
        <div class="information-headline">CONTACTS</div>
        <div>
          <div>
            <div>RSVP</div>
            <div>{{ contact.phone }}</div>
          </div>
          <div>
            <div>INSTAGRAM</div>
            <div>{{ contact.instagramUsername }}</div>
          </div>
        </div>
      </div>
    </div>
  </Waypoint>
</template>

<style scoped>
.main-find-us {
  display: flex;
  flex-direction: column;
  background-image: url('@/assets/textures/grey-texture-half.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.find-us-image {
  flex-basis: 50%;
}

.find-us-image>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 100% 50%;
}

.find-us-information {
  flex-basis: 50%;
  width: auto;
}

.information-headline {
  padding: 43px 17px 22px 15px;
  font-family: 'TT Norms Pro';
  font-size: 2.6vw;
  font-weight: 500;
  line-height: 129%;
  letter-spacing: 2.45px;
  background: var(--cobbs-gradient);
  -webkit-text-fill-color: transparent;
  background-clip: initial;
  -webkit-background-clip: text;
}

.information-location {
  padding: 0 17px 22px 15px;
  font-size: 12vw;
  font-weight: 200;
  line-height: 100%;
  text-transform: uppercase;
  color: var(--cobbs-dark-beige);
}

.information-address {
  padding: 0 17px 36px 15px;
  font-family: 'TT Norms Pro';
  font-size: 2.5vw;
  font-weight: 500;
  line-height: 129%;
  text-align: justify;
  color: var(--cobbs-black);
}

.information-direction {
  padding: 0 17px 0 15px;
  font-family: 'TT Norms Pro';
  font-size: 3.5vw;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.91px;
  color: var(--cobbs-black);
  cursor: pointer;
}

.information-opening {
  padding: 59px 17px 36px 15px;
}

.information-contacts {
  padding: 0 17px 59px 15px;
}

.information-opening .information-headline,
.information-contacts .information-headline {
  padding: 0;
}

.information-opening>div:last-child,
.information-contacts>div:last-child {
  display: table;
  -webkit-border-horizontal-spacing: 0;
  -webkit-border-vertical-spacing: 17px;
  border-spacing: 0 17px;
}

.information-opening>div:last-child>div,
.information-contacts>div:last-child>div {
  display: table;  
}

.information-opening>div:last-child>div>div:first-child,
.information-contacts>div:last-child>div>div:first-child {
  display: table-row;
  font-family: 'TT Norms Pro';
  font-size: 3vw;
  font-weight: 500;
  line-height: 129%;
  text-align: justify;
  color: var(--cobbs-beige);
}

.information-opening>div:last-child>div>div:last-child,
.information-contacts>div:last-child>div>div:last-child {
  display: table-row;
  font-family: Conso;
  font-size: 6vw;
  font-weight: 700;
  line-height: 90%;
  text-align: justify;
  color: var(--cobbs-dark-beige);
  white-space: nowrap;
}

@media screen and (min-width: 1024px) {
  .main-find-us {
    min-height: 100vh;
    flex-direction: row;
  }

  .find-us-information {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .information-headline {
    padding: 98px 148px 17px 12%;
    font-size: 14px;
  }

  .information-location {
    padding: 0 148px 51px 12%;
    font-size: 6vw;
  }

  .information-address {
    padding: 0 148px 44px 12%;
    font-size: 18px;
  }

  .information-direction {
    padding: 0 148px 0 12%;
    font-size: 14px;
  }

  .information-opening {
    padding: 53px 148px 50px calc(12% - 11px);
  }

  .information-contacts {
    padding: 0 148px 98px calc(12% - 11px);
  }

  .information-opening .information-headline,
  .information-contacts .information-headline {
    padding-left: 11px;
  }

  .information-opening>div:last-child,
  .information-contacts>div:last-child {
    -webkit-border-horizontal-spacing: 11px;
    -webkit-border-vertical-spacing: 21px;
    border-spacing: 11px 21px;
  }

  .information-opening>div:last-child>div,
  .information-contacts>div:last-child>div {
    display: table-row;  
  }

  .information-opening>div:last-child>div>div:first-child,
  .information-contacts>div:last-child>div>div:first-child {
    padding-bottom: 3px;
    display: table-cell;
    vertical-align: middle;
    font-size: 12px;
  }

  .information-opening>div:last-child>div>div:last-child,
  .information-contacts>div:last-child>div>div:last-child {
    display: table-cell;
    font-size: 28px;
  }
}
</style>