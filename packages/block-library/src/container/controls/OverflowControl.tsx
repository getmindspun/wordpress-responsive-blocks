import {__} from '@wordpress/i18n';

import {SelectControl} from '@wordpress/components';

import {BlockCSSProperties, ControlHeader, DeviceTypeContainer, useGetPreviewDeviceType} from '@mindspun/wpx';
import {CSSProperties} from 'react';

type OverflowProperties = Pick<BlockCSSProperties, 'overflowX'|'tabletOverflowX'|'mobileOverflowX'|'overflowY'|'tabletOverflowY'|'mobileOverflowY'>;

const OPTIONS = [
    { label: 'Default', value: 'default' },
    { label: 'Hidden', value: 'hidden' },
    { label: 'Auto', value: 'auto' },
    { label: 'Scroll', value: 'scroll' }
];

export function showClear(style: OverflowProperties, deviceType: string) {
    switch (deviceType) {
        case 'Tablet':
            return style.tabletOverflowX !== undefined || style.tabletOverflowY !== undefined;
        case 'Mobile':
            return style.mobileOverflowX !== undefined || style.mobileOverflowY !== undefined;
    }
    return style.overflowX !== undefined || style.overflowY !== undefined;
}

function overflowXValue(value: string) {
    return value !== 'default' ? value as CSSProperties['overflowX'] : undefined
}

function overflowYValue(value: string) {
    return value !== 'default' ? value as CSSProperties['overflowY'] : undefined
}

const OverflowControl = (props: {
    attributes: OverflowProperties;
    setAttributes: (attributes: Partial<OverflowProperties>) => void;
}) => {
    const deviceType = useGetPreviewDeviceType();

    function onClear() {
        switch (deviceType) {
            case 'Tablet':
                props.setAttributes({
                    tabletOverflowX: undefined,
                    tabletOverflowY: undefined
                });
                break;
            case 'Mobile':
                props.setAttributes({
                    mobileOverflowX: undefined,
                    mobileOverflowY: undefined,
                });
                break;
            default:
                props.setAttributes({
                    overflowX: undefined,
                    overflowY: undefined,
                });
                break;
        }
    }

    return (
        <div className={'wpx--overflow-control'}>
            <ControlHeader
                isResponsive={true}
                onClear={showClear(props.attributes, deviceType) ? onClear : undefined}
            />
            <DeviceTypeContainer deviceType={'Desktop'}>
                <SelectControl
                    label={__('Horizontal (X)')}
                    value={ props.attributes.overflowX ? props.attributes.overflowX : 'default' }
                    options={ OPTIONS }
                    onChange={ ( overflowX ) => props.setAttributes({overflowX: overflowXValue(overflowX)})}
                    __nextHasNoMarginBottom
                />
                <SelectControl
                    label={__('Vertical (Y)')}
                    value={ props.attributes.overflowY ? props.attributes.overflowY : 'default' }
                    options={ OPTIONS }
                    onChange={ ( overflowY ) => props.setAttributes({overflowY: overflowYValue(overflowY)})}
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
            <DeviceTypeContainer deviceType={'Tablet'}>
                <SelectControl
                    value={ props.attributes.tabletOverflowX ? props.attributes.tabletOverflowX : 'default' }
                    options={ OPTIONS }
                    onChange={ ( tabletOverflowX ) => props.setAttributes({tabletOverflowX: overflowXValue(tabletOverflowX)})}
                    __nextHasNoMarginBottom
                />
                <SelectControl
                    value={ props.attributes.tabletOverflowY ? props.attributes.tabletOverflowY : 'default' }
                    options={ OPTIONS }
                    onChange={ ( tabletOverflowY ) => props.setAttributes({tabletOverflowY: overflowYValue(tabletOverflowY)})}
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
            <DeviceTypeContainer deviceType={'Mobile'}>
                <SelectControl
                    value={ props.attributes.mobileOverflowX ? props.attributes.mobileOverflowX : 'default' }
                    options={ OPTIONS }
                    onChange={ ( mobileOverflowX ) => props.setAttributes({mobileOverflowX: overflowXValue(mobileOverflowX)})}
                    __nextHasNoMarginBottom
                />
                <SelectControl
                    value={ props.attributes.mobileOverflowY ? props.attributes.mobileOverflowY : 'default' }
                    options={ OPTIONS }
                    onChange={ ( mobileOverflowY ) => props.setAttributes({mobileOverflowY: overflowYValue(mobileOverflowY)})}
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
        </div>
    );
}

export default OverflowControl;
