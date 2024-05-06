import { __ } from '@wordpress/i18n';

import { ControlHeader } from '@mindspun/mrblx';
import { Props } from '../types';
import { TextControl } from '@wordpress/components';

const CustomEventControl = (props: {
	attributes: Props['attributes'];
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
}) => {
	return (
		<div className={'mrblx--custom-event-control'}>
			<TextControl
				label={__('Custom Event')}
				value={
					props.attributes.customEvent.type
						? props.attributes.customEvent.type
						: ''
				}
				onChange={(type) => {
					const customEvent = {
						...props.attributes.customEvent,
						type: type ? type : undefined,
					};
					props.setAttributes({ customEvent });
				}}
				help={__(
					'The custom event type to be emitted when the button is clicked.'
				)}
			/>
			{!!props.attributes.customEvent.type ? (
				<TextControl
					label={__('Custom Event Detail')}
					value={
						props.attributes.customEvent.detail
							? props.attributes.customEvent.detail
							: ''
					}
					onChange={(detail) => {
						const customEvent = {
							...props.attributes.customEvent,
							detail: detail ? detail : null,
						};
						props.setAttributes({ customEvent });
					}}
					help={__('The detail attribute included with the event.')}
				/>
			) : null}
		</div>
	);
};

export default CustomEventControl;
