// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ControlHeader from './ControlHeader';
import { useState } from '@wordpress/element';

const meta: Meta<typeof ControlHeader> = {
	component: ControlHeader,
};

export default meta;

type Story = StoryObj<typeof ControlHeader>;

export const Default: Story = {
	args: {
		title: 'Title',
		onClear: undefined,
	},
};

export const Hint: Story = {
	args: {
		title: 'Title',
		hint: 'Hint',
		onClear: undefined,
	},
};

export const Linked: Story = {
	name: 'with Linked',
	render: () => {
		const [isLinked, setIsLinked] = useState(true);
		return (
			<ControlHeader
				title="Title"
				hint="Hint"
				isLinked={isLinked}
				onLinkedChange={setIsLinked}
			/>
		);
	},
};

export const Expand: Story = {
	name: 'with Expand',
	render: () => {
		return <ControlHeader title="Title" hint="Hint" onExpand={() => {}} />;
	},
};

export const Advanced: Story = {
	name: 'with Advanced',
	render: () => {
		const [isAdvanced, setIsAdvanced] = useState(false);
		return (
			<ControlHeader
				title="Title"
				hint="Hint"
				isAdvanced={isAdvanced}
				onAdvancedChange={setIsAdvanced}
			/>
		);
	},
};

export const Clear: Story = {
	name: 'with Clear',
	args: {
		title: 'Title',
		hint: 'Hint',
		onClear: () => {},
	},
};

export const DeviceType: Story = {
	name: 'with Device Type',
	args: {
		title: 'Title',
		hint: 'Hint',
		isResponsive: true,
	},
};

export const Both: Story = {
	name: 'with All',
	render: () => {
		const [isLinked, setIsLinked] = useState(true);
		const [isAdvanced, setIsAdvanced] = useState(false);
		return (
			<div style={{ width: '280px', margin: '0 auto' }}>
				<ControlHeader
					title="Title"
					hint="Hint"
					isLinked={isLinked}
					onLinkedChange={setIsLinked}
					isAdvanced={isAdvanced}
					onAdvancedChange={setIsAdvanced}
					onClear={() => {}}
					onExpand={() => {}}
					isResponsive={true}
				/>
			</div>
		);
	},
};
