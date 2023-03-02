<script setup lang="ts">
import { Ref, ref, toRefs, watch } from 'vue';
import { usePlayerStore } from '@/entities/Player/model/store/player';
import PlayerInfo from '@/features/Player/ui/PlayerInfo/PlayerInfo.vue';
import PlayerCover from '@/features/Player/ui/PlayerCover/PlayerCover.vue';
import PlayerControls from '@/features/Player/ui/PlayerControls/PlayerControls.vue';
import { useTracksStore } from '@/entities/TrackList/';
import PlayerBar from '@/features/Player/ui/PlayerBar/PlayerBar.vue';
import PlayerCurrent from '@/features/Player/ui/PlayerCurrent/PlayerCurrent.vue';
//TODO: decompose component to separate features
const trackStore = useTracksStore();
const playerStore = usePlayerStore();
const { setPrevActiveTrack, setNextActiveTrack, initActiveTrack } = playerStore;

const { activeTrack, activeTrackIsLoaded, isOnRepeat, volume } =
  toRefs(playerStore);

watch(trackStore, () => {
  if (trackStore.tracks.length > 0) {
    initActiveTrack();
  }
});

watch(volume, () => {
  if (!audioPlayer.value?.volume) return;
  audioPlayer.value.volume = volume.value;
});

const audioPlayer: Ref<HTMLAudioElement | null> = ref(null);
const isPlaying = ref(false);

const currentTrackTime = ref(0);
const currentTrackDuration = ref(0);

const togglePlayPause = () => {
  if (!audioPlayer.value) return;
  const { paused } = audioPlayer.value;
  paused ? audioPlayer.value?.play() : audioPlayer.value?.pause();
};

const onTimeUpdateListener = (event: Event) => {
  const target = event.target as HTMLAudioElement;
  currentTrackTime.value = target.currentTime;
  currentTrackDuration.value = target.duration;
};

let jusLoaded = true;

watch(activeTrack, () => {
  const player = audioPlayer.value;
  if (!player) return;

  player.load();
  currentTrackTime.value = player.currentTime;
  currentTrackDuration.value = player.duration;

  if (jusLoaded) {
    jusLoaded = false;
    return;
  }

  player.play();
});

const onCanPlayListener = (event: Event) => {
  const target = event.target as HTMLAudioElement;
  currentTrackDuration.value = target.duration;
};

const onEndedListener = () => {
  if (!isOnRepeat.value) {
    setNextActiveTrack(activeTrack.value.id);
  }
  const player = audioPlayer.value;
  if (!player) return;
  player.currentTime = 0;
  currentTrackTime.value = player.currentTime;
  player.play();
};
const setPlayerPosition = (value: number) => {
  if (!audioPlayer.value) return;
  audioPlayer.value.currentTime = value;
};
</script>
<template>
  <audio
    ref="audioPlayer"
    hidden
    preload="auto"
    controls
    @timeupdate="onTimeUpdateListener"
    @canplay="onCanPlayListener"
    @ended="onEndedListener"
    @playing="isPlaying = true"
    @pause="isPlaying = false"
  >
    <source :src="activeTrack.file" />
  </audio>
  <PlayerCover :cover="activeTrack?.Album?.cover" />
  <div class="bodyPlayer" />
  <PlayerBar
    v-if="activeTrackIsLoaded"
    :time="currentTrackTime"
    :duration="currentTrackDuration"
    @on-bar-click="setPlayerPosition"
  />
  <PlayerInfo
    v-if="activeTrackIsLoaded"
    :title="activeTrack.name"
    :artist="activeTrack?.Artist?.name"
    :current-track-time="currentTrackTime"
    :current-track-duration="currentTrackDuration"
  />
  <PlayerControls
    :disabled="!activeTrackIsLoaded"
    :is-playing="isPlaying"
    @on-play-pause="togglePlayPause"
    @on-select-prev="setPrevActiveTrack(activeTrack.id)"
    @on-select-next="setNextActiveTrack(activeTrack.id)"
  />
  <PlayerCurrent v-if="activeTrackIsLoaded" :title="activeTrack?.name" />
</template>

<style>
.bodyPlayer {
  position: absolute;
  top: 366px;
  left: 0;
  width: 366px;
  height: 286px;
  margin: 0;
  padding: 0;
  background: var(--primary-color);
  transition: all 0.3s ease-in;
}

.playlist-visible .bodyPlayer {
  top: 180px;
  left: 0;
  height: 470px;
  transition: all 0.3s ease-in;
}
</style>
