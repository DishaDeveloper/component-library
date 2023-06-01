// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import TabsComponent, { TabsComponentProps } from './TabsComponent';
import defaultData, { tabpills } from './TabsComponent.mock-data';

const meta: Meta<typeof TabsComponent> = {
  title: 'Authorable/General/TabsComponent',
  component: TabsComponent,
  argTypes: {
    'fields.tabsProperties.tabsAlignment': {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
    'fields.variant': {
      control: 'select',
      options: ['default', 'tabpills'],
    },
  } as any,
};
//TODO: make the Story Book more compatible, add dropdown, add boolean for toggle
export default meta;

type Story = StoryObj<typeof TabsComponent>;

export const Default: Story = {
  render: (args) => {
    return <TabsComponent {...(expandObj({ ...args }) as TabsComponentProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};

export const tabsPills: Story = {
  render: (args) => {
    return <TabsComponent {...(expandObj({ ...args }) as TabsComponentProps)} />;
  },
  args: {
    ...flattenObj(tabpills),
  },
};
