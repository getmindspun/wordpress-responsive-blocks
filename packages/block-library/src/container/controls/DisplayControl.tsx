import { __ } from '@wordpress/i18n';

import { SelectControl } from '@wordpress/components';

import {
	BlockCSSProperties,
	ControlHeader,
	DeviceTypeContainer,
	useGetPreviewDeviceType,
} from '@mindspun/mrblx';
import { CSSProperties } from 'react';

type DisplayProperties = Pick<
	BlockCSSProperties,
	'display' | 'tabletDisplay' | 'mobileDisplay'
>;

const OPTIONS = [
	{ label: 'Default', value: 'default' },
	{ label: 'Block', value: 'block' },
	{ label: 'Flex', value: 'flex' },
	{ label: 'Inline', value: 'inline' },
	{ label: 'Inline Block', value: 'inline-block' },
	{ label: 'Inline Flex', value: 'inline-flex' },
	{ label: 'Table', value: 'table' },
	{ label: 'Table Row', value: 'table-row' },
	{ label: 'Table Cell', value: 'table-cell' },
	{ label: 'None', value: 'none' },
];

export function showClear(style: DisplayProperties, deviceType: string) {
	switch (deviceType) {
		case 'Tablet':
			return style.tabletDisplay !== undefined;
		case 'Mobile':
			return style.mobileDisplay !== undefined;
	}
	return style.display !== undefined;
}

function displayValue(display: string): CSSProperties['display'] {
	return display !== 'default' ? display : undefined;
}

const DisplayControl = (props: {
	attributes: DisplayProperties;
	setAttributes: (attributes: Partial<DisplayProperties>) => void;
}) => {
	const deviceType = useGetPreviewDeviceType();

	function onClear() {
		switch (deviceType) {
			case 'Tablet':
				props.setAttributes({ tabletDisplay: undefined });
				break;
			case 'Mobile':
				props.setAttributes({ mobileDisplay: undefined });
				break;
			default:
				props.setAttributes({ display: undefined });
				break;
		}
	}

	return (
		<div className={'mrblx--display-control'}>
			<ControlHeader
				title={__('Display')}
				isResponsive={true}
				onClear={
					showClear(props.attributes, deviceType)
						? onClear
						: undefined
				}
			/>
			<DeviceTypeContainer deviceType={'Desktop'}>
				<SelectControl
					value={
						props.attributes.display
							? props.attributes.display
							: 'default'
					}
					options={OPTIONS}
					onChange={(display) =>
						props.setAttributes({ display: displayValue(display) })
					}
					__nextHasNoMarginBottom
				/>
			</DeviceTypeContainer>
			<DeviceTypeContainer deviceType={'Tablet'}>
				<SelectControl
					value={
						props.attributes.tabletDisplay
							? props.attributes.tabletDisplay
							: 'default'
					}
					options={OPTIONS}
					onChange={(tabletDisplay) =>
						props.setAttributes({
							tabletDisplay: displayValue(tabletDisplay),
						})
					}
					__nextHasNoMarginBottom
				/>
			</DeviceTypeContainer>
			<DeviceTypeContainer deviceType={'Mobile'}>
				<SelectControl
					value={
						props.attributes.mobileDisplay
							? props.attributes.mobileDisplay
							: 'default'
					}
					options={OPTIONS}
					onChange={(mobileDisplay) =>
						props.setAttributes({
							mobileDisplay: displayValue(mobileDisplay),
						})
					}
					__nextHasNoMarginBottom
				/>
			</DeviceTypeContainer>
		</div>
	);
};

export default DisplayControl;
