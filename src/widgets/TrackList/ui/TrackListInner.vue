<script setup lang="ts">
import { useTracksStore } from '@/entities/TrackList/';
import { onMounted, ref, toRefs } from 'vue';
import SegmentedButtons from '@/shared/ui/SegmentedButtons/SegmentedButtons.vue';
import { buttonValues } from '../model/consts/trackList';
import { Track, TrackItem } from '@/entities/Track';
import { favoriteButton } from '../model/types';
import { playlistIsShown } from '@/shared/hooks/useView/useView';
import Skeleton from '@/shared/ui/Skeleton/Skeleton.vue';

defineProps<{
  tracks: Track[];
}>();

const tracksStore = useTracksStore();

const { filterFavorites, isLoading } = toRefs(tracksStore);

const segmentedButtonHandler = (button: favoriteButton) => {
  filterFavorites.value = button.filterFavorites;
  buttonValues.value.map((b) => (b.isActive = b.key === button.key));
};

const observer = new IntersectionObserver(
  (entry) => {
    if (
      playlistIsShown.value &&
      entry[0].intersectionRatio === 1 &&
      entry[0].isIntersecting
    ) {
      tracksStore.fetchTracks();
    }
  },
  {
    rootMargin: '200px',
    threshold: 1,
  },
);

const observed = ref(null);

onMounted(() => {
  if (observed.value) {
    observer.observe(observed.value);
  }
});
</script>

<template>
  <div class="track-list" data-testid="track-list">
    <SegmentedButtons
      class="track-segmented-btns"
      :buttons="buttonValues"
      :button-test-id="`playlist-segmented-buttons`"
      @on-button-click="segmentedButtonHandler"
    />
    <track-item
      v-for="track in tracks"
      :id="+track.id"
      :key="track.id"
      :name="track.name"
      :artist="track.Artist"
      :duration="track.duration"
      :is-favorite="track.isFavorite"
    />
    <template v-if="isLoading">
      <Skeleton
        skeleton-test-id="track-item-skeleton"
        :margin="`0 0 4px 0`"
        :radius="`8px`"
      />
      <Skeleton
        skeleton-test-id="track-item-skeleton"
        :margin="`0 0 4px 0`"
        :radius="`8px`"
      />
      <Skeleton
        skeleton-test-id="track-item-skeleton"
        :margin="`0 0 4px 0`"
        :radius="`8px`"
      />
      <Skeleton
        skeleton-test-id="track-item-skeleton"
        :margin="`0 0 4px 0`"
        :radius="`8px`"
      />
    </template>
    <div
      v-show="!isLoading && !filterFavorites"
      ref="observed"
      class="observed"
    />
  </div>
</template>

<style lang="scss">
@import '@/widgets/TrackList/ui/TrackList.module.scss';
.observed {
  height: 5px;
  opacity: 0;
}
</style>
