<script setup lang="ts">
import FooterSwitch from '@/shared/ui/FooterSwitch/FooterSwitch.vue';
import { useTracksStore } from '@/entities/TrackList';
import { usePlayerStore } from '@/entities/Player/model/store/player';
import { computed } from 'vue';

const trackStore = useTracksStore();
const { toggleIsFavorite } = trackStore;

const playerStore = usePlayerStore();

const isFavorite = computed(() => {
  const activeTrackId = playerStore.activeTrack?.id;
  return trackStore.getTrackById(activeTrackId)?.isFavorite || false;
});

const toggleFavoriteHandler = () => {
  toggleIsFavorite(playerStore.activeTrack?.id);
};
</script>

<template>
  <FooterSwitch
    :icon="`heart`"
    :is-active="isFavorite"
    :on-click="toggleFavoriteHandler"
    test-id="footer-switch-favorite"
  />
</template>
