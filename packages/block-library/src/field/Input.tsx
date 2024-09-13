import type { Props } from './types';
import { forwardRef } from '@wordpress/element';
import React from 'react';

const Input = forwardRef(
	(
		props: {
			className?: string;
			attributes: Props['attributes'];
		},
		ref: React.ForwardedRef<HTMLInputElement>
	) => {
		const size = props.attributes.inputSize
			? props.attributes.inputSize
			: 20;

		return (
			<input
				className={props.className}
				name={props.attributes.name ? props.attributes.name : undefined}
				type={props.attributes.type ? props.attributes.type : 'text'}
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
				size={size}
				ref={ref}
			/>
		);
	}
);

export default Input;
