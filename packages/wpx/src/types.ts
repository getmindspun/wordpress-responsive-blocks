import {CSSProperties} from 'react';

export type BlockAlign = 'left' | 'center' | 'right' | 'wide' | 'full';
export type VerticalAlign = 'top' | 'middle' | 'bottom' | 'stretch';

export interface BlockCSSProperties extends CSSProperties {
    blockAlign?: BlockAlign;
    verticalAlign?: CSSProperties['verticalAlign'] | 'stretch';

    colorHover?: CSSProperties['color'];
    backgroundColorHover?: CSSProperties['backgroundColor'];

    tabletBlockAlign?: BlockAlign,
    tabletColorHover?: CSSProperties['color'];
    tabletBackgroundColorHover?: CSSProperties['backgroundColor'];
    tabletFontSize?: CSSProperties['fontSize'],
    tabletTextAlign?: CSSProperties['textAlign'],
    tabletBackgroundImage?: CSSProperties['backgroundImage'],
    tabletVerticalAlign?: CSSProperties['verticalAlign'] | 'stretch',
    tabletBorderTop?: CSSProperties['borderTop'],
    tabletBorderRight?: CSSProperties['borderRight'],
    tabletBorderBottom?: CSSProperties['borderBottom'],
    tabletBorderLeft?: CSSProperties['borderLeft'],
    tabletBorderTopLeftRadius?: CSSProperties['borderTopLeftRadius'];
    tabletBorderTopRightRadius?: CSSProperties['borderTopRightRadius'];
    tabletBorderBottomRightRadius?: CSSProperties['borderBottomRightRadius'];
    tabletBorderBottomLeftRadius?: CSSProperties['borderBottomLeftRadius'];
    tabletColor?: CSSProperties['color'];
    tabletBackgroundColor?: CSSProperties['backgroundColor'];
    tabletMarginTop?: CSSProperties['marginTop'];
    tabletMarginRight?: CSSProperties['marginRight'];
    tabletMarginBottom?: CSSProperties['marginBottom'];
    tabletMarginLeft?: CSSProperties['marginLeft'];
    tabletPaddingTop?: CSSProperties['paddingTop'];
    tabletPaddingRight?: CSSProperties['paddingRight'];
    tabletPaddingBottom?: CSSProperties['paddingBottom'];
    tabletPaddingLeft?: CSSProperties['paddingLeft'];

    mobileBlockAlign?: BlockAlign,
    mobileColorHover?: CSSProperties['color'];
    mobileBackgroundColorHover?: CSSProperties['backgroundColor'];
    mobileFontSize?: CSSProperties['fontSize'],
    mobileTextAlign?: CSSProperties['textAlign'],
    mobileBackgroundImage?: CSSProperties['backgroundImage'],
    mobileVerticalAlign?: CSSProperties['verticalAlign'] | 'stretch',
    mobileBorderTop?: CSSProperties['borderTop'],
    mobileBorderRight?: CSSProperties['borderRight'],
    mobileBorderBottom?: CSSProperties['borderBottom'],
    mobileBorderLeft?: CSSProperties['borderLeft'],
    mobileBorderTopLeftRadius?: CSSProperties['borderTopLeftRadius'];
    mobileBorderTopRightRadius?: CSSProperties['borderTopRightRadius'];
    mobileBorderBottomRightRadius?: CSSProperties['borderBottomRightRadius'];
    mobileBorderBottomLeftRadius?: CSSProperties['borderBottomLeftRadius'];
    mobileColor?: CSSProperties['color'];
    mobileBackgroundColor?: CSSProperties['backgroundColor'];
    mobileMarginTop?: CSSProperties['marginTop'];
    mobileMarginRight?: CSSProperties['marginRight'];
    mobileMarginBottom?: CSSProperties['marginBottom'];
    mobileMarginLeft?: CSSProperties['marginLeft'];
    mobilePaddingTop?: CSSProperties['paddingTop'];
    mobilePaddingRight?: CSSProperties['paddingRight'];
    mobilePaddingBottom?: CSSProperties['paddingBottom'];
    mobilePaddingLeft?: CSSProperties['paddingLeft'];
}

export type LengthUnit = 'px' | '%' | 'em' | 'rem';

export type SpacingLonghand = {
    top?: string | number | undefined;
    right?: string | number | undefined;
    bottom?: string | number | undefined;
    left?: string | number | undefined;

    [index: string]: string | number | undefined;
}