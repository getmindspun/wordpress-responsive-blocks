import React from 'react';
import classNames from 'classnames';
import { forwardRef } from '@wordpress/element';

import RequiredIndicator from '~shared/components/field/RequiredIndicator';
import FieldText from '~shared/components/field/FieldText';

import type { Props } from './types';

const BaseCheckbox = forwardRef(
	(props: {
		attributes: Props['attributes'];
		checked: boolean;
		fieldError?: string | null;
		onChange?: (value: boolean) => void;
	}) => {
		let name = props.attributes.name;
		if (!name && props.attributes.blockId) {
			name = props.attributes.blockId.substring(5, 11);
		}

		const className = classNames({
			'is-error': !!props.fieldError,
		});

		function onChange() {
			if (props.onChange) {
				props.onChange(!props.checked);
			}
		}

		if (props.attributes.labelPosition === 'none') {
			return (
				<>
					<input
						className={!!props.fieldError ? 'is-error' : undefined}
						name={name}
						type={'checkbox'}
						autoFocus={!!props.attributes.autoFocus}
						onChange={onChange}
						checked={props.checked}
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
				<label className={'mrblx-checkbox-label'}>
					<input
						name={name}
						type={'checkbox'}
						autoFocus={!!props.attributes.autoFocus}
						checked={props.checked}
						onChange={onChange}
					/>
					{props.attributes.optionText}
				</label>
				<FieldText {...props} />
			</div>
		);
	}
);

export default BaseCheckbox;
