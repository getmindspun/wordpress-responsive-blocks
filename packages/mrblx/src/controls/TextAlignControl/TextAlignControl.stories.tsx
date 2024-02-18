// noinspection JSUnusedGlobalSymbols

import React, { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TextAlignBaseControl from './TextAlignBaseControl';
import { useState } from '@wordpress/element';
import TextAlignControl, { TextAlignControlProps } from './TextAlignControl';
import Display from '../../.storybook/Display';

const meta: Meta<typeof TextAlignControl> = {
	component: TextAlignControl,
};

export default meta;

type Story = StoryObj<typeof TextAlignControl>;

export const Base: Story = {
	render: () => {
		const [attributes, setAttributes] = useState(
			{} as TextAlignControlProps['attributes']
		);
		return (
			<Display attributes={attributes}>
				<TextAlignControl
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
		const [attributes, setAttributes] = useState(
			{} as TextAlignControlProps['attributes']
		);
		return (
			<Display attributes={attributes}>
				<TextAlignControl
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
