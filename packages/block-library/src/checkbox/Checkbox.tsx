import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { useEvent } from '~shared/hooks/useEvent';
import BaseCheckbox from './BaseCheckbox';
import type { Props } from './types';
import { formInvalidate } from '~shared/utils';
import React from 'react';

const Checkbox = (props: {
	disabled?: boolean;
	attributes: Props['attributes'];
	children?: React.ReactNode;
}) => {
	const [checked, setChecked] = useState(props.attributes.checked);
	const [error, setError] = useState<string | null>(null);

	const submitEventHandler = (event: Event) => {
		const form = (event as unknown as { detail: any }).detail;
		if (form) {
			if (props.attributes.required && !checked) {
				formInvalidate(form);
				setError(__('Required'));
			} else {
				setError(null);
			}
		}
	};

	useEvent('mrblx.submit', submitEventHandler);
	useEvent('reset', () => {
		setChecked(props.attributes.checked);
		setError(null);
	});

	return (
		<BaseCheckbox
			{...props}
			checked={checked}
			fieldError={error}
			onChange={setChecked}
		>
			{props.children}
		</BaseCheckbox>
	);
};

export default Checkbox;
