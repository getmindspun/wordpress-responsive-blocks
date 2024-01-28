import {CSSProperties} from 'react';
import {BlockCSSProperties} from '../../types';
import {FontSize} from './FontSizeControl';

export function fromRem(fontSize: CSSProperties['fontSize'], fontSizes: FontSize[]): string | undefined {
    for (const size of fontSizes) {
        if (fontSize === size.fontSize) {
            return size.name;
        }
    }
    return undefined;
}

export function toRem(name: FontSize['name'] | undefined, fontSizes: FontSize[]): CSSProperties['fontSize'] {
    for (const size of fontSizes) {
        if (name === size.name) {
            return size.fontSize;
        }
    }
    return undefined;
}

export function headerHint(attributes: BlockCSSProperties, deviceType: string) {
    let value = attributes.fontSize;
    switch (deviceType) {
        case 'Tablet':
            value = attributes.tabletFontSize;
            break;
        case 'Mobile':
            value = attributes.mobileFontSize;
            break;
    }
    if (value === '0px') {
        return '0';
    }
    return value !== undefined ? value.toString() : '\u2205';
}

export function showClear(attributes: BlockCSSProperties, deviceType: string) {
    switch (deviceType) {
        case 'Tablet':
            return attributes.tabletFontSize !== undefined;
        case 'Mobile':
            return attributes.mobileFontSize !== undefined;
    }

    return attributes.fontSize !== undefined;
}