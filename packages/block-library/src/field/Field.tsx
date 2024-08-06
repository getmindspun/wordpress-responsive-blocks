import { useState, useRef } from '@wordpress/element';

import type { Validation } from '~shared/types';
import { useEvent } from '~shared/hooks/useEvent';
import {
	validateCustom,
	validateRequired,
	validateText,
} from '~shared/components/field/validate';

import BaseField from './BaseField';
import type { Props } from './types';
import { CustomEvent } from '../buttons/button/types';

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

function validateField(
	form: HTMLFormElement,
	input: HTMLInputElement,
	validation: Validation
) {
	if (form.contains(input)) {
		const error = validate(input, validation);
		if (error) {
			form.classList.add('mrblx-invalid');
			form.isInvalid = true;
		}
		return error;
	}
	return null;
}

const Field = (props: { attributes: Props['attributes'] }) => {
	const [error, setError] = useState<string | null>(null);
	const ref = useRef<HTMLInputElement | null>(null);

	const submitEventHandler = (event: CustomEvent) => {
		const form = (event as { detail: any }).detail;
		if (form && ref.current && form) {
			setError(
				validateField(
					form as HTMLFormElement,
					ref.current,
					props.attributes.validation
				)
			);
		}
	};

	useEvent('mrblx.submit', submitEventHandler);
	useEvent('reset', () => setError(null));

	return <BaseField {...props} fieldError={error} ref={ref} />;
};

export default Field;
