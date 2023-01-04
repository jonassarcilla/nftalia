import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedOut = {};
export const LoggedIn = {
  args: {
    user: { name: 'Jane Doe' },
  },
};
export const LoggedInWithLongName = {
  args: {
    user: { name: 'Jane Doe batungbakal Delo Santos' },
  },
};

export const LoggedInWithLongNameOnMobile = {
  args: LoggedInWithLongName.args,
  parameters: {
    viewport: {
      defaultViewport: 'xs',
    },
  },
};

// const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {
//     name: 'Jane Doe',
//   },
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
// export default {
//   title: 'Example/Header',
//   component: Header,
//   parameters: {
//     // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
//     layout: 'fullscreen',
//   },
// } as ComponentMeta<typeof Header>;

// const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {
//     name: 'Jane Doe',
//   },
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
