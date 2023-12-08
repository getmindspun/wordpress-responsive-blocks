import {__} from '@wordpress/i18n';

import {SelectControl} from '@wordpress/components';

import {BlockCSSProperties, ControlHeader, DeviceTypeContainer, useGetPreviewDeviceType} from '@mindspun/wpx';

type JustifyContentProperties = Pick<BlockCSSProperties, 'justifyContent'|'tabletJustifyContent'|'mobileJustifyContent'>;

const OPTIONS = [
    { label: 'Default', value: 'default' },
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' },
    { label: 'Center', value: 'center' },
    { label: 'Between', value: 'between' },
    { label: 'Around', value: 'around' },
    { label: 'Evenly', value: 'evenly' },
];

export function showClear(style: JustifyContentProperties, deviceType: string) {
    switch (deviceType) {
        case 'Tablet':
            return style.tabletJustifyContent !== undefined;
        case 'Mobile':
            return style.mobileJustifyContent !== undefined;
    }
    return style.justifyContent !== undefined;
}

function justifyContentValue(direction: string|undefined){
    return direction !== 'default' ? direction as JustifyContentProperties['justifyContent'] : undefined;
}

const JustifyContentControl = (props: {
    attributes: JustifyContentProperties;
    setAttributes: (attributes: Partial<JustifyContentProperties>) => void;
}) => {
    const deviceType = useGetPreviewDeviceType();

    function onClear() {
        switch (deviceType) {
            case 'Tablet':
                props.setAttributes({tabletJustifyContent: undefined});
                break;
            case 'Mobile':
                props.setAttributes({mobileJustifyContent: undefined});
                break;
            default:
                props.setAttributes({justifyContent: undefined});
                break;
        }
    }

    return (
        <div className={'wpx--justify-content-control'}>
            <ControlHeader
                title={__('Justify Content')}
                isResponsive={true}
                onClear={showClear(props.attributes, deviceType) ? onClear : undefined}
            />
            <DeviceTypeContainer deviceType={'Desktop'}>
                <SelectControl
                    value={ props.attributes.justifyContent ? props.attributes.justifyContent : 'default' }
                    options={ OPTIONS }
                    onChange={ ( justifyContent ) => props.setAttributes({justifyContent: justifyContentValue(justifyContent)})}
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
            <DeviceTypeContainer deviceType={'Tablet'}>
                <SelectControl
                    value={ props.attributes.tabletJustifyContent ? props.attributes.tabletJustifyContent : 'default' }
                    options={ OPTIONS }
                    onChange={ ( tabletJustifyContent ) => props.setAttributes({tabletJustifyContent: justifyContentValue(tabletJustifyContent)})}
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
            <DeviceTypeContainer deviceType={'Mobile'}>
                <SelectControl
                    value={ props.attributes.mobileJustifyContent ? props.attributes.mobileJustifyContent : 'default' }
                    options={ OPTIONS }
                    onChange={ ( mobileJustifyContent ) => props.setAttributes({mobileJustifyContent: justifyContentValue(mobileJustifyContent)})}
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
        </div>
    );
}

export default JustifyContentControl;
