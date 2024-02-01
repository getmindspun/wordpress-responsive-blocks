import {LengthUnit} from './types';

export function isNumeric(value: string | number | undefined) {
    if (typeof value === 'number') return true;
    return value !== undefined ? /^-?\d+$/.test(value) : false
}

export function parseUnitValue(value?: string | number | undefined, defaultUnit: LengthUnit = 'px'): [number|undefined, LengthUnit] {
    if (value === undefined) {
        return [undefined, defaultUnit];
    }
    if (value === 0 || ((value = value.toString().trim()) === '0')) {
        return [0, defaultUnit]
    }
    const found = value.match(/^(-)?(\d*\.?\d*)(px|%|em|rem|vw|vh)?$/);
    if (!found) {
        return [0, defaultUnit]
    }
    const x = found[1] ? -1 : 1;
    const num = parseFloat(found[2]);
    return !isNaN(num) ? [x * num, found[3] as LengthUnit] : [undefined, found[3] as LengthUnit];
}
