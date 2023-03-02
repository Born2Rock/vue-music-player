import { defineAsyncComponent } from 'vue';

export const AsyncTrackList = defineAsyncComponent(
  () => import('./TrackList.vue'),
);
