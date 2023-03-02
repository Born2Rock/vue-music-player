import Shuffle from './Shuffle.vue';
import '@/app/styles/index.scss';

export default {
  title: 'features/Shuffle',
  component: Shuffle,
  decorators: [],
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
  components: { Shuffle },
  setup() {
    return { args };
  },
  template: '<Shuffle v-bind="args" />',
});

export const Primary = Template.bind({});
