// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import FontAppearanceControl, {
	FontAppearanceControlProps,
} from './FontAppearanceControl';
import { useState } from '@wordpress/element';
import Display from '../../.storybook/Display';

const meta: Meta<typeof FontAppearanceControl> = {
	component: FontAppearanceControl,
};

export default meta;

type Story = StoryObj<typeof FontAppearanceControl>;

export const Default: Story = {
	render: () => {
		const [attributes, setAttributes] = useState<
			FontAppearanceControlProps['attributes']
		>({} as FontAppearanceControlProps['attributes']);
		return (
			<Display attributes={attributes}>
				<FontAppearanceControl
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			</Display>
		);
	},
};
