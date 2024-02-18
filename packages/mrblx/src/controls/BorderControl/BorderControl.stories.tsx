// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import BorderControl from './BorderControl';
import { useState } from '@wordpress/element';
import { BlockCSSProperties } from '../../types';

const meta: Meta<typeof BorderControl> = {
	title: 'controls/BorderControl',
	component: BorderControl,
};

export default meta;

type Story = StoryObj<typeof BorderControl>;

export const Default: Story = {
	render: () => {
		const [attributes, setAttributes] = useState<BlockCSSProperties>(
			{} as BlockCSSProperties
		);

		return (
			<>
				<BorderControl
					label={'Border'}
					attributes={attributes}
					setAttributes={(newAttributes) => {
						setAttributes({ ...attributes, ...newAttributes });
					}}
				/>
				<pre>{JSON.stringify(attributes, null, 4)}</pre>
			</>
		);
	},
};

export const Responsive: Story = {
	render: () => {
		const [attributes, setAttributes] = useState<BlockCSSProperties>(
			{} as BlockCSSProperties
		);

		return (
			<>
				<BorderControl
					label={'Border'}
					attributes={attributes}
					setAttributes={(newAttributes) => {
						setAttributes({ ...attributes, ...newAttributes });
					}}
					isResponsive={true}
				/>
				<pre>{JSON.stringify(attributes, null, 4)}</pre>
			</>
		);
	},
};
