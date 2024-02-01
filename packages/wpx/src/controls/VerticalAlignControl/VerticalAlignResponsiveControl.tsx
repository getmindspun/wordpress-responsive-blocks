import './VerticalAlignControl.scss';

import { useGetPreviewDeviceType } from '../../hooks';
import VerticalAlignBaseControl from './VerticalAlignBaseControl';
import { VerticalAlignControlProps } from './VerticalAlignControl';

// WARNING: Vertical alignment is not yet handled by buildCSS.

const VerticalResponsiveAlignControl = (props: VerticalAlignControlProps) => {
	const deviceType = useGetPreviewDeviceType();

	return (
		<>
			{deviceType === 'Desktop' && (
				<VerticalAlignBaseControl
					verticalAlign={props.attributes.verticalAlign}
					onChange={(verticalAlign) => {
						props.setAttributes({
							...props.attributes,
							verticalAlign,
						});
					}}
					options={props.options!}
				/>
			)}
			{deviceType === 'Tablet' && (
				<VerticalAlignBaseControl
					verticalAlign={props.attributes.tabletVerticalAlign}
					onChange={(tabletVerticalAlign) => {
						props.setAttributes({
							...props.attributes,
							tabletVerticalAlign,
						});
					}}
					options={props.options!}
				/>
			)}
			{deviceType === 'Mobile' && (
				<VerticalAlignBaseControl
					verticalAlign={props.attributes.mobileVerticalAlign}
					onChange={(mobileVerticalAlign) => {
						props.setAttributes({
							...props.attributes,
							mobileVerticalAlign,
						});
					}}
					options={props.options!}
				/>
			)}
		</>
	);
};

export default VerticalResponsiveAlignControl;
