import React from 'react';
import {
	Button,
	Draggable,
	__experimentalInputControl as InputControl,
} from '@wordpress/components';
import { dragHandle, plus, closeSmall, check } from '@wordpress/icons';

const SelectColumn = (props: {
	hasSelect: boolean;
	selected: boolean;
	onClick: () => void;
}) => {
	const tdStyle = { width: '24px' };
	const linkStyle = {
		width: '24px',
		cursor: 'pointer',
		display: 'inline-block',
	};

	if (!props.hasSelect) {
		return null;
	}
	if (props.selected) {
		return (
			<td style={tdStyle} className={'mrblx--selectable-column'}>
				<Button
					style={linkStyle}
					onClick={props.onClick}
					onKeyDown={props.onClick}
					icon={check}
				/>
			</td>
		);
	}
	return (
		<td style={tdStyle} className={'mrblx--selectable-column'}>
			<button
				style={linkStyle}
				onClick={props.onClick}
				onKeyDown={props.onClick}
			>
				&nbsp;
			</button>
		</td>
	);
};

const TableRow = (props: {
	id: string;
	index: number;
	data: string[];
	onAdd?: () => void;
	onDelete?: () => void;
	onEdit?: (data: string[]) => void;
	onDrop?: (data: string) => void;
	selected?: boolean;
	onSelect?: () => void;
}) => {
	const hasSelect = props.onSelect !== undefined;

	function onChange(index: number, value: string | undefined) {
		if (props.onEdit) {
			const newData = [...props.data];
			newData[index] = value ? value : '';
			props.onEdit(newData);
		}
	}

	function onDragOver(event: React.DragEvent) {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	}

	function onDrop(event: React.DragEvent) {
		event.preventDefault();
		// Get the id of the target and add the moved element to the target's DOM
		const data = event.dataTransfer.getData('text/plain');
		if (props.onDrop) {
			props.onDrop(data);
		}
	}

	return (
		<tr id={props.id} onDragOver={onDragOver} onDrop={onDrop}>
			<td width={'1%'}>
				<Draggable
					elementId={props.id}
					transferData={{
						index: props.index,
						data: props.data,
					}}
				>
					{({ onDraggableStart, onDraggableEnd }) => (
						<div
							draggable
							onDragStart={onDraggableStart}
							onDragEnd={onDraggableEnd}
						>
							{dragHandle}
						</div>
					)}
				</Draggable>
			</td>
			<SelectColumn
				hasSelect={hasSelect}
				selected={!!props.selected}
				onClick={() => {
					if (props.onSelect) {
						props.onSelect();
					}
				}}
			/>
			{props.data.map((td, index) => (
				<td key={index}>
					<InputControl
						value={td}
						onChange={(value) => onChange(index, value)}
					/>
				</td>
			))}
			<td width={'1%'} style={{ whiteSpace: 'nowrap' }}>
				<Button icon={plus} onClick={props.onAdd} />
				<Button icon={closeSmall} onClick={props.onDelete} />
			</td>
		</tr>
	);
};

export default TableRow;
