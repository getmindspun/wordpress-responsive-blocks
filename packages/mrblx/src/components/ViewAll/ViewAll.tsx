import { __ } from '@wordpress/i18n';
import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';

import { BlockCSSProperties } from '../../types';

const ViewAll = (props: {
	attributes: BlockCSSProperties;
	onClear?: () => void;
}) => {
	const [showModal, setShowModal] = useState(false);

	// Force empty objects to show as {} instead of [].
	const attributes =
		Object.keys(props.attributes).length > 0 ? props.attributes : {};
	const json = JSON.stringify(attributes, null, 4);

	return (
		<div className={'mrblx--view-all'}>
			<Button variant={'link'} onClick={() => setShowModal(!showModal)}>
				{__('View All')}
			</Button>
			{showModal && (
				<Modal
					focusOnMount
					shouldCloseOnEsc
					shouldCloseOnClickOutside
					overlayClassName="mrblx--view-all--modal"
					title={__('CSS Properties')}
					onRequestClose={() => {
						setShowModal(false);
					}}
				>
					<pre>{json}</pre>
					{props.onClear ? (
						<Button
							variant={'link'}
							onClick={() => props.onClear!()}
						>
							{__('Clear All')}
						</Button>
					) : null}
				</Modal>
			)}
		</div>
	);
};

export default ViewAll;
