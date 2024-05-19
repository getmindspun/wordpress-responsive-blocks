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
	'tableLayout' | 'tabletTableLayout' | 'mobileTableLayout'
>;

const OPTIONS = [
	{ label: 'Default', value: 'default' },
	{ label: 'Auto', value: 'auto' },
	{ label: 'Fixed', value: 'fixed' },
];

export function showClear(style: TableControlProperties, deviceType: string) {
	switch (deviceType) {
		case 'Tablet':
			return style.tabletTableLayout !== undefined;
		case 'Mobile':
			return style.mobileTableLayout !== undefined;
	}
	return style.tableLayout !== undefined;
}

function tableLayoutValue(tableLayout: string | undefined) {
	return tableLayout !== 'default'
		? (tableLayout as TableControlProperties['tableLayout'])
		: undefined;
}

const TableControls = (props: {
	attributes: TableControlProperties;
	setAttributes: (attributes: Partial<TableControlProperties>) => void;
}) => {
	const deviceType = useGetPreviewDeviceType();

	function onClear() {
		switch (deviceType) {
			case 'Tablet':
				props.setAttributes({ tabletTableLayout: undefined });
				break;
			case 'Mobile':
				props.setAttributes({ mobileTableLayout: undefined });
				break;
			default:
				props.setAttributes({ tableLayout: undefined });
				break;
		}
	}

	return (
		<>
			<hr />
			<div className={'mrblx--table-control'}>
				<ControlHeader
					title={__('Table Layout')}
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
							props.attributes.tableLayout
								? (props.attributes.tableLayout as string)
								: 'default'
						}
						options={OPTIONS}
						onChange={(flexDirection) =>
							props.setAttributes({
								tableLayout: tableLayoutValue(flexDirection),
							})
						}
						__nextHasNoMarginBottom
					/>
				</DeviceTypeContainer>
				<DeviceTypeContainer deviceType={'Tablet'}>
					<SelectControl
						value={
							props.attributes.tabletTableLayout
								? (props.attributes.tabletTableLayout as string)
								: 'default'
						}
						options={OPTIONS}
						onChange={(tabletTableLayout) =>
							props.setAttributes({
								tabletTableLayout:
									tableLayoutValue(tabletTableLayout),
							})
						}
						__nextHasNoMarginBottom
					/>
				</DeviceTypeContainer>
				<DeviceTypeContainer deviceType={'Mobile'}>
					<SelectControl
						value={
							props.attributes.mobileTableLayout
								? (props.attributes.mobileTableLayout as string)
								: 'default'
						}
						options={OPTIONS}
						onChange={(mobileTableLayout) =>
							props.setAttributes({
								mobileTableLayout:
									tableLayoutValue(mobileTableLayout),
							})
						}
						__nextHasNoMarginBottom
					/>
				</DeviceTypeContainer>
			</div>
		</>
	);
};

export default TableControls;
