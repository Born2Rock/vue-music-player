<script setup lang="ts">
import Button from '@/shared/ui/Button/Button.vue';
import { burger as Burger } from '@/shared/assets';
import { ButtonSize } from '@/shared/ui/Button/Types';
import Icon from '@/shared/ui/Icon/Icon.vue';
import { togglePlaylistView } from '@/shared/hooks/useView/useView';
</script>

<template>
  <Button
    class="ViewSwitcher"
    :size="ButtonSize.M"
    data-testid="view-switcher"
    @click="togglePlaylistView"
  >
    <icon>
      <Burger class="burger" />
    </icon>
  </Button>
</template>

<style scoped>
.ViewSwitcher {
  position: absolute;
  top: 23px;
  left: 23px;
  z-index: 10;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in;
}
.burger {
  fill: var(--inverted-secondary-color);
}
.ViewSwitcher.active .burger {
  fill: var(--accent-color);
}
</style>
