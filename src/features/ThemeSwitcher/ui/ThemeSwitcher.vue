<script setup lang="ts">
import Button from '@/shared/ui/Button/Button.vue';
import { ButtonSize } from '@/shared/ui/Button/Types';
import { toggleTheme, activeTheme } from '@/shared/hooks/useTheme/useTheme';
import Icon from '@/shared/ui/Icon/Icon.vue';
</script>

<template>
  <Button
    class="ThemeSwitcher"
    :class="{
      active: Boolean(activeTheme),
    }"
    :size="ButtonSize.M"
    data-testid="theme-switcher"
    @click="toggleTheme"
  >
    <Icon :icon="`theme`" />
  </Button>
</template>

<style scoped lang="scss">
.ThemeSwitcher {
  position: absolute;
  top: 25px;
  right: 21px;
  z-index: 10;
  color: var(--primary-color);
  &:hover {
    color: var(--inverted-secondary-color);
  }
}
</style>
