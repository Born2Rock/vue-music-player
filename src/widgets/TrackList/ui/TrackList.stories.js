import TrackListInner from './TrackListInner.vue';
import '@/app/styles/index.scss';
//import '@/pages/mainPage/ui/MainPage.module.scss';
//import '@/pages/mainPage/ui/MainPage.module.scss';

const mockedTracks = [
  {
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
  },
  {
    id: '2',
    name: '303',
    file: 'https://geo-samples.beatport.com/track/21a8d8e5-49ad-4090-b349-204ad79a8b03.LOFI.mp3',
    duration: '1:22:39',
    isFavorite: true,
    Artist: { __typename: 'Artist', id: '2', name: 'Hankook' },
    Album: {
      __typename: 'Album',
      id: '2',
      name: '303 Original Mix',
      cover:
        'https://geo-media.beatport.com/image_size/1400x1400/567820fa-c35f-44b9-82d5-28810502393a.jpg',
    },
  },
  {
    id: '3',
    name: 'Purpura',
    file: 'https://geo-samples.beatport.com/track/1782b9c7-fa59-4006-8a70-476ce90cdfd7.LOFI.mp3',
    duration: '1:22:40',
    isFavorite: false,
    Artist: { __typename: 'Artist', id: '3', name: 'Nosk' },
    Album: {
      __typename: 'Album',
      id: '3',
      name: 'Purpura Original Mix',
      cover:
        'https://geo-media.beatport.com/image_size/1400x1400/cd5847ef-3f54-4141-8415-715721059ddb.jpg',
    },
  },
  {
    id: '4',
    name: 'Sweet Revenge',
    file: 'https://geo-samples.beatport.com/track/25481e33-a6fe-4d89-a8a4-7a55a08ff3d5.LOFI.mp3',
    duration: '1:22:41',
    isFavorite: false,
    Artist: { __typename: 'Artist', id: '4', name: 'Nosk' },
    Album: {
      __typename: 'Album',
      id: '4',
      name: 'Sweet Revenge Original Mix',
      cover:
        'https://geo-media.beatport.com/image_size/1400x1400/59aab12a-4286-4d26-801a-64f751557cdf.jpg',
    },
  },
  {
    id: '5',
    name: 'Street Knowledge',
    file: 'https://geo-samples.beatport.com/track/f1bb35ef-b7c6-467d-a745-2aa52e433fec.LOFI.mp3',
    duration: '1:22:42',
    isFavorite: true,
    Artist: { __typename: 'Artist', id: '5', name: 'Dismantle' },
    Album: {
      __typename: 'Album',
      id: '5',
      name: 'Street Knowledge Original Mix',
      cover:
        'https://geo-media.beatport.com/image_size/1400x1400/23b0b76b-e2bd-4c1d-958f-23aa0365f1ee.jpg',
    },
  },
  {
    id: '6',
    name: 'Passion',
    file: 'https://geo-samples.beatport.com/track/14e12a32-9c07-47df-97ba-4ff081731ad2.LOFI.mp3',
    duration: '1:22:43',
    isFavorite: false,
    Artist: { __typename: 'Artist', id: '6', name: 'Brothers Of Funk' },
    Album: {
      __typename: 'Album',
      id: '6',
      name: 'Passion Brothers Of Funk VS Analog Hustlers Remix',
      cover:
        'https://geo-media.beatport.com/image_size/1400x1400/c511d453-e819-4c4b-9394-233148533396.jpg',
    },
  },
  {
    id: '7',
    name: 'Rowdy',
    file: 'https://geo-samples.beatport.com/track/a79d8b59-ebb6-4963-94be-5b9797e11db4.LOFI.mp3',
    duration: '1:22:44',
    isFavorite: false,
    Artist: { __typename: 'Artist', id: '7', name: 'Ondamike' },
    Album: {
      __typename: 'Album',
      id: '7',
      name: 'Rowdy Original Mix',
      cover:
        'https://geo-media.beatport.com/image_size/1400x1400/53a26e15-97ab-4fc2-96af-44ed8eaafdf5.jpg',
    },
  },
  {
    id: '8',
    name: 'Fox & Furkin',
    file: 'https://geo-samples.beatport.com/track/5f3307a7-b681-4a25-8c67-7f27fa21c9c6.LOFI.mp3',
    duration: '1:22:45',
    isFavorite: true,
    Artist: { __typename: 'Artist', id: '8', name: 'Deekline' },
    Album: {
      __typename: 'Album',
      id: '8',
      name: 'Fox & Furkin Original Mix',
      cover:
        'https://geo-media.beatport.com/image_size/1400x1400/600833b3-f6fb-41a9-ae08-7437d63477a0.jpg',
    },
  },
];

export default {
  title: 'widgets/TrackList',
  component: TrackListInner,
  decorators: [
    (story) => {
      return {
        components: { story },
        template: `
          <div class="player playlist-visible">
          <story/>
          </div>`,
      };
    },
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args) => ({
  components: { TrackListInner },
  setup() {
    return { args };
  },
  template: '<TrackListInner v-bind="args" />',
});

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Primary.args = {
  tracks: mockedTracks,
};
Secondary.args = {
  tracks: mockedTracks,
};
Secondary.decorators = [
  (story) => {
    return {
      components: { story },
      template: `
        <div class="app_light_theme">
        <story style="bottom:0"/>
        </div>`,
    };
  },
];
