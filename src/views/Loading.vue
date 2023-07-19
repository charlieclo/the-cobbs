<script setup>
</script>

<template>
  <div class="loading">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  border: 8px solid var(--cobbs-grey);
  border-top: 8px solid var(--cobbs-gold);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media screen and (min-width: 1024px) {
  .loader {
    border: 16px solid var(--cobbs-grey);
    border-top: 16px solid var(--cobbs-gold);
  }
}
</style>