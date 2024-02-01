import { __ } from '@wordpress/i18n';

import './ColorControl.scss';

import { BlockCSSProperties } from '../../types';
import ColorResponsiveControl from './ColorResponsiveControl';
import ColorBaseControl from './ColorBaseControl';
import { ControlHeader } from '../../components';

/* Defined in @wordpress/component but not exported. */
export type PopoverPlacement =
	| 'left'
	| 'right'
	| 'top'
	| 'bottom'
	| 'left-end'
	| 'left-start'
	| 'right-end'
	| 'right-start'
	| 'top-end'
	| 'top-start'
	| 'bottom-end'
	| 'bottom-start'
	| 'overlay';

export interface ColorControlProps {
	label?: string;
	attributes: Pick<
		BlockCSSProperties,
		'color' | 'tabletColor' | 'mobileColor'
	>;
	setAttributes: (
		attributes: Partial<ColorControlProps['attributes']>
	) => void;
	placement?: PopoverPlacement;
	isResponsive?: boolean;
	hideHeader?: boolean;
}

const ColorControl = (props: ColorControlProps) => {
	return (
		<div className="wpx--color-control">
			{props.isResponsive && !props.hideHeader && (
				<ControlHeader isResponsive={true} />
			)}
			{props.isResponsive ? (
				<ColorResponsiveControl {...props} label={props.label!} />
			) : (
				<ColorBaseControl
					label={
						props.label
							? props.label
							: ColorControl.defaultProps.label
					}
					value={props.attributes.color}
					onChange={(color) => {
						props.setAttributes({ ...props.attributes, color });
					}}
					placement={props.placement}
				/>
			)}
		</div>
	);
};

ColorControl.defaultProps = {
	label: __('Color'),
};

export default ColorControl;
