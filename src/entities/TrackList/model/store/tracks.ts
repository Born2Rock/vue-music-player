import { defineStore } from 'pinia';
import fetch from 'cross-fetch';

import gql from 'graphql-tag';
import {
  provideApolloClient,
  useApolloClient,
  useMutation,
  useQuery,
} from '@vue/apollo-composable';
import { Track } from '@/entities/Track';
import { computed, ref } from 'vue';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';

const httpLink = createHttpLink({
  uri: __API__,
  useGETForQueries: false,
  ...(__PROJECT__ === 'jest' ? { fetch } : {}),
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

provideApolloClient(apolloClient);

const NAMESPACE = 'tracks';

export const useTracksStore = defineStore(NAMESPACE, () => {
  const isLoading = ref(false);
  const hasError = ref(false);
  const tracks = ref([] as Track[]);
  const filterFavorites = ref(false);

  const getTrackById = (id: number | string): Track | undefined => {
    return tracks.value.find((t) => t.id == id);
  };

  const getAllTracks = computed((): Track[] => {
    if (filterFavorites.value) {
      return tracks.value.filter((el: Track) => el.isFavorite);
    }
    return tracks.value;
  });

  const getFavoriteTracks = computed((): Track[] => {
    return tracks.value.filter((el: Track) => el.isFavorite);
  });

  const shuffleTracks = (): void => {
    tracks.value.sort(() => Math.random() - 0.5);
  };

  const toggleIsFavorite = async (id: number | string) => {
    const track = tracks.value.find((track) => track.id == id);
    if (!track) return;
    const { isFavorite } = track;
    track.isFavorite = !isFavorite;
    await updateIsFavorite(id, !isFavorite);
  };

  const tracksPerPage = 8;
  let totalTracks = 0;
  let totalPages = 0;
  let currentPage = 0;

  const fillPaginationMetadata = async () => {
    const { resolveClient } = useApolloClient();
    const client = resolveClient();
    const query = gql`
      query {
        _allTracksMeta {
          count
        }
      }
    `;

    const { data } = await client.query({
      query,
    });

    if (data?._allTracksMeta?.count) {
      totalTracks = data?._allTracksMeta?.count;
      totalPages = Math.ceil(totalTracks / tracksPerPage);
    }
  };

  const fetchTracks = async () => {
    if (filterFavorites.value) return;
    isLoading.value = true;

    if (!totalTracks) {
      await fillPaginationMetadata();
    }

    if (currentPage >= totalPages) {
      isLoading.value = false;
      return;
    }

    const query = gql`
      query allTracks($page: Int, $perPage: Int) {
        allTracks(page: $page, perPage: $perPage) {
          id
          name
          file
          duration
          isFavorite
          Artist {
            id
            name
          }
          Album {
            id
            name
            cover
          }
        }
      }
    `;

    const variables = {
      page: currentPage,
      perPage: tracksPerPage,
    };

    const { onResult, onError } = useQuery(query, variables, {
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first',
    });

    onResult((result) => {
      const { data } = result;
      setTimeout(() => {
        console.info('got pack of tracks');
        isLoading.value = false;
        if (!data?.allTracks) return;
        tracks.value = [
          ...tracks.value,
          ...JSON.parse(JSON.stringify(data.allTracks)),
        ];
      }, 500);
      currentPage++;
    });

    onError(() => {
      //TODO: UI error notation
      console.error('cant load tracks');
    });
  };

  //TODO: decompose mutations and queries to separate api segments
  const updateIsFavorite = async (id: string | number, isFavorite: boolean) => {
    const query = gql`
      mutation updateTrack($id: ID!, $isFavorite: Boolean!) {
        updateTrack(id: $id, isFavorite: $isFavorite) {
          id
        }
      }
    `;

    const variables = {
      id,
      isFavorite,
    };

    const mutation = useMutation(query, {
      variables,
      refetchQueries: [],
    });

    await mutation.mutate();
  };

  return {
    isLoading,
    hasError,
    filterFavorites,
    tracks,
    getTrackById,
    getAllTracks,
    getFavoriteTracks,
    shuffleTracks,
    toggleIsFavorite,
    fetchTracks,
    tracksPerPage,
  };
});
