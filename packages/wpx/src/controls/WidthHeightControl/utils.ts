import {propertyName} from '../../functions';
import {WidthHeightProperties} from './WidthHeightControl';

function prop(name: string, deviceType: string) {
    return propertyName(name, deviceType) as keyof WidthHeightProperties;
}

export function toValue(attributes: WidthHeightProperties, name: string, deviceType: string) {
    return attributes[prop(name, deviceType)];
}

export function fromValue(value: string|number|undefined, name: string, deviceType: string) {
    return {
        [prop(name, deviceType)]: value
    };
}

export function headerHint(attributes: WidthHeightProperties, name: string, deviceType: string, isAdvanced: boolean | null | undefined): string {
    if (isAdvanced) {
        return '';
    }

    const value = toValue(attributes, name, deviceType);
    if (value === 0) {
        return '0';
    }

    return value ? `${value}` : '\u2205';
}

export function showClear(attributes: WidthHeightProperties, name: string, deviceType: string) {
    return toValue(attributes, name, deviceType) !== undefined;
}
