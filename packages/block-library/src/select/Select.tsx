import { useState, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useEvent } from '~shared/hooks/useEvent';
import { formInvalidate } from '~shared/utils';

import BaseSelect from './BaseSelect';
import type { Props } from './types';

const Select = (props: { attributes: Props['attributes'] }) => {
	const [error, setError] = useState<string | null>(null);
	const ref = useRef<HTMLSelectElement | null>(null);

	const submitEventHandler = (event: Event) => {
		const form = (event as unknown as { detail: any }).detail;
		if (form && ref.current) {
			const select = ref.current;
			if (props.attributes.required && select.selectedIndex < 0) {
				formInvalidate(form);
				setError(__('Required'));
			} else {
				setError(null);
			}
		}
	};

	useEvent('mrblx.submit', submitEventHandler);
	useEvent('reset', () => setError(null));

	return <BaseSelect {...props} fieldError={error} ref={ref} />;
};

export default Select;
