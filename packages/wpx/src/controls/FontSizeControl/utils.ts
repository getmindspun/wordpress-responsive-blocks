import {CSSProperties} from 'react';
import {BlockCSSProperties} from '../../types';

type FontSize = {
    name: 'S' | 'M' | 'L' | 'XL' | 'XXL',
    fontSize: CSSProperties['fontSize'],
}

const SIZES: FontSize[] = [
    {name: 'S', fontSize: '1rem'},
    {name: 'M', fontSize: '1.125rem'},
    {name: 'L', fontSize: '1.75rem'},
    {name: 'XL', fontSize: '2.25rem'},
    {name: 'XXL', fontSize: '10rem'}
];

export function fromRem(fontSize: CSSProperties['fontSize']): 'S' | 'M' | 'L' | 'XL' | 'XXL' | undefined {
    for (const size of SIZES) {
        if (fontSize === size.fontSize) {
            return size.name;
        }
    }
    return undefined;
}

export function toRem(name: FontSize['name'] | undefined): CSSProperties['fontSize'] {
    for (const size of SIZES) {
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