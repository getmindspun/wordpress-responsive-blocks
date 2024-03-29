import { Props } from './types';
import {
	InspectorAdvancedControls,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	BaseControls,
	BlockCSSProperties,
	BlockId,
	ContainerContents,
	ContainerControl,
	CustomCSSControl,
	MediaControl,
	WidthHeightControl,
} from '@mindspun/mrblx';

const Controls = (props: Props) => {
	return (
		<>
			<InspectorControls>
				<ContainerContents>
					<MediaControl
						attributes={props.attributes.media}
						setAttributes={(newMedia) => {
							props.setAttributes({
								media: {
									...props.attributes.media,
									...newMedia,
								},
							});
						}}
						isResponsive={true}
					/>
					<WidthHeightControl
						label={'Width'}
						propertyName={'width'}
						attributes={props.attributes.style}
						setAttributes={(style) => {
							props.setAttributes({
								style: { ...props.attributes.style, ...style },
							});
						}}
						isResponsive={true}
					/>
					<WidthHeightControl
						label={'Max Width'}
						propertyName={'maxWidth'}
						attributes={props.attributes.style}
						setAttributes={(style) => {
							props.setAttributes({
								style: { ...props.attributes.style, ...style },
							});
						}}
						isResponsive={true}
					/>
					<BaseControls
						attributes={
							props.attributes.style
								? props.attributes.style
								: ({} as BlockCSSProperties)
						}
						setAttributes={(style) => {
							props.setAttributes({
								style: { ...props.attributes.style, ...style },
							});
						}}
						options={{
							margin: { responsive: true },
						}}
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
			</InspectorControls>
			<InspectorAdvancedControls>
				<BlockId attributes={props.attributes} />
			</InspectorAdvancedControls>
		</>
	);
};

export default Controls;
