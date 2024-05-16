import { CSSProperties } from 'react';

import LengthControl from '../LengthControl/LengthControl';

export type MarginMultiControlProps = {
	title: string;
	attributes: Pick<
		CSSProperties,
		'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft'
	>;
	setAttributes: (
		attributes: Partial<MarginMultiControlProps['attributes']>
	) => void;
	isAdvanced: boolean;
	isLinked: boolean;
	onLinkedChange?: (isLinked: boolean) => void;
};

const MarginMultiControl = (props: MarginMultiControlProps) => {
	return (
		<>
			<LengthControl
				title={'top'}
				key={'top'}
				value={props.attributes.marginTop}
				onChange={(value) =>
					props.setAttributes({
						...props.attributes,
						marginTop: value,
					})
				}
				onClear={
					props.attributes.marginTop !== undefined
						? () =>
								props.setAttributes({
									...props.attributes,
									marginTop: undefined,
								})
						: undefined
				}
				isAdvanced={props.isAdvanced}
				allowAuto={true}
			/>
			<LengthControl
				title={'right'}
				key={'right'}
				value={props.attributes.marginRight}
				onChange={(value) =>
					props.setAttributes({
						...props.attributes,
						marginRight: value,
					})
				}
				onClear={
					props.attributes.marginRight !== undefined
						? () =>
								props.setAttributes({
									...props.attributes,
									marginRight: undefined,
								})
						: undefined
				}
				isAdvanced={props.isAdvanced}
				allowAuto={true}
			/>
			<LengthControl
				title={'bottom'}
				key={'bottom'}
				value={props.attributes.marginBottom}
				onChange={(value) =>
					props.setAttributes({
						...props.attributes,
						marginBottom: value,
					})
				}
				onClear={
					props.attributes.marginBottom !== undefined
						? () =>
								props.setAttributes({
									...props.attributes,
									marginBottom: undefined,
								})
						: undefined
				}
				isAdvanced={props.isAdvanced}
				allowAuto={true}
			/>
			<LengthControl
				title={'left'}
				key={'left'}
				value={props.attributes.marginLeft}
				onChange={(value) =>
					props.setAttributes({
						...props.attributes,
						marginLeft: value,
					})
				}
				onClear={
					props.attributes.marginLeft !== undefined
						? () =>
								props.setAttributes({
									...props.attributes,
									marginLeft: undefined,
								})
						: undefined
				}
				isAdvanced={props.isAdvanced}
				allowAuto={true}
			/>
		</>
	);
};

export default MarginMultiControl;
