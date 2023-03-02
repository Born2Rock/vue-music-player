<script setup lang="ts">
import Button from '@/shared/ui/Button/Button.vue';
import { ButtonSize } from '@/shared/ui/Button/Types';

withDefaults(
  defineProps<{
    isPlaying?: boolean;
    large?: boolean;
    disabled?: boolean;
  }>(),
  {
    isPlaying: false,
    large: true,
    disabled: true,
  },
);
defineEmits<{
  (e: 'onPlayPause'): void;
  (e: 'onSelectPrev'): void;
  (e: 'onSelectNext'): void;
}>();
</script>
<template>
  <template v-if="large">
    <div class="player-controls">
      <Button
        :disabled="disabled"
        class="player-button"
        :size="ButtonSize.XL"
        :with-icon="`fastbackward`"
        @click.stop.prevent="$emit('onSelectPrev')"
      />
      <Button
        :disabled="disabled"
        class="player-button"
        :size="ButtonSize.XL"
        :with-icon="isPlaying ? 'pause' : 'play'"
        @click.stop.prevent="$emit('onPlayPause')"
      />
      <Button
        :disabled="disabled"
        class="player-button"
        :size="ButtonSize.XL"
        :with-icon="`fastforward`"
        @click.stop.prevent="$emit('onSelectNext')"
      />
    </div>
  </template>
</template>

<style scoped lang="scss">
.player {
  &-controls {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 80px;
    left: 48%;
    z-index: 10;
    width: 216px;
    height: auto;
    border-spacing: 0;
    background: none;
    color: var(--inverted-primary-color);
    transition: all 0.3s ease-in;
    transform: translate(-50%, 0);
  }
  &-button {
    fill: var(--inverted-primary-color) !important;
  }
  &-button:hover {
    fill: var(--inverted-secondary-color) !important;
  }
}

.playlist-visible .player-controls {
  bottom: 4px;
  left: -44px;
  transition: all 0.3s ease-in;
  transform: scale(0.45, 0.45);
}
</style>
