import { useTracksStore } from './tracks';
import { createPinia, setActivePinia } from 'pinia';

describe('store tests', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  const expectingFirstElement = {
    __typename: 'Track',
    id: '1',
    name: 'Watch Me Bust',
    file: 'https://geo-samples.beatport.com/track/04f505f2-f2c2-44a6-af50-27c36e97a209.LOFI.mp3',
    duration: '1:22:38',
    isFavorite: false,
    Artist: { __typename: 'Artist', id: '1', name: 'Krafty Kuts' },
    Album: {
      __typename: 'Album',
      id: '1',
      name: 'Watch Me Bust Original Mix',
      cover:
        'https://geo-media.beatport.com/image_size/1400x1400/c9f17d81-5761-4714-804b-3a6fcace2dcc.jpg',
    },
  };

  test('check favorites functional', async () => {
    const trackStore = useTracksStore();
    await trackStore.fetchTracks();

    await new Promise<void>((resolve) => {
      setTimeout(resolve, 600); // !!! Synthetic delay in query callback to show preloaders
    });

    await trackStore.toggleIsFavorite('1');
    await trackStore.toggleIsFavorite('2');
    await trackStore.toggleIsFavorite('3');

    expect(trackStore.getTrackById('1')?.isFavorite).toBe(true);
    expect(trackStore.getTrackById('2')?.isFavorite).toBe(false);
    expect(trackStore.getTrackById('3')?.isFavorite).toBe(true);
  });
});
