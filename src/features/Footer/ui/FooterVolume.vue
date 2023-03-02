<script setup lang="ts">
import { ref } from 'vue';
import { usePlayerStore } from '@/entities/Player/model/store/player';
import FooterSwitch from '@/shared/ui/FooterSwitch/FooterSwitch.vue';
const volumeSliderShown = ref(false);
const playerStore = usePlayerStore();
</script>

<template>
  <div v-show="volumeSliderShown" class="footer-volume">
    <input
      v-show="volumeSliderShown"
      v-model="playerStore.volume"
      class="footer-volume--slider"
      type="range"
      name="volume"
      min="0.05"
      max="1"
      step="0.05"
    />
  </div>
  <FooterSwitch
    :icon="`volume`"
    @click="volumeSliderShown = !volumeSliderShown"
  />
</template>

<style scoped lang="scss">
.footer-volume {
  position: relative;
  &--slider {
    position: absolute;
    left: 9px;
    bottom: 15px;
    transform: rotate(-90deg);
    transform-origin: left bottom;
    -webkit-appearance: none;
  }
  &--slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid var(--primary-color);
    height: 12px;
    width: 12px;
    display: block;
    border-radius: 2px;
    background: var(--accent-color);
    color: var(--accent-color);
    cursor: pointer;
    margin-top: -4px;
  }
  &--slider::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: transparent;
    background: var(--inverted-primary-color);
    border-radius: 1.3px;
    border: transparent;
  }
}
</style>
