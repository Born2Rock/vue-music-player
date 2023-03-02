import { defineStore } from 'pinia';
import { ref, computed, toRefs } from 'vue';
import { Track } from '@/entities/Track';
import { useTracksStore } from '@/entities/TrackList/';

const NAMESPACE = 'player';

export const usePlayerStore = defineStore(NAMESPACE, () => {
  const activeTrack = ref({} as Track);
  const activeTrackIsLoaded = ref(false);

  const volume = ref(0.2);
  const isOnRepeat = ref(false);

  const tracksStore = useTracksStore();
  const { getAllTracks } = toRefs(tracksStore);
  const { getTrackById } = tracksStore;

  const getActiveTrack = computed(() => {
    return activeTrack.value;
  });

  const initActiveTrack = () => {
    const trackList = tracksStore.getAllTracks;
    if (trackList.length) {
      activeTrackIsLoaded.value = true;
      activeTrack.value = trackList[0];
    }
  };

  const setActiveTrack = (id: number | string) => {
    const foundTrack = getTrackById(id);
    if (foundTrack) {
      activeTrackIsLoaded.value = true;
      activeTrack.value = foundTrack;
    }
  };

  const setPrevActiveTrack = (currentTrackId: number | string) => {
    const trackList = getAllTracks.value;
    const lastTrackIdx = trackList.length - 1;
    const currentTrackIdx = trackList.findIndex((e) => e.id === currentTrackId);

    let prevTrackIdx;
    if (currentTrackIdx === 0) {
      prevTrackIdx = lastTrackIdx;
    } else if (currentTrackIdx === lastTrackIdx) {
      prevTrackIdx = lastTrackIdx - 1;
    } else {
      prevTrackIdx = currentTrackIdx - 1;
    }

    activeTrack.value = trackList[prevTrackIdx];
  };

  const setNextActiveTrack = (currentTrackId: number | string) => {
    const trackList = getAllTracks.value;
    const lastTrackIdx = trackList.length - 1;
    const currentTrackIdx = trackList.findIndex((e) => e.id === currentTrackId);

    let nextTrackIdx = currentTrackIdx + 1;
    if (currentTrackIdx === 0) nextTrackIdx = 1;
    if (currentTrackIdx === lastTrackIdx) nextTrackIdx = 0;
    try {
      activeTrack.value = trackList[nextTrackIdx];
    } catch (e) {
      console.log(e);
    }
  };

  const toggleOnRepeat = () => {
    isOnRepeat.value = !isOnRepeat.value;
  };

  return {
    initActiveTrack,
    activeTrackIsLoaded,
    isOnRepeat,
    activeTrack,
    getActiveTrack,
    setActiveTrack,
    setPrevActiveTrack,
    setNextActiveTrack,
    toggleOnRepeat,
    volume,
  };
});
