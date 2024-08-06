import React from 'react';
import classNames from 'classnames';
import { forwardRef } from '@wordpress/element';

import RequiredIndicator from '~shared/components/field/RequiredIndicator';
import FieldText from '~shared/components/field/FieldText';

import type { Props } from './types';

const CheckboxInput = forwardRef(
	(props: {
		attributes: Props['attributes'];
		checked: boolean;
		fieldError?: string | null;
		onChange?: (value: boolean) => void;
		children?: React.ReactNode;
	}) => {
		let name = props.attributes.name;
		if (!name && props.attributes.blockId) {
			name = props.attributes.blockId.substring(5, 11);
		}

		function onChange() {
			if (props.onChange) {
				props.onChange(!props.checked);
			}
		}

		return (
			<div className={props.fieldError ? 'is-error' : undefined}>
				{props.children}
				<label className={'mrblx-checkbox-label'}>
					<input
						name={name}
						type={'checkbox'}
						autoFocus={!!props.attributes.autoFocus}
						onChange={onChange}
						checked={props.checked}
					/>
					{props.attributes.optionContent}
				</label>
				<FieldText {...props} />
			</div>
		);
	}
);

const BaseCheckbox = forwardRef(
	(props: {
		attributes: Props['attributes'];
		checked: boolean;
		fieldError?: string | null;
		onChange?: (value: boolean) => void;
	}) => {
		const className = classNames({
			'is-error': !!props.fieldError,
		});

		if (
			props.attributes.labelPosition === 'none' ||
			!props.attributes.label
		) {
			return <CheckboxInput {...props} />;
		}

		return (
			<CheckboxInput {...props}>
				<div className={'mrblx-field-label'}>
					{props.attributes.label}
					<RequiredIndicator
						isRequired={props.attributes.required}
						text={props.attributes.labelRequiredIndicator}
					/>
				</div>
			</CheckboxInput>
		);
	}
);

export default BaseCheckbox;
