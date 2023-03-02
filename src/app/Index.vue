<script setup lang="ts">
import MainPage from '@/pages/mainPage/';
import { activeTheme } from '@/shared/hooks/useTheme/useTheme';
</script>

<template>
  <div class="page-wrap" :class="activeTheme" data-testid="page">
    <MainPage />
  </div>
</template>

<style lang="scss">
@import './styles/index';
</style>
