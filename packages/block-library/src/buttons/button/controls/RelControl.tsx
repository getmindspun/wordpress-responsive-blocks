import { __ } from '@wordpress/i18n';

import { SelectControl } from '@wordpress/components';

import {
	ControlHeader,
	DeviceTypeContainer,
	useGetPreviewDeviceType,
} from '@mindspun/mrblx';
import { Props } from '../types';

const OPTIONS = [
	{ label: 'No Opener', value: 'noopener' },
	{ label: 'No Follow', value: 'nofollow' },
	{ label: 'Sponsored', value: 'sponsored' },
	{ label: 'User Generated Content', value: 'ugc' },
];

const RelControl = (props: {
	attributes: Props['attributes'];
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
}) => {
	return (
		<div className={'mrblx--rel-control'}>
			<ControlHeader title={__('rel Tag')} />
			<SelectControl
				multiple
				value={props.attributes.link.rel}
				options={OPTIONS}
				onChange={(rel) =>
					props.setAttributes({
						link: { ...props.attributes.link, rel },
					})
				}
				__nextHasNoMarginBottom
			/>
		</div>
	);
};

export default RelControl;
