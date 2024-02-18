// noinspection JSUnusedGlobalSymbols
import type { Meta, StoryObj } from '@storybook/react';

import { useState } from '@wordpress/element';

import BorderRadiusControl from './BorderRadiusControl';
import { BlockCSSProperties } from '../../types';

const meta: Meta<typeof BorderRadiusControl> = {
	title: 'controls/BorderRadiusControl',
	component: BorderRadiusControl,
};

export default meta;

type Story = StoryObj<typeof BorderRadiusControl>;

export const Default: Story = {
	render: () => {
		const [attributes, setAttributes] = useState<BlockCSSProperties>(
			{} as BlockCSSProperties
		);

		return (
			<>
				<BorderRadiusControl
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
				<BorderRadiusControl
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
