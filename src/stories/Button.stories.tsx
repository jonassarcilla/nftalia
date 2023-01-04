// export default { component: Button };
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  args: { primary: true, label: 'Button' },
  parameters: {
    design: {
      type: 'iframe',
      url: 'https://www.wikipedia.org/',
      allowFullscreen: true,
    },
    iframe: {
      url: 'https://typedoc.org/guides/overview/',
    },
  },
};

export const Default = {};
export const Secondary = { args: { primary: false } };
export const Large = { args: { size: 'large' } };

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: 'Example/Button',
//   component: Button,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof Button>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export default { component: Button };
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
