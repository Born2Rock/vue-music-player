<script setup lang="ts">
import FooterVolume from '@/features/Footer/ui/FooterVolume.vue';
import FooterRepeat from '@/features/Footer/ui/FooterRepeat.vue';
import FooterShuffle from '@/features/Footer/ui/FooterShuffle.vue';
import FooterFavorite from '@/features/Footer/ui/FooterFavorite.vue';
</script>
<template>
  <div class="footer" data-testid="footer">
    <div class="footer__cell">
      <FooterFavorite />
    </div>
    <div class="footer__cell">
      <FooterShuffle />
    </div>
    <div class="footer__cell">
      <FooterRepeat />
    </div>
    <div class="footer__cell">
      <FooterVolume />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './Footer.module';
</style>
