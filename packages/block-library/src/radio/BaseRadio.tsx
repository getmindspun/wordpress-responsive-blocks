import React from 'react';
import classNames from 'classnames';
import { forwardRef } from '@wordpress/element';

import RequiredIndicator from '~shared/components/field/RequiredIndicator';
import FieldText from '~shared/components/field/FieldText';

import type { Props } from './types';

const RadioInput = (props: {
	className?: string;
	attributes: Props['attributes'];
	name: string | undefined;
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
				<label key={index} className={'mrblx-option-content'}>
					<input
						type={'radio'}
						key={index}
						name={props.name}
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
		value?: string | undefined;
		onChange?: (value: string) => void;
	}) => {
		let name = props.attributes.name;
		if (!name && props.attributes.blockId) {
			name = props.attributes.blockId.substring(5, 11);
		}

		const className = classNames({
			'is-error': !!props.fieldError,
		});

		if (
			props.attributes.labelPosition === 'none' ||
			!props.attributes.label
		) {
			return (
				<>
					<RadioInput
						className={!!props.fieldError ? 'is-error' : undefined}
						attributes={props.attributes}
						name={name}
						onChange={props.onChange}
					/>
					<FieldText {...props} />
				</>
			);
		}

		return (
			<div className={className}>
				<div className={'mrblx-field-label'}>
					{props.attributes.label}
					<RequiredIndicator
						isRequired={props.attributes.required}
						text={props.attributes.labelRequiredIndicator}
					/>
				</div>
				<RadioInput
					name={name}
					attributes={props.attributes}
					value={props.value}
					onChange={props.onChange}
				/>
				<FieldText {...props} />
			</div>
		);
	}
);

export default BaseRadio;
