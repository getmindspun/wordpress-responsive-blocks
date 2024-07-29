import { Validation } from './types';
import { __ } from '@wordpress/i18n';

function validateRequired(
	input: HTMLInputElement,
	validation: Validation
): string | null {
	if (validation.required) {
		if (!input.value) {
			return 'Required';
		}
	}
	return null;
}

function validateText(
	input: HTMLInputElement,
	validation: Validation
): string | null {
	const result = validateRequired(input, validation);
	if (result) {
		return result;
	}
	if (validation.minLength) {
		if (!input.value || input.value.length < validation.minLength) {
			// translators: %d: Minimum number of characters.
			return __('Please enter at least %d characters').replace(
				'%d',
				validation.minLength.toString()
			);
		}
	}
	return null;
}

function validateCustom(input: HTMLInputElement, validation: Validation) {
	const result = validateRequired(input, validation);
	if (result) {
		return result;
	}
	if (validation.pattern) {
		const regex = new RegExp(validation.pattern);
		if (!regex.test(input.value)) {
			return validation.message ? validation.message : __('Invalid');
		}
	}
	return null;
}

export function validate(
	input: HTMLInputElement,
	validation: Validation
): string | null {
	if (validation.type === 'custom') {
		return validateCustom(input, validation);
	}
	if (validation.type === 'simple') {
		const inputType = input.type ? input.type : 'text';
		if (inputType === 'text') {
			return validateText(input, validation);
		}
		return validateRequired(input, validation);
	}
	return null;
}
