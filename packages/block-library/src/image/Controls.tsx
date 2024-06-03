import {InspectorAdvancedControls, InspectorControls} from '@wordpress/block-editor';
import {TextareaControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';

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

import { Props } from './types';

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
					{props.attributes.media?.url ?
						<TextareaControl
							label={__('Alternative Text')}
							value={props.attributes.media.alt ? props.attributes.media.alt : ''}
							onChange={alt => {
								const media = {...props.attributes.media, alt};
								props.setAttributes({media});
							}}
						/> : null
					}
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
