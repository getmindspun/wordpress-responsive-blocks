// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import LengthControl from './LengthControl';
import { useState } from '@wordpress/element';

const meta: Meta<typeof LengthControl> = {
	component: LengthControl,
};

export default meta;

type Story = StoryObj<typeof LengthControl>;

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState<string | number | undefined>(
			undefined
		);
		return (
			<>
				<LengthControl
					title="Title"
					value={value}
					onChange={setValue}
				/>
				<pre>Value: {value !== undefined ? value : 'undefined'}</pre>
			</>
		);
	},
};

export const Clear: Story = {
	name: 'with Clear',
	render: () => {
		const [value, setValue] = useState<string | number | undefined>(
			undefined
		);
		return (
			<>
				<LengthControl
					title="Title"
					value={value}
					onChange={setValue}
					onClear={() => setValue(undefined)}
				/>
				<pre>Value: {value !== undefined ? value : 'undefined'}</pre>
			</>
		);
	},
};

export const Advanced: Story = {
	render: () => {
		const [isAdvanced, setIsAdvanced] = useState(false);
		const [value, setValue] = useState<string | number | undefined>(
			undefined
		);
		return (
			<>
				<LengthControl
					title="Title"
					value={value}
					onChange={setValue}
					isAdvanced={isAdvanced}
					onAdvancedChange={setIsAdvanced}
				/>
				<pre>Value: {value !== undefined ? value : 'undefined'}</pre>
			</>
		);
	},
};

export const Auto: Story = {
	name: 'Advanced with Auto',
	render: () => {
		const [isAdvanced, setIsAdvanced] = useState(false);
		const [value, setValue] = useState<string | number | undefined>(
			undefined
		);
		return (
			<>
				<LengthControl
					title="Title"
					value={value}
					onChange={setValue}
					isAdvanced={isAdvanced}
					onAdvancedChange={setIsAdvanced}
				/>
				<pre>Value: {value !== undefined ? value : 'undefined'}</pre>
			</>
		);
	},
};

export const Linked: Story = {
	render: () => {
		const [isLinked, setIsLinked] = useState(false);
		const [value, setValue] = useState<string | number | undefined>(
			undefined
		);
		return (
			<>
				<LengthControl
					title="Title"
					value={value}
					onChange={setValue}
					isLinked={isLinked}
					onLinkedChange={setIsLinked}
				/>
				<pre style={{ display: 'block' }}>
					Value: {value !== undefined ? value : 'undefined'}
				</pre>
				<pre style={{ display: 'block' }}>
					Linked: {isLinked ? 'true' : 'false'}
				</pre>
			</>
		);
	},
};

export const All: Story = {
	render: () => {
		const [isAdvanced, setIsAdvanced] = useState(false);
		const [isLinked, setIsLinked] = useState(false);
		const [value, setValue] = useState<string | number | undefined>(
			undefined
		);
		return (
			<>
				<LengthControl
					title="Title"
					value={value}
					onChange={setValue}
					isLinked={isLinked}
					onLinkedChange={setIsLinked}
					isAdvanced={isAdvanced}
					onAdvancedChange={setIsAdvanced}
				/>
				<pre style={{ display: 'block' }}>
					Value: {value !== undefined ? value : 'undefined'}
				</pre>
				<pre style={{ display: 'block' }}>
					Linked: {isLinked ? 'true' : 'false'}
				</pre>
			</>
		);
	},
};
