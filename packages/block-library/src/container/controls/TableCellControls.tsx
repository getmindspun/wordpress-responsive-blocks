import { __ } from '@wordpress/i18n';

import { SelectControl } from '@wordpress/components';

import {
	BlockCSSProperties,
	ControlHeader,
	DeviceTypeContainer,
	useGetPreviewDeviceType,
} from '@mindspun/mrblx';

type TableControlProperties = Pick<
	BlockCSSProperties,
	'verticalAlign' | 'tabletVerticalAlign' | 'mobileVerticalAlign'
>;

const OPTIONS = [
	{ label: 'Default', value: 'default' },
	{ label: 'Baseline', value: 'baseline' },
	{ label: 'Top', value: 'top' },
	{ label: 'Middle', value: 'middle' },
	{ label: 'Bottom', value: 'bottom' },
];

export function showClear(style: TableControlProperties, deviceType: string) {
	switch (deviceType) {
		case 'Tablet':
			return style.tabletVerticalAlign !== undefined;
		case 'Mobile':
			return style.mobileVerticalAlign !== undefined;
	}
	return style.verticalAlign !== undefined;
}

function verticalAlignValue(verticalAlign: string | undefined) {
	return verticalAlign !== 'default'
		? (verticalAlign as TableControlProperties['verticalAlign'])
		: undefined;
}

const TableCellControls = (props: {
	attributes: TableControlProperties;
	setAttributes: (attributes: Partial<TableControlProperties>) => void;
}) => {
	const deviceType = useGetPreviewDeviceType();

	function onClear() {
		switch (deviceType) {
			case 'Tablet':
				props.setAttributes({ tabletVerticalAlign: undefined });
				break;
			case 'Mobile':
				props.setAttributes({ mobileVerticalAlign: undefined });
				break;
			default:
				props.setAttributes({ verticalAlign: undefined });
				break;
		}
	}

	return (
		<>
			<hr />
			<div className={'mrblx--table-control'}>
				<ControlHeader
					title={__('Vertical Align')}
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
							props.attributes.verticalAlign
								? (props.attributes.verticalAlign as string)
								: 'default'
						}
						options={OPTIONS}
						onChange={(flexDirection) =>
							props.setAttributes({
								verticalAlign:
									verticalAlignValue(flexDirection),
							})
						}
						__nextHasNoMarginBottom
					/>
				</DeviceTypeContainer>
				<DeviceTypeContainer deviceType={'Tablet'}>
					<SelectControl
						value={
							props.attributes.tabletVerticalAlign
								? (props.attributes
										.tabletVerticalAlign as string)
								: 'default'
						}
						options={OPTIONS}
						onChange={(tabletVerticalAlign) =>
							props.setAttributes({
								tabletVerticalAlign:
									verticalAlignValue(tabletVerticalAlign),
							})
						}
						__nextHasNoMarginBottom
					/>
				</DeviceTypeContainer>
				<DeviceTypeContainer deviceType={'Mobile'}>
					<SelectControl
						value={
							props.attributes.mobileVerticalAlign
								? (props.attributes
										.mobileVerticalAlign as string)
								: 'default'
						}
						options={OPTIONS}
						onChange={(mobileVerticalAlign) =>
							props.setAttributes({
								mobileVerticalAlign:
									verticalAlignValue(mobileVerticalAlign),
							})
						}
						__nextHasNoMarginBottom
					/>
				</DeviceTypeContainer>
			</div>
		</>
	);
};

export default TableCellControls;
