import { Option, OptionWithSelected } from '~shared/types';
import { Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { TableEditor } from '@mindspun/mrblx';
import { useState } from '@wordpress/element';
import { getDefaultValue } from '../../radio/utils';

function getSelectedIndex(options: OptionWithSelected[]) {
	for (let i = 0; i < options.length; i++) {
		if (options[i].selected) {
			return i;
		}
	}
	return undefined;
}

const OptionsModal = (props: {
	onRequestClose: () => void;
	options: OptionWithSelected[];
	setOptions: (options: OptionWithSelected[]) => void;
}) => {
	let data = props.options.map((option) => {
		return [option.label, option.value];
	});

	if (data.length === 0) {
		data.push(['', '']);
	}

	function setData(newData: string[][]) {
		const options = newData.map((row) => {
			return { label: row[0], value: row[1] };
		});
		props.setOptions(options);
		data = newData;
	}

	/* Use data instead of props.options because setData and setSelected can be called in the same render cycle. */
	function setSelected(selected: number | undefined) {
		const options = [];
		for (let i = 0; i < data.length; i++) {
			const row = data[i];
			const option = {
				label: row[0],
				value: row[1],
			} as OptionWithSelected;
			option.selected = selected === i;
			options.push(option);
		}
		props.setOptions(options);
	}

	return (
		<Modal onRequestClose={props.onRequestClose}>
			<TableEditor
				id={'mrblx-options-modal'}
				columns={[__('Label'), __('Value')]}
				data={data}
				setData={setData}
				selected={getSelectedIndex(props.options)}
				setSelected={setSelected}
			/>
		</Modal>
	);
};

export default OptionsModal;
