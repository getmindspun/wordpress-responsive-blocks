import { __ } from '@wordpress/i18n';

import { SelectControl } from '@wordpress/components';

import {
    BlockCSSProperties,
    ControlHeader,
    DeviceTypeContainer,
    useGetPreviewDeviceType,
} from '@mindspun/mrblx';

type WhiteSpaceProperties = Pick<
    BlockCSSProperties,
    'whiteSpace' | 'tabletWhiteSpace' | 'mobileWhiteSpace'
>;

const OPTIONS = [
    { label: 'Default', value: 'default' },
    { label: 'Normal (normal)', value: 'normal' },
    { label: 'No Wrap (nowrap)', value: 'nowrap' },
    { label: 'Pre (pre)', value: 'pre' },
    { label: 'Pre-Wrap (pre-wrap)', value: 'pre-wrap' },
    { label: 'Pre-Line (pre-line)', value: 'pre-line' },
    { label: 'Break-Spaces (break-spaces)', value: 'break-spaces' },
];

export function showClear(style: WhiteSpaceProperties, deviceType: string) {
    switch (deviceType) {
        case 'Tablet':
            return style.tabletWhiteSpace !== undefined;
        case 'Mobile':
            return style.mobileWhiteSpace !== undefined;
    }
    return style.whiteSpace !== undefined;
}

function whiteSpaceValue(whiteSpace: string | undefined) {
    return whiteSpace !== 'default'
        ? (whiteSpace as WhiteSpaceProperties['whiteSpace'])
        : undefined;
}

const WhiteSpaceControl = (props: {
    attributes: WhiteSpaceProperties;
    setAttributes: (attributes: Partial<WhiteSpaceProperties>) => void;
}) => {
    const deviceType = useGetPreviewDeviceType();

    function onClear() {
        switch (deviceType) {
            case 'Tablet':
                props.setAttributes({ tabletWhiteSpace: undefined });
                break;
            case 'Mobile':
                props.setAttributes({ mobileWhiteSpace: undefined });
                break;
            default:
                props.setAttributes({ whiteSpace: undefined });
                break;
        }
    }

    return (
        <div className={'mrblx--white-space-control'}>
            <ControlHeader
                //title={__('White Space')}
                isResponsive={true}
                onClear={
                    showClear(props.attributes, deviceType)
                        ? onClear
                        : undefined
                }
            />
            <DeviceTypeContainer deviceType={'Desktop'}>
                <SelectControl
                    value={
                        props.attributes.whiteSpace
                            ? props.attributes.whiteSpace
                            : 'default'
                    }
                    options={OPTIONS}
                    onChange={(whiteSpace) =>
                        props.setAttributes({
                            whiteSpace: whiteSpaceValue(whiteSpace),
                        })
                    }
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
            <DeviceTypeContainer deviceType={'Tablet'}>
                <SelectControl
                    value={
                        props.attributes.tabletWhiteSpace
                            ? props.attributes.tabletWhiteSpace
                            : 'default'
                    }
                    options={OPTIONS}
                    onChange={(tabletWhiteSpace) =>
                        props.setAttributes({
                            tabletWhiteSpace:
                                whiteSpaceValue(tabletWhiteSpace),
                        })
                    }
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
            <DeviceTypeContainer deviceType={'Mobile'}>
                <SelectControl
                    value={
                        props.attributes.mobileWhiteSpace
                            ? props.attributes.mobileWhiteSpace
                            : 'default'
                    }
                    options={OPTIONS}
                    onChange={(mobileWhiteSpace) =>
                        props.setAttributes({
                            mobileWhiteSpace:
                                whiteSpaceValue(mobileWhiteSpace),
                        })
                    }
                    __nextHasNoMarginBottom
                />
            </DeviceTypeContainer>
        </div>
    );
};

export default WhiteSpaceControl;
