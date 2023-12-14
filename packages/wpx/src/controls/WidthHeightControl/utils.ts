import {propertyName} from '../../functions';
import {WidthHeightProperties} from './WidthHeightControl';

function prop(name: string, isResponsive: boolean|undefined, deviceType: string) {
    return propertyName(name, isResponsive, deviceType) as keyof WidthHeightProperties;
}

export function toValue(attributes: WidthHeightProperties, name: string, isResponsive: boolean|undefined, deviceType: string) {
    return attributes[prop(name, isResponsive, deviceType)];
}

export function fromValue(value: string|number|undefined, name: string, isResponsive: boolean|undefined, deviceType: string) {
    return {
        [prop(name, isResponsive, deviceType)]: value
    };
}

export function headerHint(attributes: WidthHeightProperties, name: string, isResponsive: boolean|undefined, deviceType: string, isAdvanced: boolean | null | undefined): string {
    if (isAdvanced) {
        return '';
    }

    const value = toValue(attributes, name, isResponsive, deviceType);
    if (value === 0) {
        return '0';
    }

    return value ? `${value}` : '\u2205';
}

export function showClear(attributes: WidthHeightProperties, name: string, isResponsive: boolean|undefined, deviceType: string) {
    return toValue(attributes, name, isResponsive, deviceType) !== undefined;
}
