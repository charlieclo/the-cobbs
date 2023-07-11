<script setup>
defineProps({
  url: String
})
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="rsvp-button"
  >
    <div class="rsvp-text">
      <div>Click to</div>
      <div>RSVP</div>
    </div>
  </a>  
</template>

<style scoped>
.rsvp-button {
  width: 115.188px;
  height: 115.188px;
  border-radius: 333.5px;
  display: flex;
  justify-content: center;
  bottom: 31.63px;
  right: 15.63px;
  position: fixed;
  z-index: 96;
  background-image: url('@/assets/textures/table-halftone.png');
  background-position: 50%;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 6px 6px rgba(0, 0, 0, 0.30);
}

.rsvp-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  transform: rotate(-17.908deg);
}

.rsvp-text>div:first-child {
  font-size: 20px;
  font-weight: 300;
  line-height: 91.855%;
  text-align: center;
  color: var(--cobbs-dark-beige);
}

.rsvp-text>div:last-child {
  font-size: 43px;
  font-weight: 300;
  line-height: 91.855%;
  text-align: center;
  color: var(--cobbs-dark-beige);
}

@media screen and (min-width: 1024px) {
  .rsvp-button {
    width: 177.143px;
    height: 177.143px;
    bottom: 54.75px;
    right: 54.75px;
    transform: rotate(-34.102deg);
    transition: transform 1s;
  }

  .rsvp-button.no-rotate {
    transform: rotate(0);
  }

  .rsvp-text>div:first-child {
    font-size: 26px;
  }

  .rsvp-text>div:last-child {
    font-size: 68px;
  }
}
</style>