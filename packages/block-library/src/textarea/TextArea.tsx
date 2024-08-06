import { useState, useRef } from '@wordpress/element';

import type { CustomEvent, Validation } from '~shared/types';
import { useEvent } from '~shared/hooks/useEvent';
import { validate } from '~shared/components/field/validate';
import { formInvalidate } from '~shared/utils';

import type { Props } from './types';
import BaseTextArea from './BaseTextArea';

function validateTextArea(
	form: HTMLFormElement,
	input: HTMLTextAreaElement,
	validation: Validation
) {
	if (form.contains(input)) {
		const error = validate(input, validation);
		if (error) {
			formInvalidate(form);
		}
		return error;
	}
	return null;
}

const TextArea = (props: { attributes: Props['attributes'] }) => {
	const [error, setError] = useState<string | null>(null);
	const ref = useRef<HTMLTextAreaElement | null>(null);

	const submitEventHandler = (event: CustomEvent) => {
		const form = (event as { detail: any }).detail;
		if (form && ref.current) {
			setError(
				validateTextArea(
					form as HTMLFormElement,
					ref.current,
					props.attributes.validation
				)
			);
		}
	};

	useEvent('mrblx.submit', submitEventHandler);
	useEvent('reset', () => setError(null));

	return <BaseTextArea {...props} fieldError={error} ref={ref} />;
};

export default TextArea;
