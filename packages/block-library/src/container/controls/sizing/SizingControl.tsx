import {__} from '@wordpress/i18n';

import {SelectControl} from '@wordpress/components';

import {BlockCSSProperties, ControlHeader, DeviceTypeContainer, useGetPreviewDeviceType} from '@mindspun/wpx';
import {fromValue, toValue} from './utils';

export type FlexSizingProperties = Pick<BlockCSSProperties, 'flexGrow'|'flexShrink'|'flexBasis'|'tabletFlexGrow'|'tabletFlexShrink'|'tabletFlexBasis'|'mobileFlexGrow'|'mobileFlexShrink'|'mobileFlexBasis'>;

const OPTIONS = [
    { label: 'Default', value: 'default' },
    { label: 'Fill', value: 'fill' },
    { label: 'Grow', value: 'grow' },
    { label: 'Shrink', value: 'shrink' },
];

export function showClear(style: FlexSizingProperties, deviceType: string) {
    switch (deviceType) {
        case 'Tablet':
            return style.tabletFlexGrow !== undefined || style.tabletFlexShrink || style.tabletFlexBasis;
        case 'Mobile':
            return style.mobileFlexGrow !== undefined || style.mobileFlexShrink || style.mobileFlexBasis;
    }
    return style.flexGrow !== undefined || style.flexShrink !== undefined || style.flexBasis !== undefined;
}

const FlexSizingControl = (props: {
    attributes: FlexSizingProperties;
    setAttributes: (attributes: Partial<FlexSizingProperties>) => void;
}) => {
    const deviceType = useGetPreviewDeviceType();

    function onClear() {
        switch (deviceType) {
            case 'Tablet':
                props.setAttributes({
                    tabletFlexGrow: undefined,
                    tabletFlexShrink: undefined,
                    tabletFlexBasis: undefined,
                });
                break;
            case 'Mobile':
                props.setAttributes({
                    mobileFlexGrow: undefined,
                    mobileFlexShrink: undefined,
                    mobileFlexBasis: undefined,
                });
                break;
            default:
                props.setAttributes({
                    flexGrow: undefined,
                    flexShrink: undefined,
                    flexBasis: undefined,
                });
                break;
        }
    }

    return (
        <div className={'wpx--flex-sizing-control'}>
            <ControlHeader
                title={__('Sizing')}
                isResponsive={true}
                onClear={showClear(props.attributes, deviceType) ? onClear : undefined}
            />
            <DeviceTypeContainer deviceType={'Desktop'}>
                <SelectControl
                    value={ toValue(props.attributes, 'Desktop') }
                    options={ OPTIONS }
                    onChange={ ( value ) => props.setAttributes(fromValue(value, 'Desktop'))}
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
            <DeviceTypeContainer deviceType={'Tablet'}>
                <SelectControl
                    value={ toValue(props.attributes, 'Tablet') }
                    options={ OPTIONS }
                    onChange={ ( value ) => props.setAttributes(fromValue(value, 'Tablet'))}
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
            <DeviceTypeContainer deviceType={'Mobile'}>
                <SelectControl
                    value={ toValue(props.attributes, 'Mobile') }
                    options={ OPTIONS }
                    onChange={ ( value ) => props.setAttributes(fromValue(value, 'Mobile'))}
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
        </div>
    );
}

export default FlexSizingControl;
