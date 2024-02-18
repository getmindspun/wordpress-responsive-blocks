import { __ } from '@wordpress/i18n';

import { SelectControl } from '@wordpress/components';

import {
	BlockCSSProperties,
	ControlHeader,
	DeviceTypeContainer,
	useGetPreviewDeviceType,
} from '@mindspun/mrblx';

type FlexDirectionProperties = Pick<
	BlockCSSProperties,
	'flexDirection' | 'tabletFlexDirection' | 'mobileFlexDirection'
>;

const OPTIONS = [
	{ label: 'Default', value: 'default' },
	{ label: 'Row', value: 'row' },
	{ label: 'Row-Reverse', value: 'row-reverse' },
	{ label: 'Column', value: 'column' },
	{ label: 'Column-Reverse', value: 'column-reverse' },
];

export function showClear(style: FlexDirectionProperties, deviceType: string) {
	switch (deviceType) {
		case 'Tablet':
			return style.tabletFlexDirection !== undefined;
		case 'Mobile':
			return style.mobileFlexDirection !== undefined;
	}
	return style.flexDirection !== undefined;
}

function flexDirectionValue(direction: string | undefined) {
	return direction !== 'default'
		? (direction as FlexDirectionProperties['flexDirection'])
		: undefined;
}

const FlexDirectionControl = (props: {
	attributes: FlexDirectionProperties;
	setAttributes: (attributes: Partial<FlexDirectionProperties>) => void;
}) => {
	const deviceType = useGetPreviewDeviceType();

	function onClear() {
		switch (deviceType) {
			case 'Tablet':
				props.setAttributes({ tabletFlexDirection: undefined });
				break;
			case 'Mobile':
				props.setAttributes({ mobileFlexDirection: undefined });
				break;
			default:
				props.setAttributes({ flexDirection: undefined });
				break;
		}
	}

	return (
		<div className={'mrblx--flex-direction-control'}>
			<ControlHeader
				title={__('Flex Direction')}
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
						props.attributes.flexDirection
							? props.attributes.flexDirection
							: 'default'
					}
					options={OPTIONS}
					onChange={(flexDirection) =>
						props.setAttributes({
							flexDirection: flexDirectionValue(flexDirection),
						})
					}
					__nextHasNoMarginBottom
				/>
			</DeviceTypeContainer>
			<DeviceTypeContainer deviceType={'Tablet'}>
				<SelectControl
					value={
						props.attributes.tabletFlexDirection
							? props.attributes.tabletFlexDirection
							: 'default'
					}
					options={OPTIONS}
					onChange={(tabletFlexDirection) =>
						props.setAttributes({
							tabletFlexDirection:
								flexDirectionValue(tabletFlexDirection),
						})
					}
					__nextHasNoMarginBottom
				/>
			</DeviceTypeContainer>
			<DeviceTypeContainer deviceType={'Mobile'}>
				<SelectControl
					value={
						props.attributes.mobileFlexDirection
							? props.attributes.mobileFlexDirection
							: 'default'
					}
					options={OPTIONS}
					onChange={(mobileFlexDirection) =>
						props.setAttributes({
							mobileFlexDirection:
								flexDirectionValue(mobileFlexDirection),
						})
					}
					__nextHasNoMarginBottom
				/>
			</DeviceTypeContainer>
		</div>
	);
};

export default FlexDirectionControl;
