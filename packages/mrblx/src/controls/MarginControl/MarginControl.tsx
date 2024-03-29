import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import './MarginControl.scss';

import { BlockCSSProperties } from '../../types';
import MarginResponsiveControl from '../MarginControl/MarginResponsiveControl';
import MarginBaseControl from '../MarginControl/MarginBaseControl';
import ControlHeader from '../../components/ControlHeader/ControlHeader';
import { useGetPreviewDeviceType } from '../../hooks';
import { headerHint, showClear } from './utils';

export interface MarginControlProps {
	label?: string;
	attributes: BlockCSSProperties;
	setAttributes: (
		attributes: Partial<MarginControlProps['attributes']>
	) => void;
	isResponsive?: boolean;
}

const MarginControl = (props: MarginControlProps) => {
	const deviceType = useGetPreviewDeviceType(!!props.isResponsive);
	const [isLinked, setIsLinked] = useState(true);
	const [isAdvanced, setIsAdvanced] = useState(false);

	function onClear() {
		if (deviceType === 'Tablet') {
			props.setAttributes({
				tabletMarginTop: undefined,
				tabletMarginRight: undefined,
				tabletMarginBottom: undefined,
				tabletMarginLeft: undefined,
			});
		} else if (deviceType === 'Mobile') {
			props.setAttributes({
				mobileMarginTop: undefined,
				mobileMarginRight: undefined,
				mobileMarginBottom: undefined,
				mobileMarginLeft: undefined,
			});
		} else {
			props.setAttributes({
				marginTop: undefined,
				marginRight: undefined,
				marginBottom: undefined,
				marginLeft: undefined,
			});
		}
	}

	return (
		<div className="mrblx--margin-control">
			<ControlHeader
				title={props.label}
				hint={isLinked ? headerHint(props.attributes, deviceType) : ''}
				isLinked={isLinked}
				onLinkedChange={setIsLinked}
				isAdvanced={isAdvanced}
				onAdvancedChange={setIsAdvanced}
				isResponsive={props.isResponsive}
				onClear={
					showClear(props.attributes, deviceType)
						? onClear
						: undefined
				}
			/>
			{props.isResponsive ? (
				<MarginResponsiveControl
					{...props}
					isAdvanced={isAdvanced}
					isLinked={isLinked}
				/>
			) : (
				<MarginBaseControl
					attributes={props.attributes}
					setAttributes={props.setAttributes}
					isAdvanced={isAdvanced}
					isLinked={isLinked}
				/>
			)}
		</div>
	);
};

MarginControl.defaultProps = {
	label: __('Margin'),
};

export default MarginControl;
