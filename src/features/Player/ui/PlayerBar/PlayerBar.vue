<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  time: number;
  duration: number;
}>();

const emit = defineEmits<{
  (e: 'onBarClick', currentTime: number): void;
}>();

const playBarPercent = computed(() => {
  return props.time / (props.duration / 100);
});

interface clickEvent extends Event {
  offsetX: number;
  target: HTMLAudioElement;
}

const barClickListener = (event: clickEvent) => {
  const trackPercentage = event.offsetX / (event.target.offsetWidth / 100);
  const trackTimeToSet = props.duration * (trackPercentage / 100);
  emit('onBarClick', trackTimeToSet);
};
</script>

<template>
  <div class="player-bar" @click="barClickListener">
    <div class="player-bar__pointer" :style="`width:${playBarPercent}%`" />
  </div>
</template>

<style scoped lang="scss">
.playlist-visible .player-bar {
  top: 143px;
  left: 126px;
  right: 23px;
  z-index: 10;
}
.player-bar {
  cursor: pointer;
  position: absolute;
  top: 404px;
  left: 23px;
  right: 23px;
  height: 6px;
  padding: 2px 0;
  background: #888888;
  border-radius: 2px;

  &__pointer {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 30%;
    background: #eee;
    pointer-events: none;
  }
}
</style>
