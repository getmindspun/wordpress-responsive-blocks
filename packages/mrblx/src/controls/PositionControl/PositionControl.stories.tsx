// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useState } from '@wordpress/element';

import PositionControl from './PositionControl';
import { BlockCSSProperties } from '../../types';
import Display from '../../.storybook/Display';

const meta: Meta<typeof PositionControl> = {
	title: 'controls/PositionControl',
	component: PositionControl,
};

export default meta;

type Story = StoryObj<typeof PositionControl>;

export const Default: Story = {
	render: () => {
		const [attributes, setAttributes] = useState<BlockCSSProperties>(
			{} as BlockCSSProperties
		);

		return (
			<Display attributes={attributes}>
				<PositionControl
					attributes={attributes}
					setAttributes={(newAttributes) => {
						setAttributes({ ...attributes, ...newAttributes });
					}}
				/>
			</Display>
		);
	},
};

export const Responsive: Story = {
	render: () => {
		const [attributes, setAttributes] = useState<BlockCSSProperties>(
			{} as BlockCSSProperties
		);

		return (
			<Display attributes={attributes}>
				<PositionControl
					attributes={attributes}
					setAttributes={(newAttributes) => {
						setAttributes({ ...attributes, ...newAttributes });
					}}
					isResponsive={true}
				/>
			</Display>
		);
	},
};
