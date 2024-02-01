// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from '@wordpress/element';

import VerticalAlignControl from './VerticalAlignControl';
import { BlockCSSProperties } from '../../types';

const meta: Meta<typeof VerticalAlignControl> = {
	component: VerticalAlignControl,
};

export default meta;

type Story = StoryObj<typeof VerticalAlignControl>;

export const Base: Story = {
	render: () => {
		const [attributes, setAttributes] = useState({} as BlockCSSProperties);
		return (
			<div style={{ width: '280px', margin: '0 auto' }}>
				<VerticalAlignControl
					attributes={attributes}
					setAttributes={(newAttributes) => {
						setAttributes({ ...attributes, ...newAttributes });
					}}
				/>
				<pre>{JSON.stringify(attributes, null, 4)}</pre>
			</div>
		);
	},
};

export const Responsive: Story = {
	render: () => {
		const [attributes, setAttributes] = useState({} as BlockCSSProperties);
		return (
			<div style={{ width: '280px', margin: '0 auto' }}>
				<VerticalAlignControl
					attributes={attributes}
					setAttributes={(newAttributes) => {
						setAttributes({ ...attributes, ...newAttributes });
					}}
					isResponsive={true}
				/>
				<pre>{JSON.stringify(attributes, null, 4)}</pre>
			</div>
		);
	},
};
