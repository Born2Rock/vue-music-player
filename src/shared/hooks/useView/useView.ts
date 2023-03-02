import { ref } from 'vue';

export const playlistIsShown = ref(false);

export function togglePlaylistView() {
  playlistIsShown.value = !playlistIsShown.value;
}
