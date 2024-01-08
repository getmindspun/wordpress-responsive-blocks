import {BlockCSSProperties} from '../../types';

export function headerHint(attributes: BlockCSSProperties, deviceType: string) {
    let value = attributes.paddingTop;
    switch (deviceType) {
        case 'Tablet':
            value = attributes.tabletPaddingTop;
            break;
        case 'Mobile':
            value = attributes.mobilePaddingTop;
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
            return attributes.tabletGap !== undefined;
        case 'Mobile':
            return attributes.mobileGap !== undefined;
    }

    return attributes.gap !== undefined;
}