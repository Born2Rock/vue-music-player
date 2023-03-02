<script setup lang="ts">
import { ButtonSize } from './Types';
import Icon from '../Icon/Icon.vue';

interface ButtonProps {
  size: ButtonSize;
  autoWidth?: boolean;
  withIcon?: string | boolean;
  buttonTestId?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: ButtonSize.M,
  withIcon: false,
  buttonTestId: 'button',
});
</script>

<template>
  <button class="Button" :class="props.size" :data-testid="buttonTestId">
    <slot v-if="!withIcon" />
    <Icon v-else :icon="withIcon" :filled="false" />
  </button>
</template>

<style lang="scss" scoped>
@import 'Button.module';
</style>
