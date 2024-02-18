import { __ } from '@wordpress/i18n';

import { SelectControl } from '@wordpress/components';

import {
	ControlHeader,
	DeviceTypeContainer,
	useGetPreviewDeviceType,
} from '@mindspun/mrblx';
import { ButtonVariant, Props } from '../types';

const OPTIONS = [
	{ label: 'Primary', value: 'primary' },
	{ label: 'Outline', value: 'outline' },
	{ label: 'Link', value: 'link' },
];

const ButtonVariantControl = (props: {
	attributes: Props['attributes'];
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
}) => {
	return (
		<div className={'mrblx--button-variant-control'}>
			<ControlHeader title={__('Button Type')} />
			<SelectControl
				value={props.attributes.variant}
				options={OPTIONS}
				onChange={(variant) =>
					props.setAttributes({
						variant: variant as ButtonVariant | undefined,
					})
				}
				__nextHasNoMarginBottom
			/>
		</div>
	);
};

export default ButtonVariantControl;
