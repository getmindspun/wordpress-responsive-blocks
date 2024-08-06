import { __ } from '@wordpress/i18n';
import { Validation } from '~shared/types';

export function validateRequired(
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

export function validateText(
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

export function validateCustom(
	input: HTMLInputElement,
	validation: Validation
) {
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
