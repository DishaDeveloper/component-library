// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ProgressBar, { ProgressBarProps } from './ProgressBar';
import { defaultData, circularData } from './ProgressBar.mock-data';

const meta: Meta<typeof ProgressBar> = {
  title: 'Authorable/General/ProgressBar',
  component: ProgressBar,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Linear: Story = {
  render: (args) => {
    return <ProgressBar {...(expandObj({ ...args }) as ProgressBarProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};

export const Circular: Story = {
  render: (args) => {
    return <ProgressBar {...(expandObj({ ...args }) as ProgressBarProps)} />;
  },
  args: {
    ...flattenObj(circularData),
  },
};
