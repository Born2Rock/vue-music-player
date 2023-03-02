<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="current">
    {{ title }}
  </div>
</template>

<style scoped lang="scss">
.current {
  position: absolute;
  right: 23px;
  bottom: -60px;
  transition: all 0.3s ease-in;
  max-width: 225px;
  text-align: right;
  margin: 0;
  padding: 0;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 2.5px;
  font-weight: 700;
  color: #fff;
  z-index: 10;
}

.playlist-visible .current {
  bottom: 17px;
  transition: all 0.3s ease-in;
}
</style>
