import type {Border} from '@wordpress/components/build-types/border-control/types';
import {CSSProperties} from 'react';
import {BlockCSSProperties, LengthUnit} from '../../types';
import {isNumeric} from '../../utils';

const STYLES = [
    'none', 'hidden', 'dotted', 'dashed', 'solid',
    'double', 'groove', 'ridge', 'inset', 'outset'
];

const DEFAULT_BORDER = {style: undefined, color: undefined, width: undefined};

export function toBorderShorthand(border?: Border): string | undefined {
    border = border ? border : DEFAULT_BORDER;
    let result = border.width ? [border.width] : [];
    result.push(border.style ? border.style : 'none');
    if (border.color) {
        result.push(border.color);
    }

    const shorthand = result.join(' ');
    if (shorthand === 'none') {
        return undefined;
    }
    return shorthand && shorthand !== 'none' ? shorthand : undefined;
}

function findStyleIndex(tokens: string[]): number {
    for (const style of STYLES) {
        const index = tokens.indexOf(style);
        if (index !== -1) {
            return index;
        }
    }
    return -1;
}

export function fromBorderShorthand(value?: string | number | undefined): Border {

    if (!value || Number.isInteger(value)) {
        return DEFAULT_BORDER;
    }

    const tokens = (value as string).split(' ');
    if (tokens.length > 3) {
        return DEFAULT_BORDER;
    }

    const index = findStyleIndex(tokens);
    if (index === -1 || index === 2) {
        return DEFAULT_BORDER;
    }

    const newBorder = {style: tokens[index], color: undefined, width: '0px'} as Border;
    if (index === 0) {
        if (tokens.length > 1) {
            newBorder.color = tokens[1];
        }
    } else if (index === 1) {
        newBorder.width = tokens[0];
        if (tokens.length > 2) {
            newBorder.color = tokens[2];
        }
    }
    return newBorder;
}

export function headerHint(isMixed: boolean | null | undefined, value: string | number | undefined) {
    if (isMixed) {
        return 'MIXED';
    }
    if (value === '0px') {
        return '0';
    }

    return value !== undefined ? value.toString() : '\u2205';
}

export function areAllBorderRadiiEqual(attributes: CSSProperties) {
    return (attributes.borderTopRightRadius === attributes.borderBottomRightRadius) &&
        (attributes.borderTopRightRadius === attributes.borderBottomLeftRadius) &&
        (attributes.borderTopRightRadius === attributes.borderTopLeftRadius);
}

export function showClear(attributes: BlockCSSProperties, deviceType: string) {
    switch (deviceType) {
        case 'Tablet':
            return (attributes.tabletBorderTop !== undefined ||
                attributes.tabletBorderRight !== undefined ||
                attributes.tabletBorderBottom !== undefined ||
                attributes.tabletBorderLeft !== undefined);
        case 'Mobile':
            return (attributes.mobileBorderTop !== undefined ||
                attributes.mobileBorderRight !== undefined ||
                attributes.mobileBorderBottom !== undefined ||
                attributes.mobileBorderLeft !== undefined);
    }

    return (attributes.borderTop !== undefined ||
        attributes.borderLeft !== undefined ||
        attributes.borderBottom !== undefined ||
        attributes.borderRight !== undefined);
}