// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import PaddingControl, { PaddingControlProps } from './PaddingControl';
import { useState } from '@wordpress/element';

const meta: Meta<typeof PaddingControl> = {
	component: PaddingControl,
};

export default meta;

type Story = StoryObj<typeof PaddingControl>;

export const Default: Story = {
	render: () => {
		const [attributes, setAttributes] = useState<
			PaddingControlProps['attributes']
		>({});
		return (
			<>
				<PaddingControl
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
			PaddingControlProps['attributes']
		>({});
		return (
			<>
				<PaddingControl
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
