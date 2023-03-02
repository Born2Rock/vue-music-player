<script setup lang="ts">
import { ButtonSize } from '@/shared/ui/Button/Types';
import Button from '@/shared/ui/Button/Button.vue';
import Icon from '@/shared/ui/Icon/Icon.vue';
import repeat from '@/shared/assets/icons/repeat.svg';
import { ref } from 'vue';
const isOnRepeat = ref(false);
</script>
<template>
  <Button
    class="footer__button"
    :size="ButtonSize.M"
    @click="isOnRepeat = !isOnRepeat"
  >
    <icon class="filled" :class="{ accent: isOnRepeat }">
      <repeat />
    </icon>
  </Button>
</template>
