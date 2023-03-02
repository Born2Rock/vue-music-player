<script setup lang="ts">
import { ButtonSize } from '@/shared/ui/Button/Types';
import Button from '@/shared/ui/Button/Button.vue';
import Icon from '@/shared/ui/Icon/Icon.vue';
import shuffle from '@/shared/assets/icons/shuffle.svg';
import { ref } from 'vue';
const isShuffled = ref(false);

const emit = defineEmits<{
  (e: 'onShuffle'): void;
}>();

const shuffleHandler = () => {
  isShuffled.value = true;
  emit('onShuffle');
};
</script>
<template>
  <Button class="footer__button" :size="ButtonSize.M" @click="shuffleHandler">
    <icon class="filled" :class="{ accent: isShuffled }">
      <shuffle />
    </icon>
  </Button>
</template>
