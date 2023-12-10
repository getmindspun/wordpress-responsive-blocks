import {propertyName} from '../../functions';
import {CustomCSSProperties} from './CustomCSSControl';

export function prop(deviceType: string) {
    return propertyName('customCSS', deviceType) as keyof CustomCSSProperties;
}

export function showClear(attributes: CustomCSSProperties, deviceType: string) {
    return attributes[prop(deviceType)] !== undefined;
}