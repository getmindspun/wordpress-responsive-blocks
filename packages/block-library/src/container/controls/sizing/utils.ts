import {FlexSizingProperties} from './SizingControl';

function prop(name: string, deviceType: string) {
    deviceType = deviceType.toLowerCase();

    switch (deviceType) {
        case 'tablet':
        case 'mobile':
            return deviceType + name.substring(1) as keyof FlexSizingProperties;
    }
    return name as keyof FlexSizingProperties;
}

export function toValue(style: FlexSizingProperties, deviceType: string) {
    if (style[prop('flexBasis', deviceType)] === 'auto' && style[prop('flexGrow', deviceType)] === 1 && style[prop('flexShrink', deviceType)] === 1) {
        return 'fill';
    }
    if (style[prop('flexGrow', deviceType)] === 1) {
        return 'grow';
    }
    if (style[prop('flexShrink', deviceType)] === 1) {
        return 'shrink';
    }
    return 'default';
}

export function fromValue(value: string, deviceType: string) {
    switch(value) {
        case 'fill':
            return {
                [prop('flexGrow', deviceType)]: 1,
                [prop('flexShrink', deviceType)]: 1,
                [prop('flexBasis', deviceType)]: 'auto'
            }
        case 'grow':
            return {
                [prop('flexGrow', deviceType)]: 1,
                [prop('flexShrink', deviceType)]: undefined,
                [prop('flexBasis', deviceType)]: undefined,
            }
        case 'shrink':
            return {
                [prop('flexGrow', deviceType)]: undefined,
                [prop('flexShrink', deviceType)]: 1,
                [prop('flexBasis', deviceType)]: undefined,
            }
    }

    return {
        [prop('flexGrow', deviceType)]: undefined,
        [prop('flexShrink', deviceType)]: undefined,
        [prop('flexBasis', deviceType)]: undefined,
    }
}