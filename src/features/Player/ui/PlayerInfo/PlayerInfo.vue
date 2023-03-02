<script setup lang="ts">
interface props {
  title?: string;
  artist?: string;
  currentTrackTime?: number;
  currentTrackDuration?: number;
}

defineProps<props>();

const formatTimeString = (seconds: number) => {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(Math.floor(seconds % 60)).padStart(2, '0');
  return min + ':' + sec;
};
</script>

<template>
  <div class="info">
    <div class="info__timer">
      <span class="info__current">{{
        formatTimeString(currentTrackTime)
      }}</span>
      /
      <span class="info__duration">{{
        formatTimeString(currentTrackDuration)
      }}</span>
    </div>
    <div v-if="title" class="info__title" data-testid="track-info-title">
      {{ title }}
    </div>
    <div v-if="artist" class="info__subtitle">
      {{ artist }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  position: absolute;
  top: 440px;
  left: 80px;
  right: 80px;
  transition: all 0.3s ease-in;

  &__timer {
    display: block;
    text-align: center;
    color: var(--inverted-secondary-color);
  }

  &__title {
    margin-bottom: 5px;
    text-align: center;
    padding: 0;
    color: var(--inverted-primary-color);
    font-weight: 700;
    font-size: 14px;
    line-height: 1.3;
  }
  &__subtitle {
    margin: 0;
    padding: 0;
    text-align: center;
    color: var(--inverted-secondary-color);
    font-weight: 400;
    font-size: 11px;
    line-height: 11px;
  }
}
.playlist-visible .info {
  top: 57px;
  left: 126px;
  text-align: left;
  transition: all 0.3s ease-in;

  &__timer {
    text-align: left;
    font-size: 12px;
    margin-bottom: 2px;
  }

  &__title {
    margin-left: 0;
    font-size: 16px;
    color: var(--primary-color);
    transition: all 0.3s ease-in;
    text-align: left;
  }
  &__subtitle {
    text-align: left;
  }
}
</style>
