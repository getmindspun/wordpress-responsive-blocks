import { ReactNode } from 'react';

import './BaseControls.scss';

import {
	BorderControl,
	ColorControl,
	FontAppearanceControl,
	FontSizeControl,
	LetterCaseControl,
	MarginControl,
	PaddingControl,
	TextAlignControl,
} from './controls';

import { BlockCSSProperties } from './types';
import { ColorsGroup } from './components';

type Option = {
	responsive?: boolean;
	label?: string;
};

type CreateControlGroupOptions = {
	color?: boolean | Option;
	backgroundColor?: boolean | Option;
	fontSize?: boolean | Option;
	textAlign?: boolean | Option;
	fontAppearance?: boolean;
	letterCase?: boolean;
	margin?: boolean | Option;
	padding?: boolean | Option;
	border?: boolean | (Option & { disableRadiusControl?: boolean });
	[key: string]: any;
};

const DEFAULT_OPTIONS: CreateControlGroupOptions = {
	color: true,
	backgroundColor: true,
	fontSize: true,
	textAlign: true,
	fontAppearance: true,
	letterCase: true,
	margin: true,
	padding: true,
	border: true,
};

export type BaseControlsProps = {
	attributes: BlockCSSProperties;
	setAttributes: (value: Partial<BaseControlsProps['attributes']>) => void;
	options?: CreateControlGroupOptions;
	children?: ReactNode;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
};

function isResponsive(value: boolean | Option | undefined): boolean {
	// noinspection PointlessBooleanExpressionJS
	return !!(value ? (value as Option).responsive : false);
}

function label(
	value: boolean | Option | undefined,
	defaultValue: any = undefined
): string | undefined {
	return (value as Option).label ? (value as Option).label : defaultValue;
}

function createColorGroup(
	attributes: BlockCSSProperties,
	setAttributes: (value: Partial<BlockCSSProperties>) => void,
	options: CreateControlGroupOptions
) {
	if (options.color || options.backgroundColor) {
		const responsive =
			isResponsive(options.color) ||
			isResponsive(options.backgroundColor);
		return (
			<ColorsGroup isResponsive={responsive}>
				{options.color && (
					<ColorControl
						label={'Color'}
						attributes={attributes}
						setAttributes={setAttributes}
						isResponsive={responsive}
						hideHeader={true}
					/>
				)}
				{options.backgroundColor && (
					<ColorControl
						label={'Background'}
						attributes={{
							color: attributes.backgroundColor,
							tabletColor: attributes.tabletBackgroundColor,
							mobileColor: attributes.mobileBackgroundColor,
						}}
						setAttributes={(newAttributes) => {
							setAttributes({
								backgroundColor: newAttributes.color,
								tabletBackgroundColor:
									newAttributes.tabletColor,
								mobileBackgroundColor:
									newAttributes.mobileColor,
							});
						}}
						isResponsive={responsive}
						hideHeader={true}
					/>
				)}
			</ColorsGroup>
		);
	}
}

const BaseControls = (props: BaseControlsProps) => {
	const options = props.options ? props.options : DEFAULT_OPTIONS;

	return (
		<div className={'mrblx--base-controls'}>
			{props.children}
			{createColorGroup(props.attributes, props.setAttributes, options)}
			{options.textAlign && (
				<TextAlignControl
					label={label(options.textAlign, 'Text Align')}
					attributes={props.attributes}
					setAttributes={props.setAttributes}
					isResponsive={isResponsive(options.textAlign)}
				/>
			)}
			{options.fontSize && (
				<FontSizeControl
					attributes={props.attributes}
					setAttributes={props.setAttributes}
					isResponsive={isResponsive(options.fontSize)}
				/>
			)}
			{options.fontAppearance && (
				<FontAppearanceControl
					attributes={props.attributes}
					setAttributes={props.setAttributes}
				/>
			)}
			{options.letterCase && (
				<LetterCaseControl
					textTransform={props.attributes.textTransform}
					onChange={(textTransform) => {
						props.setAttributes({ textTransform });
					}}
				/>
			)}
			{options.margin && (
				<MarginControl
					attributes={props.attributes}
					setAttributes={props.setAttributes}
					isResponsive={isResponsive(options.margin)}
				/>
			)}
			{options.padding && (
				<PaddingControl
					attributes={props.attributes}
					setAttributes={props.setAttributes}
					isResponsive={isResponsive(options.padding)}
				/>
			)}
			{options.border && (
				<BorderControl
					label="Border"
					attributes={props.attributes}
					setAttributes={props.setAttributes}
					isResponsive={isResponsive(options.border)}
					disableRadiusControl={
						(options.border as { disableRadiusControl: boolean })
							.disableRadiusControl
					}
				/>
			)}
		</div>
	);
};

export default BaseControls;
