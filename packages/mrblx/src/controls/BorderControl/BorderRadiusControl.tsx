import { CSSProperties } from 'react';
import { __ } from '@wordpress/i18n';

import { BlockCSSProperties } from '../../types';
import BorderRadiusResponsiveControl from './BorderRadiusResponsiveControl';
import BorderRadiusBaseControl from './BorderRadiusBaseControl';
import ControlHeader from '../../components/ControlHeader/ControlHeader';
import { useState } from '@wordpress/element';
import { useGetPreviewDeviceType } from '../../hooks';
import { areAllBorderRadiiEqual, headerHint } from './utils';

export type BorderRadiusControlProps = {
	label?: string;
	attributes: BlockCSSProperties;
	setAttributes: (
		attributes: Partial<BorderRadiusControlProps['attributes']>
	) => void;
	isResponsive?: boolean;
	isLinkable?: boolean;
};

function calculateIsMixed(
	attributes: BlockCSSProperties,
	isResponsive: boolean,
	deviceType: string
) {
	if (isResponsive) {
		switch (deviceType) {
			case 'Tablet':
				return (
					attributes.tabletBorderTopRightRadius !==
						attributes.tabletBorderBottomRightRadius ||
					attributes.tabletBorderTopRightRadius !==
						attributes.tabletBorderBottomLeftRadius ||
					attributes.tabletBorderTopRightRadius !==
						attributes.tabletBorderTopLeftRadius
				);
			case 'Mobile':
				return (
					attributes.mobileBorderTopRightRadius !==
						attributes.mobileBorderBottomRightRadius ||
					attributes.mobileBorderTopRightRadius !==
						attributes.mobileBorderBottomLeftRadius ||
					attributes.mobileBorderTopRightRadius !==
						attributes.mobileBorderTopLeftRadius
				);
		}
	}
	return !areAllBorderRadiiEqual(attributes);
}

function showClear(
	attributes: BlockCSSProperties,
	isResponsive: boolean,
	deviceType: string
) {
	if (isResponsive) {
		switch (deviceType) {
			case 'Tablet':
				return (
					attributes.tabletBorderTopRightRadius !== undefined ||
					attributes.tabletBorderBottomRightRadius !== undefined ||
					attributes.tabletBorderTopLeftRadius !== undefined ||
					attributes.tabletBorderBottomLeftRadius !== undefined
				);
			case 'Mobile':
				return (
					attributes.mobileBorderTopRightRadius !== undefined ||
					attributes.mobileBorderBottomRightRadius !== undefined ||
					attributes.mobileBorderTopLeftRadius !== undefined ||
					attributes.mobileBorderBottomLeftRadius !== undefined
				);
		}
	}

	return (
		attributes.borderTopRightRadius !== undefined ||
		attributes.borderBottomRightRadius !== undefined ||
		attributes.borderTopLeftRadius !== undefined ||
		attributes.borderBottomLeftRadius !== undefined
	);
}

const BorderRadiusControl = (props: BorderRadiusControlProps) => {
	const deviceType = useGetPreviewDeviceType();
	const [isAdvanced, setIsAdvanced] = useState(false);
	const [isLinked, setIsLinked] = useState(true);
	const isMixed = calculateIsMixed(
		props.attributes,
		!!props.isResponsive,
		deviceType
	);

	function onClear() {
		if (deviceType === 'Tablet') {
			props.setAttributes({
				tabletBorderTopRightRadius: undefined,
				tabletBorderTopLeftRadius: undefined,
				tabletBorderBottomRightRadius: undefined,
				tabletBorderBottomLeftRadius: undefined,
			});
		} else if (deviceType === 'Mobile') {
			props.setAttributes({
				mobileBorderTopRightRadius: undefined,
				mobileBorderTopLeftRadius: undefined,
				mobileBorderBottomRightRadius: undefined,
				mobileBorderBottomLeftRadius: undefined,
			});
		} else {
			props.setAttributes({
				borderTopRightRadius: undefined,
				borderTopLeftRadius: undefined,
				borderBottomRightRadius: undefined,
				borderBottomLeftRadius: undefined,
			});
		}
	}

	return (
		<div className="mrblx--border-radius-control">
			<ControlHeader
				title={props.label}
				hint={
					isLinked
						? headerHint(
								isMixed,
								props.attributes.borderTopRightRadius
							)
						: ''
				}
				isAdvanced={isAdvanced}
				onAdvancedChange={setIsAdvanced}
				isLinked={isLinked}
				onLinkedChange={props.isLinkable ? setIsLinked : undefined}
				onClear={
					showClear(
						props.attributes,
						!!props.isResponsive,
						deviceType
					)
						? onClear
						: undefined
				}
				isResponsive={props.isResponsive}
			/>
			{props.isResponsive ? (
				<BorderRadiusResponsiveControl
					attributes={props.attributes}
					setAttributes={(attributes) =>
						props.setAttributes(attributes as CSSProperties)
					}
					isLinked={isLinked}
					isAdvanced={isAdvanced}
				/>
			) : (
				<BorderRadiusBaseControl
					attributes={props.attributes}
					setAttributes={(attributes) =>
						props.setAttributes(attributes as CSSProperties)
					}
					isLinked={isLinked}
					isAdvanced={isAdvanced}
				/>
			)}
		</div>
	);
};

BorderRadiusControl.defaultProps = {
	label: __('Border Radius'),
	isLinkable: true,
};

export default BorderRadiusControl;
