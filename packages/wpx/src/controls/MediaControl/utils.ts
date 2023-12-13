import {propertyName} from '../../functions';
import {Media} from './MediaControl';

export function prop(name: string, deviceType: string) {
    if (name === 'showOn') {
        return `showOn${deviceType}` as keyof Media;
    }
    return propertyName(name, deviceType) as keyof Media;
}

export function showClear(media: Media, deviceType: string) {
    return media[prop('url', deviceType)] !== undefined;
}

export function basename(str: string, sep: string = '/') {
    str = str.substring(str.lastIndexOf(sep) + 1);
    if (str.endsWith(')')) {
        str = str.substring(0, str.length - 1);
    }
    return str;
}

export function showOnValue(media: Media, deviceType: string) {
    const value = media[prop('showOn', deviceType)];
    return (value === undefined) ? true : !!value;
}
