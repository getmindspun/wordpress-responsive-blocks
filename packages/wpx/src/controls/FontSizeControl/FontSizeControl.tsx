import './FontSizeControl.scss';
import { BlockCSSProperties } from '../../types';
import { ControlHeader } from '../../components';
import FontSizeBaseControl from './FontSizeBaseControl';
import { useState } from '@wordpress/element';
import { useGetPreviewDeviceType } from '../../hooks';
import { headerHint, showClear } from './utils';
import { CSSProperties } from 'react';

export type FontSize = {
	name: string;
	fontSize: CSSProperties['fontSize'];
};

const DEFAULT_SIZES: FontSize[] = [
	{ name: 'XS', fontSize: '.875rem' },
	{ name: 'S', fontSize: '1rem' },
	{ name: 'M', fontSize: '1.125rem' },
	{ name: 'L', fontSize: '1.75rem' },
	{ name: 'XL', fontSize: '2.25rem' },
	{ name: 'XXL', fontSize: '3rem' },
];

export interface FontSizeControlProps {
	label?: string;
	attributes: Pick<
		BlockCSSProperties,
		'fontSize' | 'mobileFontSize' | 'tabletFontSize'
	>;
	setAttributes: (
		values: Partial<FontSizeControlProps['attributes']>
	) => void;
	fontSizes?: FontSize[];
	isResponsive?: boolean;
}

const FontSizeControl = (props: FontSizeControlProps) => {
	const deviceType = useGetPreviewDeviceType(props.isResponsive);
	const [isAdvanced, setIsAdvanced] = useState(false);
	const fontSizes =
		props.fontSizes && props.fontSizes.length > 0
			? props.fontSizes
			: DEFAULT_SIZES;

	function onClear() {
		if (deviceType === 'Tablet') {
			props.setAttributes({
				tabletFontSize: undefined,
			});
		} else if (deviceType === 'Mobile') {
			props.setAttributes({
				mobileFontSize: undefined,
			});
		} else {
			props.setAttributes({
				fontSize: undefined,
			});
		}
	}

	return (
		<div className="wpx--font-size-control">
			<ControlHeader
				title={props.label}
				hint={headerHint(props.attributes, deviceType)}
				isResponsive={props.isResponsive}
				isAdvanced={isAdvanced}
				onAdvancedChange={setIsAdvanced}
				onClear={
					showClear(props.attributes, deviceType)
						? onClear
						: undefined
				}
			/>
			{deviceType === 'Desktop' && (
				<FontSizeBaseControl
					fontSize={props.attributes.fontSize}
					onChange={(fontSize) => {
						props.setAttributes({ fontSize });
					}}
					fontSizes={fontSizes}
					isAdvanced={isAdvanced}
				/>
			)}
			{deviceType === 'Tablet' && (
				<FontSizeBaseControl
					fontSize={props.attributes.tabletFontSize}
					onChange={(tabletFontSize) => {
						props.setAttributes({ tabletFontSize });
					}}
					fontSizes={fontSizes}
					isAdvanced={isAdvanced}
				/>
			)}
			{deviceType === 'Mobile' && (
				<FontSizeBaseControl
					fontSize={props.attributes.mobileFontSize}
					onChange={(mobileFontSize) => {
						props.setAttributes({ mobileFontSize });
					}}
					fontSizes={fontSizes}
					isAdvanced={isAdvanced}
				/>
			)}
		</div>
	);
};

FontSizeControl.defaultProps = {
	label: 'Font Size',
};

export default FontSizeControl;
