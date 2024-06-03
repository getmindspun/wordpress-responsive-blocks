import {
	InspectorAdvancedControls,
	InspectorControls,
} from '@wordpress/block-editor';

import { Props } from '../types';

import {
	BlockId,
	ContainerContents,
	GapControl,
	ViewAll,
} from '@mindspun/mrblx';
import React from 'react';

const Controls = (
	props: Props & {
		onMouseEnter?: () => void;
		onMouseLeave?: () => void;
	}
) => {
	return (
		<>
			<InspectorControls>
				<div
					className={'wp-block-mindspun-grid--controls'}
					onMouseEnter={props.onMouseEnter}
					onMouseLeave={props.onMouseLeave}
				>
					<ContainerContents>
						<GapControl
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
				</div>
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
