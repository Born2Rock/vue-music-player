<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    width?: number | string;
    height?: number | string;
    radius?: number | string;
    margin?: number | string;
    skeletonTestId?: string;
  }>(),
  {
    width: '100%',
    height: '50px',
    radius: '16px',
    margin: '0 0 10px 0',
    skeletonTestId: 'skeleton',
  },
);
</script>

<template>
  <div
    class="skeleton"
    :data-testid="skeletonTestId"
    :style="`width: ${props.width}; height: ${props.height}; border-radius: ${radius}; margin: ${props.margin}`"
  />
</template>

<style scoped lang="scss">
.skeleton {
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: var(--inverted-secondary-color);

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 1s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
