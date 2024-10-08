import React from 'react';
import { forwardRef } from '@wordpress/element';

import FieldText from '~shared/components/field/FieldText';
import RequiredIndicator from '~shared/components/field/RequiredIndicator';

import type { Props } from './types';
import Input from './Input';

export function isRequired(attributes: Props['attributes']) {
	if (attributes.validation) {
		return !!(attributes.validation.type && attributes.validation.required);
	}
	return false;
}

const BaseField = forwardRef(
	(
		props: {
			attributes: Props['attributes'];
			fieldError?: string | null;
		},
		ref: React.ForwardedRef<HTMLInputElement>
	) => {
		if (
			props.attributes.labelPosition === 'none' ||
			!props.attributes.label
		) {
			return (
				<div className={props.fieldError ? 'is-error' : undefined}>
					<Input
						className={!!props.fieldError ? 'is-error' : undefined}
						attributes={props.attributes}
					/>
					<FieldText {...props} />
				</div>
			);
		}

		return (
			<label className={props.fieldError ? 'is-error' : undefined}>
				<span className={'mrblx-field-label'}>
					{props.attributes.label}
					<RequiredIndicator
						isRequired={isRequired(props.attributes)}
						text={props.attributes.labelRequiredIndicator}
					/>
				</span>
				<Input ref={ref} attributes={props.attributes} />
				<FieldText {...props} />
			</label>
		);
	}
);

export default BaseField;
