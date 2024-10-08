// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from '@storybook/react';

import TableEditor from './TableEditor';
import { useState } from '@wordpress/element';

const meta: Meta<typeof TableEditor> = {
	component: TableEditor,
};

export default meta;

type Story = StoryObj<typeof TableEditor>;

export const Default: Story = {
	render: () => {
		const [data, setData] = useState([
			['Apple', 'alice'],
			['Banana', 'bob'],
			['Coconut', 'charlie'],
		]);
		return <TableEditor id={'myTable'} data={data} setData={setData} />;
	},
};

export const WithSelect: Story = {
	render: () => {
		const [selected, setSelected] = useState<number | undefined>(0);
		const [data, setData] = useState([
			['Apple', 'alice'],
			['Banana', 'bob'],
			['Coconut', 'charlie'],
		]);
		return (
			<TableEditor
				id={'myTable'}
				data={data}
				setData={setData}
				selected={selected}
				setSelected={setSelected}
			/>
		);
	},
};

export const WithSelectAndLabels: Story = {
	render: () => {
		const [selected, setSelected] = useState<number | undefined>(0);
		const [data, setData] = useState([
			['Apple', 'alice'],
			['Banana', 'bob'],
			['Coconut', 'charlie'],
		]);
		return (
			<TableEditor
				id={'myTable'}
				data={data}
				setData={setData}
				selected={selected}
				setSelected={setSelected}
				columns={['Column A', 'Column B']}
			/>
		);
	},
};
