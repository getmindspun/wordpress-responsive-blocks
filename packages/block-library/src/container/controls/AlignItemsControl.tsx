import { __ } from '@wordpress/i18n';

import { SelectControl } from '@wordpress/components';

import {
	BlockCSSProperties,
	ControlHeader,
	DeviceTypeContainer,
	useGetPreviewDeviceType,
} from '@mindspun/wpx';

type AlignItemsProperties = Pick<
	BlockCSSProperties,
	'alignItems' | 'tabletAlignItems' | 'mobileAlignItems'
>;

const OPTIONS = [
	{ label: 'Default', value: 'default' },
	{ label: 'Start', value: 'start' },
	{ label: 'End', value: 'end' },
	{ label: 'Center', value: 'center' },
	{ label: 'Baseline', value: 'baseline' },
	{ label: 'Stretch', value: 'stretch' },
];

export function showClear(style: AlignItemsProperties, deviceType: string) {
	switch (deviceType) {
		case 'Tablet':
			return style.tabletAlignItems !== undefined;
		case 'Mobile':
			return style.mobileAlignItems !== undefined;
	}
	return style.alignItems !== undefined;
}

function alignItemsValue(direction: string | undefined) {
	return direction !== 'default'
		? (direction as AlignItemsProperties['alignItems'])
		: undefined;
}

const AlignItemsControl = (props: {
	attributes: AlignItemsProperties;
	setAttributes: (attributes: Partial<AlignItemsProperties>) => void;
}) => {
	const deviceType = useGetPreviewDeviceType();

	function onClear() {
		switch (deviceType) {
			case 'Tablet':
				props.setAttributes({ tabletAlignItems: undefined });
				break;
			case 'Mobile':
				props.setAttributes({ mobileAlignItems: undefined });
				break;
			default:
				props.setAttributes({ alignItems: undefined });
				break;
		}
	}

	return (
		<div className={'wpx--align-items-control'}>
			<ControlHeader
				title={__('Align Items')}
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
						props.attributes.alignItems
							? props.attributes.alignItems
							: 'default'
					}
					options={OPTIONS}
					onChange={(alignItems) =>
						props.setAttributes({
							alignItems: alignItemsValue(alignItems),
						})
					}
					__nextHasNoMarginBottom
				/>
			</DeviceTypeContainer>
			<DeviceTypeContainer deviceType={'Tablet'}>
				<SelectControl
					value={
						props.attributes.tabletAlignItems
							? props.attributes.tabletAlignItems
							: 'default'
					}
					options={OPTIONS}
					onChange={(tabletAlignItems) =>
						props.setAttributes({
							tabletAlignItems: alignItemsValue(tabletAlignItems),
						})
					}
					__nextHasNoMarginBottom
				/>
			</DeviceTypeContainer>
			<DeviceTypeContainer deviceType={'Mobile'}>
				<SelectControl
					value={
						props.attributes.mobileAlignItems
							? props.attributes.mobileAlignItems
							: 'default'
					}
					options={OPTIONS}
					onChange={(mobileAlignItems) =>
						props.setAttributes({
							mobileAlignItems: alignItemsValue(mobileAlignItems),
						})
					}
					__nextHasNoMarginBottom
				/>
			</DeviceTypeContainer>
		</div>
	);
};

export default AlignItemsControl;
