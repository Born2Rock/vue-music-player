import { activeTheme, toggleTheme } from './useTheme';
import { Themes } from '@/features/ThemeSwitcher/model/types/types';

describe('useThme', () => {
  test('theme initial value', () => {
    expect(activeTheme.value).toBe(Themes.DEFAULT);
  });
  test('theme has been toggled once to be light', () => {
    toggleTheme();
    expect(activeTheme.value).toBe(Themes.LIGHT);
  });
  test('theme has been toggled back to default dark', () => {
    toggleTheme();
    expect(activeTheme.value).toBe(Themes.DEFAULT);
  });
});
