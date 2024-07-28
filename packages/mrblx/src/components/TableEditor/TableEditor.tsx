import React from 'react';
import TableRow from './TableRow';

function countColumns(data: string[][]) {
	let count = 0;
	for (const row of data) {
		count = Math.max(count, row.length);
	}
	return count;
}

const TableHead = (props: { columns?: string[] }) => {
	if (!props.columns) {
		return null;
	}

	return (
		<thead>
			<tr>
				<th></th>
				{props.columns.map((column, index) => {
					return <th key={index}>{column}</th>;
				})}
			</tr>
		</thead>
	);
};

const TableEditor = (props: {
	id: string;
	columns?: string[];
	data: string[][];
	setData: (data: string[][]) => void;
	selected?: number|undefined;
	setSelected?: (selected: number|undefined) => void;
}) => {
	const columnCount = countColumns(props.data);

	function onAdd(index: number) {
		const newData = [...props.data];
		newData.splice(index + 1, 0, new Array(columnCount).fill(''));
		props.setData(newData);
	}

	function onDelete(index: number) {
		const newData = [...props.data];
		newData.splice(index, 1);
		props.setData(newData);
	}

	function onEdit(index: number, row: string[]) {
		const newData = [...props.data];
		newData[index] = row;
		props.setData(newData);
	}

	function onDrop(toIndex: number, transferData: string) {
		const data = JSON.parse(transferData) as {
			index: number;
			data: string[];
		};
		let newSelect = props.selected;
		if (props.selected === data.index) {
			newSelect = toIndex;
		} else if (props.selected === toIndex) {
			newSelect = data.index;
		}

		const newData = [...props.data];
		newData.splice(data.index, 1);
		newData.splice(toIndex, 0, data.data);

		props.setData(newData);
		if (props.setSelected) {
			props.setSelected(newSelect);
		}
	}

	function onSelect(index: number) {
		if (props.setSelected) {
			const selected = index !== props.selected ? index : undefined;
			props.setSelected(selected);
		}
	}

	return (
		<table
			id={props.id}
			className={'mrblx--table-editor'}
			style={{ width: '100%' }}
		>
			<TableHead columns={props.columns} />
			<tbody>
				{props.data.map((tr, index) => (
					<TableRow
						id={`${props.id}-${index}`}
						key={index}
						index={index}
						data={tr}
						onAdd={() => onAdd(index)}
						onDelete={() => onDelete(index)}
						onEdit={(row) => onEdit(index, row)}
						onDrop={(data) => onDrop(index, data)}
						selected={props.selected === index}
						onSelect={props.setSelected ? () => onSelect(index) : undefined}
					/>
				))}
			</tbody>
		</table>
	);
};

export default TableEditor;
