import Button from './Button.vue';
import '@/app/styles/index.scss';
import Icon from '../Icon/Icon.vue';
import '@/app/styles/index.scss';
import { ButtonSize } from './Types';

export default {
  components: { Icon },
  title: 'shared/Button',
  parameters: {
    backgrounds: {
      default: 'default',
      values: [
        { name: 'default', value: 'var(--color-app-bg)' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
  },
  component: Button,
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

interface Props {
  primary: boolean;
  label: string;
  withIcon: string;
  size: ButtonSize;
}

const Template = (args: Props) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `<Button v-bind="args"></Button>`,
});

export const Primary = Template.bind({});

// @ts-ignore
Primary.args = {
  primary: true,
  label: 'Button',
  withIcon: `shuffle`,
  size: ButtonSize.M,
};
