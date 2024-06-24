import { CSSProperties } from 'react';

export type BlockAlign = 'left' | 'center' | 'right' | 'wide' | 'full';
export type JustifyContent =
	| 'left'
	| 'center'
	| 'right'
	| 'space-between'
	| 'stretch';
export type VerticalAlign = 'top' | 'middle' | 'bottom' | 'stretch';

export interface BlockCSSProperties extends CSSProperties {
	blockAlign?: BlockAlign;
	verticalAlign?: CSSProperties['verticalAlign'] | 'stretch';
	borderTopHover?: CSSProperties['borderTop'];
	borderRightHover?: CSSProperties['borderRight'];
	borderBottomHover?: CSSProperties['borderBottom'];
	borderLeftHover?: CSSProperties['borderLeft'];
	customCSS?: string;

	colorHover?: CSSProperties['color'];
	backgroundColorHover?: CSSProperties['backgroundColor'];

	tabletBlockAlign?: BlockAlign;
	tabletCustomCSS?: string;
	tabletAccentColor?: CSSProperties['accentColor'];
	tabletAlignItems?: CSSProperties['alignItems'];
	tabletBackgroundColorHover?: CSSProperties['backgroundColor'];
	tabletBoxShadow?: CSSProperties['boxShadow'];
	tabletColorHover?: CSSProperties['color'];
	tabletDisplay?: CSSProperties['display'];
	tabletFlexBasis?: CSSProperties['flexBasis'];
	tabletFlexDirection?: CSSProperties['flexDirection'];
	tabletFlexGrow?: CSSProperties['flexGrow'];
	tabletFlexShrink?: CSSProperties['flexShrink'];
	tabletFontSize?: CSSProperties['fontSize'];
	tabletGap?: CSSProperties['gap'];
	tabletTableLayout?: CSSProperties['tableLayout'];
	tabletTextAlign?: CSSProperties['textAlign'];
	tabletBackgroundImage?: CSSProperties['backgroundImage'];
	tabletBackgroundSize?: CSSProperties['backgroundSize'];
	tabletVerticalAlign?: CSSProperties['verticalAlign'] | 'stretch';
	tabletBorderTop?: CSSProperties['borderTop'];
	tabletBorderRight?: CSSProperties['borderRight'];
	tabletBorderBottom?: CSSProperties['borderBottom'];
	tabletBorderLeft?: CSSProperties['borderLeft'];
	tabletBorderTopHover?: CSSProperties['borderTop'];
	tabletBorderRightHover?: CSSProperties['borderRight'];
	tabletBorderBottomHover?: CSSProperties['borderBottom'];
	tabletBorderLeftHover?: CSSProperties['borderLeft'];
	tabletBorderTopLeftRadius?: CSSProperties['borderTopLeftRadius'];
	tabletBorderTopRightRadius?: CSSProperties['borderTopRightRadius'];
	tabletBorderBottomRightRadius?: CSSProperties['borderBottomRightRadius'];
	tabletBorderBottomLeftRadius?: CSSProperties['borderBottomLeftRadius'];
	tabletBottom?: CSSProperties['bottom'];
	tabletColor?: CSSProperties['color'];
	tabletBackgroundColor?: CSSProperties['backgroundColor'];
	tabletJustifyContent?: CSSProperties['justifyContent'];
	tabletLeft?: CSSProperties['left'];
	tabletMarginTop?: CSSProperties['marginTop'];
	tabletMarginRight?: CSSProperties['marginRight'];
	tabletMarginBottom?: CSSProperties['marginBottom'];
	tabletMarginLeft?: CSSProperties['marginLeft'];
	tabletPaddingTop?: CSSProperties['paddingTop'];
	tabletPaddingRight?: CSSProperties['paddingRight'];
	tabletPaddingBottom?: CSSProperties['paddingBottom'];
	tabletPaddingLeft?: CSSProperties['paddingLeft'];
	tabletPosition?: CSSProperties['position'];
	tabletWidth?: CSSProperties['width'];
	tabletHeight?: CSSProperties['height'];
	tabletMinWidth?: CSSProperties['minWidth'];
	tabletMinHeight?: CSSProperties['minHeight'];
	tabletMaxWidth?: CSSProperties['maxWidth'];
	tabletMaxHeight?: CSSProperties['maxHeight'];
	tabletOverflowX?: CSSProperties['overflowX'];
	tabletOverflowY?: CSSProperties['overflowY'];
	tabletRight?: CSSProperties['right'];
	tabletTop?: CSSProperties['top'];
	tabletWhiteSpace?: CSSProperties['whiteSpace'];

	mobileBlockAlign?: BlockAlign;
	mobileCustomCSS?: string;
	mobileAccentColor?: CSSProperties['accentColor'];
	mobileAlignItems?: CSSProperties['alignItems'];
	mobileBackgroundColorHover?: CSSProperties['backgroundColor'];
	mobileBoxShadow?: CSSProperties['boxShadow'];
	mobileColorHover?: CSSProperties['color'];
	mobileDisplay?: CSSProperties['display'];
	mobileFlexBasis?: CSSProperties['flexBasis'];
	mobileFlexDirection?: CSSProperties['flexDirection'];
	mobileFlexGrow?: CSSProperties['flexGrow'];
	mobileFlexShrink?: CSSProperties['flexShrink'];
	mobileFontSize?: CSSProperties['fontSize'];
	mobileTableLayout?: CSSProperties['tableLayout'];
	mobileGap?: CSSProperties['gap'];
	mobileTextAlign?: CSSProperties['textAlign'];
	mobileBackgroundImage?: CSSProperties['backgroundImage'];
	mobileBackgroundSize?: CSSProperties['backgroundSize'];
	mobileVerticalAlign?: CSSProperties['verticalAlign'] | 'stretch';
	mobileBorderTop?: CSSProperties['borderTop'];
	mobileBorderRight?: CSSProperties['borderRight'];
	mobileBorderBottom?: CSSProperties['borderBottom'];
	mobileBorderLeft?: CSSProperties['borderLeft'];
	mobileBorderTopHover?: CSSProperties['borderTop'];
	mobileBorderRightHover?: CSSProperties['borderRight'];
	mobileBorderBottomHover?: CSSProperties['borderBottom'];
	mobileBorderLeftHover?: CSSProperties['borderLeft'];
	mobileBorderTopLeftRadius?: CSSProperties['borderTopLeftRadius'];
	mobileBorderTopRightRadius?: CSSProperties['borderTopRightRadius'];
	mobileBorderBottomRightRadius?: CSSProperties['borderBottomRightRadius'];
	mobileBorderBottomLeftRadius?: CSSProperties['borderBottomLeftRadius'];
	mobileBottom?: CSSProperties['bottom'];
	mobileColor?: CSSProperties['color'];
	mobileBackgroundColor?: CSSProperties['backgroundColor'];
	mobileJustifyContent?: CSSProperties['justifyContent'];
	mobileLeft?: CSSProperties['left'];
	mobileMarginTop?: CSSProperties['marginTop'];
	mobileMarginRight?: CSSProperties['marginRight'];
	mobileMarginBottom?: CSSProperties['marginBottom'];
	mobileMarginLeft?: CSSProperties['marginLeft'];
	mobilePaddingTop?: CSSProperties['paddingTop'];
	mobilePaddingRight?: CSSProperties['paddingRight'];
	mobilePaddingBottom?: CSSProperties['paddingBottom'];
	mobilePaddingLeft?: CSSProperties['paddingLeft'];
	mobilePosition?: CSSProperties['position'];
	mobileWidth?: CSSProperties['width'];
	mobileHeight?: CSSProperties['height'];
	mobileMinWidth?: CSSProperties['minWidth'];
	mobileMinHeight?: CSSProperties['minHeight'];
	mobileMaxWidth?: CSSProperties['maxWidth'];
	mobileMaxHeight?: CSSProperties['maxHeight'];
	mobileOverflowX?: CSSProperties['overflowX'];
	mobileOverflowY?: CSSProperties['overflowY'];
	mobileRight?: CSSProperties['right'];
	mobileTop?: CSSProperties['top'];
	mobileWhiteSpace?: CSSProperties['whiteSpace'];
}

export type LengthUnit = 'px' | '%' | 'em' | 'rem';

export type SpacingLonghand = {
	top?: string | number | undefined;
	right?: string | number | undefined;
	bottom?: string | number | undefined;
	left?: string | number | undefined;

	[index: string]: string | number | undefined;
};
