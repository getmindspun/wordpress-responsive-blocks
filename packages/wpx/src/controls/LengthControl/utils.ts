import {LengthUnit} from '../../types';
import {isNumeric} from '../../utils';

export function parseUnit(value?: string | number | undefined): 'px' | '%' | 'em' {
    value = value ? value.toString().trim() : '';
    return value.endsWith('%') ? '%' : (value.endsWith('em') ? 'em' : 'px');
}

export function headerHint(isMixed: boolean | null | undefined, isAdvanced: boolean | null | undefined, value: string | number | undefined, unit: string): string {
    if (isMixed) {
        return 'MIXED';
    }
    if (isAdvanced) {
        return '';
    }

    if (value === '0px' || value === 0) {
        return '0';
    }

    return value ? `${value}${unit}` : '\u2205';
}

export function rangeControlValue(value: number|undefined, unit: LengthUnit): number|undefined {
    if (value === 0) {
        return 0;
    }
    if (unit === 'em') {
        switch (value) {
            case .25:
                return 1;
            case .5:
                return 2;
            case 1:
                return 3;
            case 1.5:
                return 4;
            case 3:
                return 5;
        }
    }
    return 2.5;
}

export function onRangeChangeValue(value: number|undefined) {
    switch (value) {
        case 0:
            return 0;
        case 1:
            return '.25em';
        case 2:
            return '.5em';
        case 3:
            return '1em';
        case 4:
            return '1.5em';
        case 5:
            return '3em';
    }
    return undefined;
}

export function onChangeValue(value: string|number|undefined, unit: LengthUnit) {
    if (value === 0 || value === undefined) {
        return value;
    }
    return isNumeric(value) ? `${value}${unit}` : value
}