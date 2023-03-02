<script setup lang="ts">
import Icon from '@/shared/ui/Icon/Icon.vue';

defineProps<{
  cover?: string | undefined;
}>();
</script>
<template>
  <div
    v-if="cover"
    class="player__cover"
    :style="`background-image: url('${cover}')`"
  />
  <div v-else class="player__cover player__cover--loading">
    <icon
      class="player__preloader"
      data-testid="player-preloader"
      :icon="`preloader`"
    />
  </div>
</template>

<style scoped lang="scss">
.player {
  &__cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 366px;
    height: 366px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.3s ease-in;
    transform-origin: 0% 0%;

    &--loading {
      background: #1ea7fd;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url('@/shared/assets/images/space.jpg');
    }
  }
  &__preloader {
    max-width: 50%;
    max-height: 50%;
  }
}

.playlist-visible .player {
  &__cover {
    top: 60px;
    left: 23px;
    border-radius: 20px;
    transition: all 0.3s ease-in;
    transform: scale(0.251, 0.251);
  }
}
</style>
