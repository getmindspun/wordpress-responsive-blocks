import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import RequiredControl from './RequiredControl';
import { Validation } from '~shared/types';

const CustomValidationControl = (props: {
	validation: Validation;
	setValidation: (attributes: Partial<Validation>) => void;
}) => {
	return (
		<>
			<RequiredControl
				required={!!props.validation.required}
				setRequired={(required) => {
					props.setValidation({ required });
				}}
			/>
			<TextControl
				label={__('Pattern')}
				value={props.validation.pattern ? props.validation.pattern : ''}
				onChange={(pattern) =>
					props.setValidation({
						pattern: pattern ? pattern : undefined,
					})
				}
			/>
			<TextControl
				label={__('Message')}
				value={
					props.validation.message
						? props.validation.message
						: 'Invalid'
				}
				onChange={(message) =>
					props.setValidation({
						message: message ? message : undefined,
					})
				}
			/>
		</>
	);
};

export default CustomValidationControl;
