// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import WidthHeightControl, {
	WidthHeightProperties,
} from './WidthHeightControl';
import { useState } from '@wordpress/element';
import Display from '../../.storybook/Display';

const meta: Meta<typeof WidthHeightControl> = {
	component: WidthHeightControl,
};

export default meta;

type Story = StoryObj<typeof WidthHeightControl>;

export const Default: Story = {
	render: () => {
		const [attributes, setAttributes] = useState<WidthHeightProperties>(
			{} as WidthHeightProperties
		);
		return (
			<Display attributes={attributes}>
				<WidthHeightControl
					label={'Width'}
					propertyName={'width'}
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
		const [attributes, setAttributes] = useState<WidthHeightProperties>(
			{} as WidthHeightProperties
		);
		return (
			<Display attributes={attributes}>
				<WidthHeightControl
					label={'Width'}
					propertyName={'width'}
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
