import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { Option } from '~shared/types';
import TableEditor from '@mindspun/mrblx/src/components/TableEditor/TableEditor';

const OptionsModal = (props: {
	onRequestClose: () => void;
	options: Option[];
	setOptions: (options: Option[]) => void;
}) => {
	const data = props.options.map((option) => {
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
	}

	return (
		<Modal onRequestClose={props.onRequestClose}>
			<TableEditor
				id={'mrblx-options-modal'}
				columns={[__('Label'), __('Value')]}
				data={data}
				setData={setData}
			/>
		</Modal>
	);
};

const EditOptionsControl = (props: {
	options: Option[];
	setOptions: (options: Option[]) => void;
}) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Button
				className={'mrblx-button--edit-options'}
				variant={'primary'}
				onClick={() => setShowModal(true)}
			>
				Edit Options
			</Button>
			{showModal ? (
				<OptionsModal
					{...props}
					onRequestClose={() => setShowModal(false)}
				/>
			) : null}
		</>
	);
};

export default EditOptionsControl;
