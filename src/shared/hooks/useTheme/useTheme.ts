import { ref } from 'vue';
import { Themes } from '../../../features/ThemeSwitcher/model/types/types';

export const activeTheme = ref(Themes.DEFAULT);

export function toggleTheme() {
  activeTheme.value =
    activeTheme.value === Themes.DEFAULT ? Themes.LIGHT : Themes.DEFAULT;
}
