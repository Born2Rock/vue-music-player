import { playlistIsShown, togglePlaylistView } from './useView';

describe('useView', () => {
  test('playlist show initial value', () => {
    expect(playlistIsShown.value).toBe(false);
  });
  test('playlist show has been toggled once to open playlist', () => {
    togglePlaylistView();
    expect(playlistIsShown.value).toBe(true);
  });
  test('playlist show has been toggled once again to hide playlist', () => {
    togglePlaylistView();
    expect(playlistIsShown.value).toBe(false);
  });
});
