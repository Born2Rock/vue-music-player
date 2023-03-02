import SegmentedButtons from './SegmentedButtons.vue';
import '@/app/styles/index.scss';
import { action } from '@storybook/addon-actions';
import { ref } from 'vue';

export default {
  title: 'shared/SegmentedButtons',
  component: SegmentedButtons,
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

const buttons = ref([
  {
    key: 0,
    filterFavorites: false,
    label: 'Button is Active',
    isActive: true,
  },
  {
    key: 1,
    filterFavorites: true,
    label: 'Button is inactive',
    isActive: false,
  },
  {
    key: 2,
    filterFavorites: true,
    label: 'Button is inactive',
    isActive: false,
  },
]);

const Template = (args) => ({
  components: { SegmentedButtons },
  setup() {
    return { args };
  },
  template: '<SegmentedButtons @onButtonClick="action" v-bind="args" />',
  methods: {
    action: (button) => {
      //console.log(button);
      //console.log(buttons);
      buttons.value.map((b) => (b.isActive = b.key === button.key));
    },
  },
});

export const Primary = Template.bind({});
Primary.args = {
  buttons,
};
