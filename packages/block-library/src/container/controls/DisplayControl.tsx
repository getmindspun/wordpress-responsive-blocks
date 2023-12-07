import {__} from '@wordpress/i18n';

import {SelectControl} from '@wordpress/components';

import {ControlHeader, DeviceTypeContainer, useGetPreviewDeviceType} from '@mindspun/wpx';
import {DisplayControlAttributes} from '../types';

const OPTIONS = [
    { label: 'Block', value: 'block' },
    { label: 'Flex', value: 'flex' },
    { label: 'Inline', value: 'inline' },
    { label: 'Inline Block', value: 'inline-block' },
    { label: 'Inline Flex', value: 'inline-flex' },
    { label: 'None', value: 'none' },
];

export function showClear(style: DisplayControlAttributes, deviceType: string) {
    switch (deviceType) {
        case 'Tablet':
            return style.tabletDisplay !== undefined;
        case 'Mobile':
            return style.mobileDisplay !== undefined;
    }
    return style.display !== undefined;
}

const DisplayControl = (props: {
    attributes: DisplayControlAttributes;
    setAttributes: (attributes: Partial<DisplayControlAttributes>) => void;
}) => {
    const deviceType = useGetPreviewDeviceType();

    function onClear() {
        switch (deviceType) {
            case 'Tablet':
                props.setAttributes({tabletDisplay: undefined});
                break;
            case 'Mobile':
                props.setAttributes({mobileDisplay: undefined});
                break;
            default:
                props.setAttributes({display: undefined});
                break;
        }
    }

    return (
        <div className={'wpx--device-type-control'}>
            <ControlHeader
                title={__('Display')}
                isResponsive={true}
                onClear={showClear(props.attributes, deviceType) ? onClear : undefined}
            />
            <DeviceTypeContainer deviceType={'Desktop'}>
                <SelectControl
                    value={ props.attributes.display ? props.attributes.display : 'block' }
                    options={ OPTIONS }
                    onChange={ ( display ) => props.setAttributes({display})}
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
            <DeviceTypeContainer deviceType={'Tablet'}>
                <SelectControl
                    value={ props.attributes.tabletDisplay ? props.attributes.tabletDisplay : 'block' }
                    options={ OPTIONS }
                    onChange={ ( tabletDisplay ) => props.setAttributes({tabletDisplay})}
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
            <DeviceTypeContainer deviceType={'Mobile'}>
                <SelectControl
                    value={ props.attributes.mobileDisplay ? props.attributes.mobileDisplay : 'block' }
                    options={ OPTIONS }
                    onChange={ ( mobileDisplay ) => props.setAttributes({mobileDisplay})}
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
        </div>
    );
}

export default DisplayControl;
