import {CSSProperties} from 'react';
import {BlockCSSProperties} from '../../types';

function calculateIsMixed(attributes: BlockCSSProperties, isResponsive: boolean, deviceType: string) {
    if (isResponsive) {
        switch (deviceType) {
            case 'Tablet':
                return (attributes.tabletMarginTop !== attributes.tabletMarginBottom) ||
                    (attributes.tabletMarginTop !== attributes.tabletMarginLeft) ||
                    (attributes.tabletMarginTop !== attributes.tabletMarginRight);
            case 'Mobile':
                return (attributes.mobileMarginTop !== attributes.mobileMarginBottom) ||
                    (attributes.mobileMarginTop !== attributes.mobileMarginLeft) ||
                    (attributes.mobileMarginTop !== attributes.mobileMarginRight);
        }
    }
    return !areAllMarginsEqual(attributes);
}

export function areAllMarginsEqual(attributes: CSSProperties) {
    return (attributes.marginTop === attributes.marginBottom) &&
        (attributes.marginTop === attributes.marginRight) &&
        (attributes.marginTop === attributes.marginLeft);
}

export function headerHint(attributes: BlockCSSProperties, isResponsive: boolean, deviceType: string) {
    if (calculateIsMixed(attributes, isResponsive, deviceType)) {
        return 'MIXED';
    }
    let value = attributes.marginTop;
    if (isResponsive) {
        switch (deviceType) {
            case 'Tablet':
                value = attributes.tabletMarginTop;
                break;
            case 'Mobile':
                value = attributes.mobileMarginTop;
                break;
        }
    }

    if (value === '0px') {
        return '0';
    }
    return value !== undefined ? value.toString() : '\u2205';
}

export function showClear(attributes: BlockCSSProperties, isResponsive: boolean, deviceType: string) {
    if (isResponsive) {
        switch (deviceType) {
            case 'Tablet':
                return (attributes.tabletMarginTop !== undefined ||
                    attributes.tabletMarginRight !== undefined ||
                    attributes.tabletMarginBottom !== undefined ||
                    attributes.tabletMarginLeft !== undefined);
            case 'Mobile':
                return (attributes.mobileMarginTop !== undefined ||
                    attributes.mobileMarginRight !== undefined ||
                    attributes.mobileMarginBottom !== undefined ||
                    attributes.mobileMarginLeft !== undefined);
        }
    }

    return (attributes.marginTop !== undefined ||
        attributes.marginLeft !== undefined ||
        attributes.marginBottom !== undefined ||
        attributes.marginRight !== undefined);
}