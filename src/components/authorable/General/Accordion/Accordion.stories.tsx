// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Accordion, { AccordionProps } from './Accordion';
import defaultData from './Accordion.mock-data';

const meta: Meta<typeof Accordion> = {
  title: 'Authorable/General/Accordion',
  component: Accordion,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => {
    return <Accordion {...(expandObj({ ...args }) as AccordionProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
