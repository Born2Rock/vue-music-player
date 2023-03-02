<script setup lang="ts">
import { ButtonSize } from '../Button/Types';
import Button from '../Button/Button.vue';
import Icon from '../Icon/Icon.vue';
import * as icons from '@/shared/assets/';

const props = withDefaults(
  defineProps<{
    onClick: () => void;
    icon: string;
    isActive?: boolean;
    testId?: string;
  }>(),
  {
    isActive: false,
  },
);

const clickHandler = () => {
  props.onClick();
};
</script>
<template>
  <Button
    class="footer__button"
    :size="ButtonSize.M"
    :button-test-id="testId"
    @click="clickHandler"
  >
    <icon class="filled" :class="{ accent: isActive }">
      <component :is="icons[icon]" />
    </icon>
  </Button>
</template>
