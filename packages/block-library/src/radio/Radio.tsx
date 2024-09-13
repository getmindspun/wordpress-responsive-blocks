import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { useEvent } from '~shared/hooks/useEvent';
import { getDefaultValue } from './utils';
import BaseRadio from './BaseRadio';
import type { Props } from './types';
import { formInvalidate } from '~shared/utils';

const Radio = (props: { attributes: Props['attributes'] }) => {
	const [error, setError] = useState<string | null>(null);
	const [value, setValue] = useState<string | undefined>(
		getDefaultValue(props.attributes.options)
	);

	const submitEventHandler = (event: Event) => {
		const form = (event as unknown as { detail: any }).detail;
		if (form) {
			if (props.attributes.required && value === undefined) {
				formInvalidate(form);
				setError(__('Required'));
			} else {
				setError(null);
			}
		}
	};

	useEvent('mrblx.submit', submitEventHandler);
	useEvent('reset', () => {
		setValue(getDefaultValue(props.attributes.options));
		setError(null);
	});

	return (
		<BaseRadio
			{...props}
			value={value}
			fieldError={error}
			onChange={setValue}
		/>
	);
};

export default Radio;
