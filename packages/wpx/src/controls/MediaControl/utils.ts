import {propertyName} from '../../functions';
import {Media} from './MediaControl';

export function prop(name: string, isResponsive: boolean | undefined, deviceType: string) {
    return propertyName(name, isResponsive, deviceType) as keyof Media;
}

export function showClear(media: Media, isResponsive: boolean | undefined, deviceType: string) {
    return media[prop('url', isResponsive, deviceType)] !== undefined;
}

export function basename(str: string, sep: string = '/') {
    str = str.substring(str.lastIndexOf(sep) + 1);
    if (str.endsWith(')')) {
        str = str.substring(0, str.length - 1);
    }
    return str;
}

export function showOnValue(media: Media, isResponsive: boolean | undefined, deviceType: string) {
    const value = media[prop('showOn', isResponsive, deviceType)];
    return (value === undefined) ? true : !!value;
}

export function showDeviceToggle(media: Media, isResponsive: boolean | undefined, deviceType: string) {
    if (!isResponsive) {
        return false;
    }
    switch (deviceType) {
        case 'Mobile':
            return !!(media.url || media.tabletUrl || media.mobileUrl);
        case 'Tablet':
            return !!(media.url || media.tabletUrl);
    }
    return !!media.url;
}
