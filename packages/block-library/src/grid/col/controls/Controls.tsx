import {
	InspectorAdvancedControls,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	BaseControls,
	BlockCSSProperties,
	BlockId,
	ContainerContents,
	ViewAll,
} from '@mindspun/mrblx';

import { Props } from '../types';
import ColspanControl from './ColspanControl';
import React from 'react';

const Controls = (props: Props) => {
	return (
		<>
			<InspectorControls>
				<ContainerContents>
					<ColspanControl
						attributes={props.attributes.colspan}
						setAttributes={(colspan) => {
							props.setAttributes({
								colspan: {
									...props.attributes.colspan,
									...colspan,
								},
							});
						}}
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
							padding: { responsive: true },
						}}
					/>
				</ContainerContents>
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
