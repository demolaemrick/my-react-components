/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Buttons/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		children: {
			defaultValue: 'Button',
		},
	},
	args: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	color: 'primary',
	variant: 'contained',
	children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	variant: 'contained',
	children: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
	size: 'sm',
	children: 'Small',
};
export const Mediun = Template.bind({});
Mediun.args = {
	size: 'md',
	children: 'Medium',
};
export const Large = Template.bind({});
Large.args = {
	size: 'lg',
	children: 'Large',
};
