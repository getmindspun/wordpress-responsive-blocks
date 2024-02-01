import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import {
	BackgroundColorControl,
	BlockCSSProperties,
	ColorsGroup,
	ContainerContents,
	ContainerControl,
	CustomCSSControl,
	GapControl,
	JustifyContentControl,
	MarginControl,
	PaddingControl,
} from '@mindspun/wpx';

import { Props } from './types';

const Controls = (props: Props) => {
	return (
		<InspectorControls>
			<div className={'wp-block-mindspun-buttons--controls'}>
				<ContainerContents>
					<JustifyContentControl
						attributes={props.attributes.style}
						setAttributes={(style) => {
							props.setAttributes({
								style: { ...props.attributes.style, ...style },
							});
						}}
						options={['left', 'center', 'right', 'space-between']}
						isResponsive={true}
					/>
					<ToggleControl
						label={__('Allow to wrap to multiple lines.')}
						checked={
							props.attributes.style.flexWrap === undefined ||
							props.attributes.style.flexWrap === 'wrap'
						}
						onChange={(isChecked) => {
							const style = {
								...props.attributes.style,
								flexWrap: isChecked
									? undefined
									: ('nowrap' as BlockCSSProperties['flexWrap']),
							};
							props.setAttributes({ style });
						}}
					/>
					<ColorsGroup isResponsive={true}>
						<BackgroundColorControl
							attributes={props.attributes.style}
							setAttributes={(style) => {
								props.setAttributes({
									style: {
										...props.attributes.style,
										...style,
									},
								});
							}}
							isResponsive={true}
							hideHeader={true}
						/>
					</ColorsGroup>
					<GapControl
						attributes={props.attributes.style}
						setAttributes={(style) => {
							props.setAttributes({
								style: { ...props.attributes.style, ...style },
							});
						}}
						isResponsive={true}
					/>
					<MarginControl
						attributes={props.attributes.style}
						setAttributes={(style) => {
							props.setAttributes({
								style: { ...props.attributes.style, ...style },
							});
						}}
						isResponsive={true}
					/>
					<PaddingControl
						attributes={props.attributes.style}
						setAttributes={(style) => {
							props.setAttributes({
								style: { ...props.attributes.style, ...style },
							});
						}}
						isResponsive={true}
					/>
				</ContainerContents>
				<ContainerControl title={'Custom CSS'}>
					<ContainerContents>
						<CustomCSSControl
							blockId={props.attributes.blockId}
							attributes={props.attributes.style}
							setAttributes={(style) => {
								props.setAttributes({
									style: {
										...props.attributes.style,
										...style,
									},
								});
							}}
							isResponsive={true}
						/>
					</ContainerContents>
				</ContainerControl>
			</div>
		</InspectorControls>
	);
};

export default Controls;
