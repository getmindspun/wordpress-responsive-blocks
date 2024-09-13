import { useDispatch, useSelect } from '@wordpress/data';
import React from 'react';
import { useCallback } from '@wordpress/element';

export default function useBlockState<T = React.Key>(key: string | number) {
	const dispatch = useDispatch('mrblx/block-data') as {
		setControlState: (key: string | number, value: T) => void;
	};

	const { controlState } = useSelect(
		(select) => {
			return {
				controlState: (
					select('mrblx/block-data') as {
						getControlState: (
							key: string | number
						) => T | undefined;
					}
				).getControlState(key),
			};
		},
		[key]
	);

	const setter = useCallback(
		(value: T) => {
			dispatch.setControlState(key, value);
		},
		[dispatch, key]
	);

	return [controlState, setter] as [T | undefined, (value: T) => void];
}
