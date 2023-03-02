<script setup lang="ts">
import { toRefs } from 'vue';

type Button = {
  key: number | string;
  label: string;
  isActive?: boolean;
};

const props = defineProps<{
  buttons: Button[];
  buttonTestId?: string;
}>();

const { buttons } = toRefs(props);

const emit = defineEmits<{
  (e: 'onButtonClick', button: Button): void;
}>();

const buttonClickHandler = (button: Button) => {
  emit('onButtonClick', button);
};
</script>

<template>
  <div class="segmented">
    <button
      v-for="button in buttons"
      :key="button.key"
      class="button"
      :class="{ active: button.isActive }"
      :data-testid="buttonTestId"
      @click="buttonClickHandler(button)"
    >
      {{ button.label }}
    </button>
  </div>
</template>

<style scoped>
.segmented {
  width: 100%;
  height: 32px;
  padding: 3px;
  line-height: 26px;
  background: var(--secodary-color);
  border-radius: 4px;
  display: flex;
  justify-content: stretch;
  gap: 4px;
}
.button {
  width: 100%;
  display: block;
  border: 0;
  background: transparent;
  text-align: center;
  line-height: inherit;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  color: var(--inverted-primary-color);
}
.active {
  background: var(--inverted-secondary-color);
  //color: var(--secodary-color);
}
</style>
