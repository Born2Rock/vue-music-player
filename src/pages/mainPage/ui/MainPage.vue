<script setup lang="ts">
import { Player } from '@/widgets/Player/index.ts';
import { Footer } from '@/widgets/Footer/';
import ThemeSwitcher from '@/features/ThemeSwitcher';
import { TrackList } from '@/widgets/TrackList';

import { playlistIsShown } from '@/shared/hooks/useView/useView';
import ViewSwitcher from '@/features/ViewSwitcher/ui/ViewSwitcher.vue';
</script>

<template>
  <main
    class="player"
    :class="{ 'playlist-visible': playlistIsShown }"
    data-testid="player"
  >
    <view-switcher :class="{ active: playlistIsShown }" />
    <theme-switcher />
    <player />
    <track-list class="track-list" />
    <div class="shadow" />
    <Footer />
  </main>
</template>

<style lang="scss">
@import 'MainPage.module';
</style>
