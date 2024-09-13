import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, TextControl } from '@wordpress/components';
import { layout, styles } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

import {
	ContainerContents,
	TabbedContainer,
	TabbedControl,
	WidthHeightControl,
} from '@mindspun/mrblx';

import StyleControls from '~shared/controls/button/StyleControls';
import { Props } from '../types';

const OPTIONS = [
	{ label: 'Submit', value: 'submit' },
	{ label: 'Reset', value: 'reset' },
];

const Controls = (props: Props) => {
	return (
		<InspectorControls>
			<div className={'wp-block-mindspun-submit--controls'}>
				<TabbedControl>
					<TabbedContainer key={'General'} icon={layout}>
						<ContainerContents>
							<SelectControl
								label={__('Type')}
								value={props.attributes.type}
								options={OPTIONS}
								onChange={(type) =>
									props.setAttributes({
										type: type as Props['attributes']['type'],
									})
								}
								__nextHasNoMarginBottom
							/>
							<TextControl
								label={__('Value')}
								value={
									props.attributes.value
										? props.attributes.value
										: ''
								}
								onChange={(value) =>
									props.setAttributes({
										value: value ? value : undefined,
									})
								}
								__nextHasNoMarginBottom
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
