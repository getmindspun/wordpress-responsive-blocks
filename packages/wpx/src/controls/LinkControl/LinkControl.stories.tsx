// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import LinkControl, { LinkControlProps } from './LinkControl';
import { useState } from '@wordpress/element';

const meta: Meta<typeof LinkControl> = {
	component: LinkControl,
};

export default meta;

type Story = StoryObj<typeof LinkControl>;

const Display = (props: {
	attributes: LinkControlProps['attributes'];
	children: React.ReactNode;
}) => {
	return (
		<div>
			<div>{props.children}</div>
			<pre
				style={{
					width: 'fit-content',
					margin: '0 auto',
				}}
			>
				{JSON.stringify(props.attributes, null, 4)}
			</pre>
		</div>
	);
};

export const Default: Story = {
	render: () => {
		const [attributes, setAttributes] = useState<
			LinkControlProps['attributes']
		>({} as LinkControlProps['attributes']);
		return (
			<Display attributes={attributes}>
				<LinkControl
					attributes={attributes}
					setAttributes={(newAttributes) => {
						setAttributes({ ...attributes, ...newAttributes });
					}}
				/>
			</Display>
		);
	},
};
