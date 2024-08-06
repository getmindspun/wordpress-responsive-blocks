import type { Props } from './types';
import { forwardRef } from '@wordpress/element';
import React from 'react';

const TextArea = forwardRef(
	(
		props: {
			className?: string;
			attributes: Props['attributes'];
		},
		ref: React.ForwardedRef<HTMLTextAreaElement>
	) => {
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
			/>
		);
	}
);

export default TextArea;
