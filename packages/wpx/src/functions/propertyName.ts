import {BlockCSSProperties} from '../types';

export default function propertyName(name: string, isResponsive: boolean|undefined, deviceType: string) {
    if (isResponsive) {
        deviceType = deviceType.toLowerCase();
        switch (deviceType) {
            case 'tablet':
            case 'mobile':
                return deviceType + name.charAt(0).toUpperCase() + name.substring(1) as keyof BlockCSSProperties;
        }
    }
    return name as keyof BlockCSSProperties;
}