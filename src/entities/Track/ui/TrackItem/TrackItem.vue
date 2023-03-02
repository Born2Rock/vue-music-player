<script setup lang="ts">
import Button from '@/shared/ui/Button/Button.vue';
import Icon from '@/shared/ui/Icon/Icon.vue';
import { ButtonSize } from '@/shared/ui/Button/Types';
import { Artist as ArtistType } from '../../model/types/types';
import { computed, toRefs } from 'vue';
import Heart from '@/shared/assets/icons/heart.svg';
// TODO: REFACTOR FSD
import { useTracksStore } from '@/entities/TrackList/';
import { usePlayerStore } from '@/entities/Player/model/store/player';
import { playlistIsShown } from '@/shared/hooks/useView/useView';

const { toggleIsFavorite } = useTracksStore();
const playerStore = usePlayerStore();
const { setActiveTrack } = playerStore;

type TrackItemProps = {
  id: number;
  name: string;
  duration: string;
  isFavorite: boolean;
  // eslint-disable-next-line vue/prop-name-casing
  Artist: ArtistType;
};

const props = defineProps<TrackItemProps>();

const { id, name, duration, isFavorite } = toRefs(props);

const trackClickHandler = (id: string | number) => {
  setActiveTrack(id);
  playlistIsShown.value = false;
};

const isActive = computed(() => id.value == playerStore.activeTrack.id);
</script>

<template>
  <div
    class="track-item"
    :class="{ active: isActive }"
    data-testid="track-item"
    @click="trackClickHandler(id)"
  >
    <div class="number">
      <span>{{ id }}</span>
    </div>
    <div class="title">
      <span v-if="Artist?.name">{{ Artist.name }} - </span>
      <span data-testid="track-item-name">{{ name }}</span>
    </div>
    <div class="length">
      <span>{{ duration }}</span>
    </div>
    <div class="like" @click.stop="toggleIsFavorite(id)">
      <Button :size="ButtonSize.M" button-test-id="track-item-like-button">
        <Icon :active="isFavorite" stroked icon-test-id="track-item-like-icon">
          <Heart />
        </Icon>
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'TrackItem.module';
</style>
