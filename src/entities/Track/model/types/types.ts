export type Artist = {
  id: number | string;
  name: string;
};

export type Album = {
  id: number | string;
  name: string;
  cover: string;
};

export type Track = {
  id: number | string;
  name: string;
  duration: string;
  file: string;
  isFavorite: boolean;
  Artist: Artist;
  Album: Album;
};
