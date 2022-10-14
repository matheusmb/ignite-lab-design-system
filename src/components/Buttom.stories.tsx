import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create Account',
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
export const WithCustomCSSClass: StoryObj<ButtonProps> = {
  args: {
    className: 'w-40 mt-4',
  },
};
