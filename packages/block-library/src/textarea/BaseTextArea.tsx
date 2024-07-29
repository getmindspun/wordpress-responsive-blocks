import React from 'react';
import classNames from 'classnames';
import { forwardRef } from '@wordpress/element';

import FieldText from '~shared/components/field/FieldText';
import RequiredIndicator from '~shared/components/field/RequiredIndicator';

import type { Props } from './types';
import TextArea from './TextArea';

export function isRequired(attributes: Props['attributes']) {
	if (attributes.validation) {
		return !!(attributes.validation.type && attributes.validation.required);
	}
	return false;
}

const BaseTextArea = forwardRef(
	(
		props: {
			attributes: Props['attributes'];
			fieldError?: string | null;
		},
		ref: React.ForwardedRef<HTMLTextAreaElement>
	) => {
		const className = classNames('mrblx-label', {
			'is-error': !!props.fieldError,
		});

		if (props.attributes.labelPosition === 'none') {
			return (
				<>
					<TextArea
						className={!!props.fieldError ? 'is-error' : undefined}
						attributes={props.attributes}
					/>
					<FieldText {...props} />
				</>
			);
		}

		return (
			<label className={className}>
				<span className={'mrblx-field-label'}>
					{props.attributes.label}
					<RequiredIndicator
						isRequired={isRequired(props.attributes)}
						text={props.attributes.labelRequiredIndicator}
					/>
				</span>
				<TextArea ref={ref} attributes={props.attributes} />
				<FieldText {...props} />
			</label>
		);
	}
);

export default BaseTextArea;
