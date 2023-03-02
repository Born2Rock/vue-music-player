<script setup lang="ts">
import * as icons from '@/shared/assets/';
defineProps<{
  stroked?: boolean;
  active?: boolean;
  filled?: boolean;
  accent?: boolean;
  icon?: string;
  iconTestId?: string;
}>();
</script>

<template>
  <div
    class="icon"
    :class="{
      stroked: stroked,
      filled: filled,
      'is-active': active,
      accent: accent,
    }"
    :data-testid="iconTestId || 'icon'"
  >
    <component :is="icons[icon]" v-if="icon" class="svg-component" />
    <slot v-else />
  </div>
</template>

<style scoped>
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.stroked {
  stroke: var(--inverted-primary-color);
}

:slotted(svg),
.svg-component {
  width: 100%;
  height: 100%;
  //stroke: var(--inverted-primary-color);
  //fill: transparent;
  transition: fill 0.2s ease-in-out;
}

.is-active :slotted(svg),
.is-active .svg-component {
  fill: var(--inverted-primary-color);
}

.filled :slotted(svg),
.filled .svg-component {
  stroke: var(--inverted-secondary-color);
  fill: var(--inverted-secondary-color);
  transition: fill 0.2s ease-in-out;
}
.filled:hover :slotted(svg),
.filled:hover .svg-component {
  stroke: var(--inverted-primary-color);
  fill: var(--inverted-primary-color);
}

.accent :slotted(svg),
.accent .svg-component {
  stroke: var(--accent-color);
  fill: var(--accent-color);
}
.accent:hover :slotted(svg),
.accent:hover .svg-component {
  opacity: 0.8;
  stroke: var(--accent-color);
  fill: var(--accent-color);
}
</style>
