import React from 'react';
import {
	InspectorAdvancedControls,
	InspectorControls,
} from '@wordpress/block-editor';
import { layout, styles } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';



import {
	BlockId,
	ContainerContents,
	LinkControl,
	TabbedContainer,
	TabbedControl,
	ViewAll,
	WidthHeightControl,
} from '@mindspun/mrblx';

import { Props } from '../types';

import StyleControls from '~shared/controls/button/StyleControls';
import ButtonVariantControl from './ButtonVariantControl';
import CustomEventControl from './CustomEventControl';

const Controls = (props: Props) => {
	return (
		<>
			<InspectorControls>
				<div className={'wp-block-mindspun-button--controls'}>
					<TabbedControl>
						<TabbedContainer key={'General'} icon={layout}>
							<ContainerContents>
								<ButtonVariantControl
									attributes={props.attributes}
									setAttributes={props.setAttributes}
								/>
								<WidthHeightControl
									label={__('Width')}
									propertyName={'width'}
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
								<hr />
								<LinkControl
									attributes={props.attributes.link}
									setAttributes={(link) => {
										props.setAttributes({
											link: {
												...props.attributes.link,
												...link,
											},
										});
									}}
								/>
							</ContainerContents>
						</TabbedContainer>
						<TabbedContainer key={'Style'} icon={styles}>
							<StyleControls
								attributes={props.attributes}
								setAttributes={props.setAttributes}
							/>
						</TabbedContainer>
					</TabbedControl>
				</div>
			</InspectorControls>
			<InspectorAdvancedControls>
				<CustomEventControl
					attributes={props.attributes}
					setAttributes={props.setAttributes}
				/>
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
