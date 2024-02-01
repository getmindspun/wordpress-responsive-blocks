import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

import './PositionControl.scss';
import { BlockCSSProperties } from '../../types';
import { useGetPreviewDeviceType } from '../../hooks';
import PositionBaseControl from './PositionBaseControl';
import ControlHeader from '../../components/ControlHeader/ControlHeader';

export type PositionControlProps = {
	label?: string;
	attributes: BlockCSSProperties;
	setAttributes: (attributes: BlockCSSProperties) => void;
	isResponsive?: boolean;
};

const PositionControl = (props: PositionControlProps) => {
	const deviceType = useGetPreviewDeviceType(props.isResponsive);
	const [isAdvanced, setIsAdvanced] = useState(false);

	return (
		<div className="wpx--position-control">
			<ControlHeader
				title={props.label || __('position')}
				isResponsive={props.isResponsive}
				isAdvanced={isAdvanced}
				onAdvancedChange={setIsAdvanced}
			/>
			{deviceType === 'Desktop' && (
				<PositionBaseControl
					attributes={props.attributes}
					setAttributes={(attributes) => {
						props.setAttributes({
							...props.attributes,
							...attributes,
						});
					}}
				/>
			)}
			{deviceType === 'Tablet' && (
				<PositionBaseControl
					attributes={{
						position: props.attributes.tabletPosition,
						top: props.attributes.tabletTop,
						right: props.attributes.tabletRight,
						bottom: props.attributes.tabletBottom,
						left: props.attributes.tabletLeft,
					}}
					setAttributes={(attributes) => {
						props.setAttributes({
							...props.attributes,
							tabletPosition: attributes.position,
							tabletTop: attributes.top,
							tabletRight: attributes.right,
							tabletBottom: attributes.bottom,
							tabletLeft: attributes.left,
						});
					}}
				/>
			)}
			{deviceType === 'Mobile' && (
				<PositionBaseControl
					attributes={{
						position: props.attributes.mobilePosition,
						top: props.attributes.mobileTop,
						right: props.attributes.mobileRight,
						bottom: props.attributes.mobileBottom,
						left: props.attributes.mobileLeft,
					}}
					setAttributes={(attributes) => {
						props.setAttributes({
							...props.attributes,
							mobilePosition: attributes.position,
							mobileTop: attributes.top,
							mobileRight: attributes.right,
							mobileBottom: attributes.bottom,
							mobileLeft: attributes.left,
						});
					}}
				/>
			)}
		</div>
	);
};

export default PositionControl;
