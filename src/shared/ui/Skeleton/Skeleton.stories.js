import Skeleton from './Skeleton.vue';
import '@/app/styles/index.scss';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  decorators: [
    (story) => {
      return {
        components: { story },
        template: `
        <div style="max-width: 400px">
          <story />
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
  components: { Skeleton },
  setup() {
    return { args };
  },
  template: '<Skeleton v-bind="args" />',
});

export const Default = Template.bind({});
