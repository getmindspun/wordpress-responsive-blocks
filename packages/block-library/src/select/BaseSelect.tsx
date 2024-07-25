import React from 'react';
import classNames from 'classnames';
import { forwardRef } from '@wordpress/element';

import RequiredIndicator from '~shared/components/field/RequiredIndicator';
import FieldText from '~shared/components/field/FieldText';

import type { Props } from './types';

const SelectElement = forwardRef(
	(
		props: {
			className?: string;
			attributes: Props['attributes'];
		},
		ref: React.ForwardedRef<HTMLSelectElement>
	) => (
		<select ref={ref}>
			{props.attributes.options.map((option, index) => (
				<option key={index} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	)
);

const BaseSelect = forwardRef(
	(
		props: {
			attributes: Props['attributes'];
			fieldError?: string | null;
		},
		ref: React.ForwardedRef<HTMLSelectElement>
	) => {
		const className = classNames('mrblx-label', {
			'is-error': !!props.fieldError,
		});

		if (props.attributes.labelPosition === 'none') {
			return (
				<>
					<SelectElement
						className={!!props.fieldError ? 'is-error' : undefined}
						ref={ref}
						attributes={props.attributes}
					/>
					<FieldText {...props} />
				</>
			);
		}

		/* eslint-disable jsx-a11y/label-has-associated-control */
		return (
			<label className={className}>
				<span>
					{props.attributes.label}
					<RequiredIndicator
						isRequired={props.attributes.required}
						text={props.attributes.labelRequiredIndicator}
					/>
				</span>
				<SelectElement ref={ref} attributes={props.attributes} />
				<FieldText {...props} />
			</label>
		);
	}
);

export default BaseSelect;
