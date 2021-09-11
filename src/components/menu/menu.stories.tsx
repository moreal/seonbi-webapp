import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Menu } from './menu';

export default {
  title: 'Seonbi/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
