import {
	InspectorAdvancedControls,
	InspectorControls,
} from '@wordpress/block-editor';
import { ToggleControl } from '@wordpress/components';

import {
	BlockAlignControl,
	BlockId,
	ContainerContents,
	ContainerControl,
	ControlGroup,
	CustomCSSControl,
} from '@mindspun/mrblx';

import { Props } from '../types';
import TabControls from './TabControls';
import ViewAll from '@mindspun/mrblx/src/components/ViewAll/ViewAll';
import React from 'react';

const Controls = (props: Props) => {
	return (
		<>
			<InspectorControls>
				<TabControls
					attributes={props.attributes}
					setAttributes={props.setAttributes}
				/>
				<ControlGroup
					title={'Header'}
					attributes={props.attributes.header}
					setAttributes={(header) => {
						props.setAttributes({
							header: { ...props.attributes.header, ...header },
						});
					}}
					options={{
						backgroundColor: true,
						padding: true,
						margin: true,
						border: true,
					}}
				>
					<BlockAlignControl
						attributes={props.attributes.header}
						setAttributes={(header) => {
							props.setAttributes({
								header: {
									...props.attributes.header,
									...header,
								},
							});
						}}
					/>
					<ToggleControl
						label="Stack Vertically on Mobile"
						checked={props.attributes.stackOnMobile}
						onChange={(isChecked) => {
							props.setAttributes({ stackOnMobile: isChecked });
						}}
					/>
				</ControlGroup>
				<ControlGroup
					title={'Content'}
					attributes={props.attributes.content}
					setAttributes={(content) => {
						props.setAttributes({
							content: {
								...props.attributes.content,
								...content,
							},
						});
					}}
					options={{
						color: true,
						backgroundColor: true,
						padding: true,
						margin: true,
						border: true,
					}}
				/>
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
				<ViewAll
					attributes={props.attributes.style}
					onClear={() => props.setAttributes({ style: {} })}
				/>
			</InspectorAdvancedControls>
		</>
	);
};

export default Controls;
