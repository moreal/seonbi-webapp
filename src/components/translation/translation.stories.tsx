import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Translation } from './transaction';

export default {
  title: 'Seonbi/Translation',
  component: Translation,
} as ComponentMeta<typeof Translation>;

const Template: ComponentStory<typeof Translation> = (args) => <Translation {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
