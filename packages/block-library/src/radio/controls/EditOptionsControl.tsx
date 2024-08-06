import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';

import { OptionWithSelected } from '~shared/types';
import OptionsModal from '~shared/controls/OptionsModal';

const EditOptionsControl = (props: {
	options: OptionWithSelected[];
	setOptions: (options: OptionWithSelected[]) => void;
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
