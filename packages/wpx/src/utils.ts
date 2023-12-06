import {LengthUnit} from './types';

export function parseValue(value?: string | number | undefined): number | undefined {
    return (typeof value === 'string') ? parseInt(value) : value;
}

export function isNumeric(value: string | number | undefined) {
    if (typeof value === 'number') return true;
    return value !== undefined ? /^-?\d+$/.test(value) : false
}

export function parseUnitValue(value?: string | number | undefined): [number|undefined, LengthUnit] {
    if (value === undefined) {
        return [undefined, 'px'];
    }
    if (value === 0 || ((value = value.toString().trim()) === '0')) {
        return [0, 'px']
    }
    const found = value.match(/^(-)?(\d*\.?\d*)(px|%|em|rem)?$/);
    if (!found) {
        return [0, 'px']
    }
    const x = found[1] ? -1 : 1;
    const num = parseFloat(found[2]);
    return [x * num, found[3] as LengthUnit];
}
