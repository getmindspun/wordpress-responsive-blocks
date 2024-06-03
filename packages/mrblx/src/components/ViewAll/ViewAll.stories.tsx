// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from '@wordpress/element';

import ViewAll from './ViewAll';
import { BlockCSSProperties } from '../../types';

const meta: Meta<typeof ViewAll> = {
	component: ViewAll,
};

export default meta;

type Story = StoryObj<typeof ViewAll>;

const STATE: BlockCSSProperties = {
	color: '#FF0000',
	tabletColor: '#00FF00',
	mobileColor: '#0000FF',
};

export const Default: Story = {
	render: () => {
		const [style, setStyle] = useState<BlockCSSProperties>(STATE);
		return <ViewAll attributes={style} />;
	},
};

export const WithClear: Story = {
	name: 'with Clear',
	render: () => {
		const [style, setStyle] = useState<BlockCSSProperties>(STATE);

		function onClear() {
			setStyle({});
		}

		return <ViewAll attributes={style} onClear={onClear} />;
	},
};
