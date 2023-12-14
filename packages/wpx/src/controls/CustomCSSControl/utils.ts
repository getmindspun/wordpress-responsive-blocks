import {propertyName} from '../../functions';
import {CustomCSSProperties} from './CustomCSSControl';

export function prop(isResponsive: boolean|undefined, deviceType: string) {
    return propertyName('customCSS', isResponsive, deviceType) as keyof CustomCSSProperties;
}

export function showClear(attributes: CustomCSSProperties, isResponsive: boolean|undefined, deviceType: string) {
    return attributes[prop(isResponsive, deviceType)] !== undefined;
}