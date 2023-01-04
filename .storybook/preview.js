// @ts-check
import { ADDON_ID as ADDON_IFRAME } from '@geometricpanda/storybook-addon-iframe';
import '@styles/globals.css';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';
import React from 'react';
import { withPerformance } from 'storybook-addon-performance';

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [
  (Story) => (
    // <AuthProvider>
    //   <Story />
    // </AuthProvider>
    <Story />
  ),
  withPerformance,
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
  layout: 'fullscreen',
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: '', color: '#00aced' },
      { name: 'facebook', class: 'theme-fb', color: '#3b5998' },
    ],
  },
  previewTabs: {
    canvas: {},
    'storybook/docs/panel': {},
    [ADDON_IFRAME]: {
      title: 'Hooks API',
    },
  },
};
