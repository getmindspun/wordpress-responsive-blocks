// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import MarginControl, { MarginControlProps } from './MarginControl';
import { useState } from '@wordpress/element';

const meta: Meta<typeof MarginControl> = {
	component: MarginControl,
};

export default meta;

type Story = StoryObj<typeof MarginControl>;

export const Default: Story = {
	render: () => {
		const [attributes, setAttributes] = useState<
			MarginControlProps['attributes']
		>({});
		return (
			<>
				<MarginControl
					attributes={attributes}
					setAttributes={setAttributes}
				/>
				<pre>{JSON.stringify(attributes, null, 4)}</pre>
			</>
		);
	},
};

export const Responsive: Story = {
	render: () => {
		const [attributes, setAttributes] = useState<
			MarginControlProps['attributes']
		>({});
		return (
			<>
				<MarginControl
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
