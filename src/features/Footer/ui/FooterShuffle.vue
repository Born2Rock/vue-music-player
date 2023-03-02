<script setup lang="ts">
import { ref } from 'vue';
import { useTracksStore } from '@/entities/TrackList';
import FooterSwitch from '@/shared/ui/FooterSwitch/FooterSwitch.vue';

const trackStore = useTracksStore();
const { shuffleTracks } = trackStore;

const isShuffled = ref(false);

const shuffleHandler = () => {
  isShuffled.value = true;
  shuffleTracks();
};
</script>

<template>
  <FooterSwitch
    :icon="`shuffle`"
    :is-active="isShuffled"
    :on-click="shuffleHandler"
    test-id="footer-switch-shuffle"
  />
</template>
