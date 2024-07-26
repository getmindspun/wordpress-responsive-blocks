import React from 'react';
import classNames from 'classnames';
import { forwardRef } from '@wordpress/element';

import RequiredIndicator from '~shared/components/field/RequiredIndicator';
import FieldText from '~shared/components/field/FieldText';

import type { Props } from './types';

const Radios = (props: {
	className?: string;
	attributes: Props['attributes'];
	value?: string | undefined;
	onChange?: (value: string) => void;
}) => {
	const onOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (props.onChange) {
			props.onChange(event.target.value);
		}
	};

	return (
		<>
			{props.attributes.options.map((option, index) => (
				<label key={index}>
					<input
						type={'radio'}
						key={index}
						value={option.value}
						checked={props.value === option.value}
						onChange={onOptionChange}
					/>
					{option.label}
				</label>
			))}
		</>
	);
};

const BaseRadio = forwardRef(
	(props: {
		attributes: Props['attributes'];
		fieldError?: string | null;
	}) => {
		const className = classNames('mrblx-label', {
			'is-error': !!props.fieldError,
		});

		if (props.attributes.labelPosition === 'none') {
			return (
				<>
					<Radios
						className={!!props.fieldError ? 'is-error' : undefined}
						attributes={props.attributes}
					/>
					<FieldText {...props} />
				</>
			);
		}

		return (
			<div className={className}>
				<div>
					{props.attributes.label}
					<RequiredIndicator
						isRequired={props.attributes.required}
						text={props.attributes.labelRequiredIndicator}
					/>
				</div>
				<Radios attributes={props.attributes} />
				<FieldText {...props} />
			</div>
		);
	}
);

export default BaseRadio;
