import React, { CSSProperties } from 'react';

import LengthControl from '../LengthControl/LengthControl';

export type PaddingMultiControlProps = {
	title: string;
	attributes: Pick<
		CSSProperties,
		'paddingTop' | 'paddingRight' | 'paddingBottom' | 'paddingLeft'
	>;
	setAttributes: (
		attributes: Partial<PaddingMultiControlProps['attributes']>
	) => void;
	isAdvanced: boolean;
	isLinked: boolean;
	onLinkedChange?: (isLinked: boolean) => void;
};

const PaddingMultiControl = (props: PaddingMultiControlProps) => {
	return (
		<>
			<LengthControl
				title={'top'}
				key={'top'}
				value={props.attributes.paddingTop}
				onChange={(value) =>
					props.setAttributes({
						...props.attributes,
						paddingTop: value,
					})
				}
				onClear={
					props.attributes.paddingTop !== undefined
						? () =>
								props.setAttributes({
									...props.attributes,
									paddingTop: undefined,
								})
						: undefined
				}
				isAdvanced={props.isAdvanced}
			/>
			<LengthControl
				title={'right'}
				key={'right'}
				value={props.attributes.paddingRight}
				onChange={(value) =>
					props.setAttributes({
						...props.attributes,
						paddingRight: value,
					})
				}
				onClear={
					props.attributes.paddingRight !== undefined
						? () =>
								props.setAttributes({
									...props.attributes,
									paddingRight: undefined,
								})
						: undefined
				}
				isAdvanced={props.isAdvanced}
			/>
			<LengthControl
				title={'bottom'}
				key={'bottom'}
				value={props.attributes.paddingBottom}
				onChange={(value) =>
					props.setAttributes({
						...props.attributes,
						paddingBottom: value,
					})
				}
				onClear={
					props.attributes.paddingBottom !== undefined
						? () =>
								props.setAttributes({
									...props.attributes,
									paddingBottom: undefined,
								})
						: undefined
				}
				isAdvanced={props.isAdvanced}
			/>
			<LengthControl
				title={'left'}
				key={'left'}
				value={props.attributes.paddingLeft}
				onChange={(value) =>
					props.setAttributes({
						...props.attributes,
						paddingLeft: value,
					})
				}
				onClear={
					props.attributes.paddingLeft !== undefined
						? () =>
								props.setAttributes({
									...props.attributes,
									paddingLeft: undefined,
								})
						: undefined
				}
				isAdvanced={props.isAdvanced}
			/>
		</>
	);
};

export default PaddingMultiControl;
