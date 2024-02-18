import { __ } from '@wordpress/i18n';

import { CSSProperties } from 'react';
import { SelectControl } from '@wordpress/components';

const OPTIONS = [
	{ label: 'Default', value: 'default' },
	{ label: 'Cover', value: 'cover' },
	{ label: 'Contain', value: 'contain' },
	{ label: 'Auto', value: 'auto' },
];

function backgroundSizeValue(
	backgroundSize: string
): CSSProperties['backgroundSize'] {
	return backgroundSize !== 'default' ? backgroundSize : undefined;
}

const BackgroundSizeControl = (props: {
	value: CSSProperties['backgroundSize'];
	onChange: (value: CSSProperties['backgroundSize']) => void;
}) => {
	return (
		<div className={'mrblx--background-size-control'}>
			<SelectControl
				label={__('Background size')}
				value={props.value ? (props.value as string) : 'default'}
				options={OPTIONS}
				onChange={(value) => props.onChange(backgroundSizeValue(value))}
				__nextHasNoMarginBottom
			/>
		</div>
	);
};

export default BackgroundSizeControl;
