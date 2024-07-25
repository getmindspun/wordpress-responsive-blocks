import React from 'react';
import classNames from 'classnames';
import { forwardRef } from '@wordpress/element';

import FieldText from '~shared/components/field/FieldText';
import RequiredIndicator from '~shared/components/field/RequiredIndicator';

import type { Props } from './types';
import Input from './Input';
import { isRequired } from './utils';

const BaseField = forwardRef(
	(
		props: {
			attributes: Props['attributes'];
			fieldError?: string | null;
		},
		ref: React.ForwardedRef<HTMLInputElement>
	) => {
		const className = classNames('mrblx-label', {
			'is-error': !!props.fieldError,
		});

		if (props.attributes.labelPosition === 'none') {
			return (
				<>
					<Input
						className={!!props.fieldError ? 'is-error' : undefined}
						attributes={props.attributes}
					/>
					<FieldText {...props} />
				</>
			);
		}

		return (
			<label className={className}>
				<span>
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
