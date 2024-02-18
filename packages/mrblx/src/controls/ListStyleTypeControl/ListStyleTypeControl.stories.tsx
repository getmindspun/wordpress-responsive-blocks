// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ListStyleTypeControl, { ListStyleType } from './ListStyleTypeControl';
import { useState } from '@wordpress/element';

const meta: Meta<typeof ListStyleTypeControl> = {
	component: ListStyleTypeControl,
};

export default meta;

type Story = StoryObj<typeof ListStyleTypeControl>;

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState<ListStyleType | undefined>(
			'default'
		);
		return <ListStyleTypeControl onChange={setValue} value={value} />;
	},
};
