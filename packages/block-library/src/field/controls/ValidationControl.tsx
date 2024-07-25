import { __ } from '@wordpress/i18n';
import {
	RadioControl,
	__experimentalNumberControl as NumberControl,
	TextControl,
} from '@wordpress/components';

import RequiredControl from '~shared/controls/form/RequiredControl';

import { Validation, InputType } from '../types';

const SimpleValidationControl = (props: {
	inputType: InputType;
	validation: Validation;
	setValidation: (attributes: Partial<Validation>) => void;
}) => {
	const isTextInput = props.inputType === 'text' || !props.inputType;
	return (
		<>
			<RequiredControl
				required={!!props.validation.required}
				setRequired={(required) => {
					props.setValidation({ required });
				}}
			/>
			{isTextInput && (
				<NumberControl
					label={__('Minimum Length')}
					value={props.validation.minLength}
					onChange={(minLength) => {
						props.setValidation({
							minLength: minLength
								? parseInt(minLength)
								: undefined,
						});
					}}
				/>
			)}
		</>
	);
};

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

const ValidationControl = (props: {
	inputType: InputType;
	validation: Validation;
	setValidation: (attributes: Partial<Validation>) => void;
}) => {
	return (
		<>
			<RadioControl
				label={__('Validation')}
				selected={
					props.validation.type ? props.validation.type : 'none'
				}
				options={[
					{ label: 'None', value: 'none' },
					{ label: 'Simple', value: 'simple' },
					{ label: 'Custom', value: 'custom' },
				]}
				onChange={(type) =>
					props.setValidation({
						type:
							type !== 'none'
								? (type as Validation['type'])
								: undefined,
					})
				}
			/>
			{props.validation.type === 'simple' ? (
				<SimpleValidationControl {...props} />
			) : null}
			{props.validation.type === 'custom' ? (
				<CustomValidationControl {...props} />
			) : null}
		</>
	);
};

export default ValidationControl;
