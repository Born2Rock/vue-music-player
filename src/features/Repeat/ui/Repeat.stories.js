import Repeat from './Repeat.vue';
import '@/app/styles/index.scss';

export default {
  title: 'features/Repeat',
  component: Repeat,
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
  components: { Repeat },
  setup() {
    return { args };
  },
  template: '<Repeat v-bind="args" />',
});

export const Primary = Template.bind({});
