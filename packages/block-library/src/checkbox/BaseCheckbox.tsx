import React from 'react';
import { forwardRef } from '@wordpress/element';

import RequiredIndicator from '~shared/components/field/RequiredIndicator';
import FieldText from '~shared/components/field/FieldText';

import type { Props } from './types';

const CheckboxInput = forwardRef(
	(props: {
		attributes: Props['attributes'];
		disabled?: boolean;
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
				<div className={'mrblx-field-label'}>
					{props.attributes.label}
					{props.attributes.label ? (
						<RequiredIndicator
							isRequired={props.attributes.required}
							text={props.attributes.labelRequiredIndicator}
						/>
					) : null}
				</div>
				<label className={'mrblx-option-content'}>
					<input
						name={name}
						type={'checkbox'}
						autoFocus={!!props.attributes.autoFocus}
						onChange={onChange}
						checked={props.checked}
						disabled={props.disabled}
					/>
					{props.children ? props.children : props.attributes.content}
				</label>
				<FieldText {...props} />
			</div>
		);
	}
);

const BaseCheckbox = forwardRef(
	(props: {
		attributes: Props['attributes'];
		disabled?: boolean;
		checked: boolean;
		fieldError?: string | null;
		onChange?: (value: boolean) => void;
		children?: React.ReactNode;
	}) => {
		if (
			props.attributes.labelPosition === 'none' ||
			!props.attributes.label
		) {
			return <CheckboxInput {...props} />;
		}

		return <CheckboxInput {...props}>{props.children}</CheckboxInput>;
	}
);

export default BaseCheckbox;
