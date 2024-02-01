import { __ } from '@wordpress/i18n';

import './JustifyContentControl.scss';
import { ControlHeader } from '../../components';
import { JustifyContent, BlockCSSProperties } from '../../types';
import JustifyContentResponsiveControl from './JustifyContentResponsiveControl';
import JustifyContentBaseControl from './JustifyContentBaseControl';

export type JustifyContentControlProps = {
	label?: string;
	options?: JustifyContent[];
	attributes: BlockCSSProperties;
	setAttributes: (
		attributes: Partial<JustifyContentControlProps['attributes']>
	) => void;
	isResponsive?: boolean;
};

const JustifyContentControl = (props: JustifyContentControlProps) => {
	return (
		<div className="wpx--justify-content-control">
			<ControlHeader
				title={props.label}
				isResponsive={props.isResponsive}
			/>
			{props.isResponsive ? (
				<JustifyContentResponsiveControl {...props} />
			) : (
				<JustifyContentBaseControl
					label={props.label}
					options={props.options!}
					justifyContent={props.attributes.justifyContent}
					onChange={(justifyContent) => {
						props.setAttributes({
							...props.attributes,
							justifyContent,
						});
					}}
				/>
			)}
		</div>
	);
};

JustifyContentControl.defaultProps = {
	label: __('Justify Content'),
	options: [
		'left',
		'center',
		'right',
		'space-between',
		'stretch',
	] as JustifyContent[],
};

export default JustifyContentControl;
