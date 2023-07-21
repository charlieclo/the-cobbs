<script setup>
</script>

<template>
  <div class="loading">
    <img src="@/assets/icons/logo.svg" type="image/png" />
  </div>
</template>

<style scoped>
.loading {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--cobbs-dark-beige);
}

.loading>img {
  animation: shine 3s linear infinite;
}

@keyframes shine {
  0% {
    -webkit-mask-image: linear-gradient(90deg,#000 25%,rgba(0,0,0,.2) 50%,#000 75%);
    mask-image: linear-gradient(90deg,#000 25%,rgba(0,0,0,.2) 50%,#000 75%);
    -webkit-mask-size: 1000%;
    mask-size: 1000%;
    -webkit-mask-position: 0;
    mask-position: 0;
  }
  100% {
    transition: mask-position 2s ease,-webkit-mask-position 2s ease;
    -webkit-mask-position: 150%;
    mask-position: 150%;
    opacity: 1;
  }
}

@media screen and (max-width: 292px) {
  .loading>img {
    width: 90%;
  }
}
</style>