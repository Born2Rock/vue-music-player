import { render, fireEvent } from '@testing-library/vue';
import ViewSwitcher from './ViewSwitcher.vue';
import * as useView from '@/shared/hooks/useView/useView';

const spy = jest.spyOn(useView, 'togglePlaylistView');
test('should change toggleTheme ref', async () => {
  const { getByTestId } = render(ViewSwitcher);
  const button = getByTestId('ViewSwitcher');
  await fireEvent.click(button);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(useView.playlistIsShown.value).toBe(true);
});
