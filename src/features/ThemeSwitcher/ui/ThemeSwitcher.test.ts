import { render, fireEvent } from '@testing-library/vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import * as useTheme from '@/shared/hooks/useTheme/useTheme';
import { Themes } from '../model/types/types';

const spy = jest.spyOn(useTheme, 'toggleTheme');
test('should change toggleTheme ref', async () => {
  const { getByTestId } = render(ThemeSwitcher);
  const button = getByTestId('ThemeSwitcher');
  await fireEvent.click(button);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(useTheme.activeTheme.value).toBe(Themes.LIGHT);
});
