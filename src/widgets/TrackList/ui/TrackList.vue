<script setup lang="ts">
import { useTracksStore } from '@/entities/TrackList/';
import TrackListInner from './TrackListInner.vue';

const tracksStore = useTracksStore();
tracksStore.fetchTracks();
</script>

<template>
  <TrackListInner :tracks="tracksStore.getAllTracks" />
</template>
