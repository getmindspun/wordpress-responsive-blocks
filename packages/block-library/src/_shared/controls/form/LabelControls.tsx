import { __ } from '@wordpress/i18n';
import { SelectControl, TextControl } from '@wordpress/components';

import type { BlockCSSProperties } from '@mindspun/mrblx';
import {
	BaseControls,
	ContainerContents,
	ContainerControl,
} from '@mindspun/mrblx';

import type { LabelPosition } from '~shared/types';

type Attributes = {
	labelPosition: LabelPosition;
	labelRequiredIndicator: string | undefined;
	labelStyle: BlockCSSProperties;
	labelStyleError: BlockCSSProperties;
	labelStyleRequiredIndicator: BlockCSSProperties;
};

const LabelControls = (props: {
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
}) => {
	return (
		<>
			<ContainerContents>
				<SelectControl
					label={__('Position')}
					value={props.attributes.labelPosition}
					options={[
						{ label: 'Top', value: 'top' },
						{ label: 'Inline', value: 'inline' },
						{ label: 'None', value: 'none' },
					]}
					onChange={(labelPosition) =>
						props.setAttributes({
							labelPosition: labelPosition as LabelPosition,
						})
					}
					__nextHasNoMarginBottom
				/>
				<TextControl
					label={__('Required Indicator')}
					value={
						props.attributes.labelRequiredIndicator
							? props.attributes.labelRequiredIndicator
							: ''
					}
					onChange={(value) => {
						props.setAttributes({
							labelRequiredIndicator: value ? value : '',
						});
					}}
				></TextControl>
			</ContainerContents>
			<ContainerControl title={__('Style')}>
				<ContainerContents>
					<BaseControls
						attributes={props.attributes.labelStyle}
						setAttributes={(style) => {
							const labelStyle = {
								...props.attributes.labelStyle,
								...style,
							};
							props.setAttributes({ labelStyle });
						}}
						options={{
							color: { responsive: true },
							backgroundColor: { responsive: true },
							fontAppearance: true,
							fontSize: { responsive: true },
							textAlign: { responsive: true },
							letterCase: true,
							margin: { responsive: true },
							padding: { responsive: true },
						}}
					/>
				</ContainerContents>
			</ContainerControl>
			<ContainerControl title={__('Required Indicator')}>
				<ContainerContents>
					<BaseControls
						attributes={
							props.attributes.labelStyleRequiredIndicator
						}
						setAttributes={(style) => {
							const labelStyleRequiredIndicator = {
								...props.attributes.labelStyleRequiredIndicator,
								...style,
							};
							props.setAttributes({
								labelStyleRequiredIndicator,
							});
						}}
						options={{
							color: { responsive: true },
							backgroundColor: { responsive: true },
							fontAppearance: true,
							fontSize: { responsive: true },
							textAlign: { responsive: true },
							letterCase: true,
							margin: { responsive: true },
							padding: { responsive: true },
						}}
					/>
				</ContainerContents>
			</ContainerControl>
			<ContainerControl title={__('Error State')}>
				<ContainerContents>
					<BaseControls
						attributes={props.attributes.labelStyleError}
						setAttributes={(style) => {
							const labelStyleError = {
								...props.attributes.labelStyleError,
								...style,
							};
							props.setAttributes({ labelStyleError });
						}}
						options={{
							color: { responsive: true },
							backgroundColor: { responsive: true },
						}}
					/>
				</ContainerContents>
			</ContainerControl>
		</>
	);
};

export default LabelControls;
