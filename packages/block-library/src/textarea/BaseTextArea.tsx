import React from 'react';
import classNames from 'classnames';
import { forwardRef } from '@wordpress/element';

import FieldText from '~shared/components/field/FieldText';
import RequiredIndicator from '~shared/components/field/RequiredIndicator';

import type { Props } from './types';

export function isRequired(attributes: Props['attributes']) {
	if (attributes.validation) {
		return !!(attributes.validation.type && attributes.validation.required);
	}
	return false;
}

const TextAreaElement = forwardRef(
	(
		props: {
			className?: string;
			attributes: Props['attributes'];
			value?: string | undefined;
			onChange?: (value: string) => void;
		},
		ref: React.ForwardedRef<HTMLTextAreaElement>
	) => {
		function onChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
			if (props.onChange) {
				props.onChange(event.target.value);
			}
		}

		return (
			<textarea
				className={props.className}
				name={props.attributes.name ? props.attributes.name : undefined}
				autoComplete={
					props.attributes.autoComplete
						? props.attributes.autoComplete
						: undefined
				}
				autoFocus={!!props.attributes.autoFocus}
				spellCheck={!!props.attributes.spellCheck}
				autoCapitalize={
					props.attributes.autoCapitalize
						? props.attributes.autoCapitalize
						: undefined
				}
				rows={props.attributes.rows}
				cols={props.attributes.cols}
				ref={ref}
				value={props.value}
				onChange={onChange}
			/>
		);
	}
);

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

		if (
			props.attributes.labelPosition === 'none' ||
			!props.attributes.label
		) {
			return (
				<>
					<TextAreaElement
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
				<TextAreaElement ref={ref} attributes={props.attributes} />
				<FieldText {...props} />
			</label>
		);
	}
);

export default BaseTextArea;
