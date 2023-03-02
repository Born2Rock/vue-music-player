<script setup lang="ts">
import { ref } from 'vue';
import FooterSwitch from '@/shared/ui/FooterSwitch/FooterSwitch.vue';
import { usePlayerStore } from '@/entities/Player/model/store/player';

const playerStore = usePlayerStore();
const { toggleOnRepeat } = playerStore;

const isOnRepeat = ref(false);
const toggleRepeatHandler = () => {
  isOnRepeat.value = !isOnRepeat.value;
  toggleOnRepeat();
};
</script>

<template>
  <FooterSwitch
    :icon="`repeat`"
    :is-active="isOnRepeat"
    :on-click="toggleRepeatHandler"
    test-id="footer-switch-repeat"
  />
</template>
