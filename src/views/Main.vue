<script setup>
</script>

<template>
  <main class="main">
    <slot name="header" />
    <slot name="hero" />
    <div class="main-content">
      <slot name="content" />
    </div>
  </main>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100vh; /* 100% */
  overflow: hidden;
  position: relative;
}

.main-content {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
}

.main-content::-webkit-scrollbar {
  display: none;
}
</style>
