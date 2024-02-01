import './BorderControl.scss';

import { BlockCSSProperties } from '../../types';
import ControlHeader from '../../components/ControlHeader/ControlHeader';
import BorderBaseControl from './BorderBaseControl';
import BorderResponsiveControl from './BorderResponsiveControl';
import BorderRadiusControl from './BorderRadiusControl';
import { useGetPreviewDeviceType } from '../../hooks';
import { showClear } from './utils';

export type BorderControlProps = {
	label?: string;
	attributes: BlockCSSProperties;
	setAttributes: (
		attributes: Partial<BorderControlProps['attributes']>
	) => void;
	isResponsive?: boolean;
	disableRadiusControl?: boolean;
};

const BorderControl = (props: BorderControlProps) => {
	const deviceType = useGetPreviewDeviceType(!!props.isResponsive);

	function onClear() {
		if (deviceType === 'Tablet') {
			props.setAttributes({
				tabletBorderTop: undefined,
				tabletBorderRight: undefined,
				tabletBorderBottom: undefined,
				tabletBorderLeft: undefined,
			});
		} else if (deviceType === 'Mobile') {
			props.setAttributes({
				mobileBorderTop: undefined,
				mobileBorderRight: undefined,
				mobileBorderBottom: undefined,
				mobileBorderLeft: undefined,
			});
		} else {
			props.setAttributes({
				borderTop: undefined,
				borderRight: undefined,
				borderBottom: undefined,
				borderLeft: undefined,
			});
		}
	}

	return (
		<div className="wpx--border-control">
			<ControlHeader
				title={props.label}
				isResponsive={props.isResponsive}
				onClear={
					showClear(props.attributes, deviceType)
						? onClear
						: undefined
				}
			/>
			{props.isResponsive ? (
				<BorderResponsiveControl {...props} />
			) : (
				<BorderBaseControl
					attributes={props.attributes}
					setAttributes={props.setAttributes}
				/>
			)}
			{!props.disableRadiusControl && (
				<BorderRadiusControl
					attributes={props.attributes}
					setAttributes={props.setAttributes}
				/>
			)}
		</div>
	);
};

export default BorderControl;
