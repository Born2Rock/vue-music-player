import { ref } from 'vue';

export const buttonValues = ref([
  {
    key: 0,
    filterFavorites: false,
    label: 'All Tracks',
    isActive: true,
  },
  {
    key: 1,
    filterFavorites: true,
    label: 'Favorite',
    isActive: false,
  },
]);
