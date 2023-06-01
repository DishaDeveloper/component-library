// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import CardList, { CardListProps } from './CardList';
import defaultData, { ImageOnTopData, ImageOnLeftData } from './CardList.mock-data';

const meta: Meta<typeof CardList> = {
  title: 'Authorable/General/CardList',
  component: CardList,
  argTypes: {
    // variant: {
    //   control: 'select',
    //   defaultValue: 'button',
    //   description: 'The HTML tag as which the button will be rendered.',
    //   options: ['a', 'button'],
    // },
  },
};

export default meta;

type Story = StoryObj<typeof CardList>;

export const Default: Story = {
  render: (args) => {
    return <CardList {...(expandObj({ ...args }) as CardListProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};

export const ImageOnTop: Story = {
  render: (args) => {
    return <CardList {...(expandObj({ ...args }) as CardListProps)} />;
  },
  args: {
    ...flattenObj(ImageOnTopData),
  },
};

export const ImageOnLeft: Story = {
  render: (args) => {
    return <CardList {...(expandObj({ ...args }) as CardListProps)} />;
  },
  args: {
    ...flattenObj(ImageOnLeftData),
  },
};
