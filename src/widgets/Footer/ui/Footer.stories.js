import Footer from './Footer.vue';
import '@/app/styles/index.scss';

export default {
  title: 'widgets/Footer',
  component: Footer,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [
        { name: 'default', value: 'var(--color-app-bg)' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
  },
  decorators: [
    (story) => {
      return {
        components: { story },
        template: `
        <div style="position: relative;height: 45px;width: 400px;background-color: #000;">
          <story style="bottom:0" />
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
  components: { Footer },
  setup() {
    return { args };
  },
  template: '<Footer v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
Secondary.decorators = [
  (story) => {
    return {
      components: { story },
      template: `
        <div class="app_light_theme">
          <story style="bottom:0" />
        </div>`,
    };
  },
];
