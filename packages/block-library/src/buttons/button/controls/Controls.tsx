import { InspectorControls } from '@wordpress/block-editor';
import { layout, styles } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

import {
	ContainerContents,
	LinkControl,
	TabbedContainer,
	TabbedControl,
	WidthHeightControl,
} from '@mindspun/mrblx';

import { Props } from '../types';
import StyleControls from './StyleControls';
import ButtonVariantControl from './ButtonVariantControl';

const Controls = (props: Props) => {
	return (
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
	);
};

export default Controls;
