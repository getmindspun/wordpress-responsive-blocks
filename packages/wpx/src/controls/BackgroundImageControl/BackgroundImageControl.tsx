import {useState} from '@wordpress/element';
import {ToggleControl} from '@wordpress/components';

import './BackgroundImageControl.scss';
import {BlockCSSProperties} from '../../types';
import {ControlHeader} from '../../components';
import {MediaControl} from '../index';
import {useGetPreviewDeviceType} from '../../hooks';

type Help = string | { desktop?: string, tablet?: string, mobile?: string };

function helpText(help: Help | undefined, deviceType: 'desktop' | 'tablet' | 'mobile') {
    if (help) {
        return (typeof help === 'string') ? help : help[deviceType];
    }
    return undefined;
}

function urlIt(value: string|undefined) {
    if (value && !value.startsWith('url(')) {
        return `url(${value})`;
    }
    return undefined;
}
function unUrlIt(value: string|undefined) {
    if (value) {
        if (value.startsWith('url(')) {
            value = value.substring(4);
        }
        if (value.endsWith(')')) {
            value = value.substring(0, value.length -1);
        }
        return value
    }
    return undefined;
}

function showClear(deviceType: string, attributes: BlockCSSProperties) {
    switch (deviceType) {
        case 'Tablet':
            return !!attributes.tabletBackgroundImage && attributes.tabletBackgroundImage !== 'none';
        case 'Mobile':
            return !!attributes.mobileBackgroundImage && attributes.mobileBackgroundImage !== 'none';
        default:
            return !!attributes.backgroundImage && attributes.backgroundImage !== 'none';
    }
}

export type BackgroundImageControlProps = {
    label?: string;
    attributes: BlockCSSProperties;
    setAttributes: (values: Partial<BackgroundImageControlProps['attributes']>) => void;
    help?: string | { desktop?: string, tablet?: string, mobile?: string };
}
const BackgroundImageControl = (props: BackgroundImageControlProps) => {
    const [showOnDesktop, setShowOnDesktop] = useState<boolean>(props.attributes['backgroundImage'] !== 'none');
    const [showOnTablet, setShowOnTablet] = useState<boolean>(props.attributes['tabletBackgroundImage'] !== 'none');
    const [showOnMobile, setShowOnMobile] = useState<boolean>(props.attributes['mobileBackgroundImage'] !== 'none');

    const deviceType = useGetPreviewDeviceType();
    const label = props.label !== undefined ? props.label : 'Background Image';

    function onClear() {
        switch (deviceType) {
            case 'Tablet':
                props.setAttributes({...props.attributes, tabletBackgroundImage: undefined});
                break;
            case 'Mobile':
                props.setAttributes({...props.attributes, mobileBackgroundImage: undefined});
                break;
            default:
                props.setAttributes({...props.attributes, backgroundImage: undefined});
        }
    }

    return (
        <div className="wpx--background-image-control">
            <ControlHeader
                title={label}
                isResponsive={true}
                onClear={showClear(deviceType, props.attributes) ? onClear : undefined}
            />
            {deviceType === 'Desktop' &&
                <>
                    {(props.attributes.backgroundImage !== 'none') &&
                    <MediaControl
                        attributes={{url: unUrlIt(props.attributes.backgroundImage)}}
                        setAttributes={attributes => {
                            props.setAttributes({...props.attributes, backgroundImage: urlIt(attributes.url)});
                        }}
                        help={helpText(props.help, 'desktop')}
                    />}
                    <ToggleControl
                        label={'Show on Desktop'}
                        checked={showOnDesktop}
                        onChange={value => {
                            props.setAttributes({...props.attributes, backgroundImage: value ? undefined : 'none'});
                            setShowOnDesktop(value);
                        }}
                    />
                </>
            }
            {deviceType === 'Tablet' &&
                <>
                    {(props.attributes.tabletBackgroundImage !== 'none') &&
                        <MediaControl
                            attributes={{url: unUrlIt(props.attributes.tabletBackgroundImage)}}
                            setAttributes={attributes => {
                                props.setAttributes({...props.attributes, tabletBackgroundImage: urlIt(attributes.url)});
                            }}
                            help={helpText(props.help, 'tablet')}
                        />}
                    <ToggleControl
                        label={'Show on Tablet'}
                        checked={showOnTablet}
                        onChange={value => {
                            props.setAttributes({
                                ...props.attributes,
                                tabletBackgroundImage: value ? undefined : 'none'
                            });
                            setShowOnTablet(value)
                        }}
                    />
                </>
            }
            {deviceType === 'Mobile' &&
                <>
                    {(props.attributes.mobileBackgroundImage !== 'none') &&
                        <MediaControl
                            attributes={{url: unUrlIt(props.attributes.mobileBackgroundImage)}}
                            setAttributes={attributes => {
                                props.setAttributes({...props.attributes, mobileBackgroundImage: urlIt(attributes.url)});
                            }}
                            help={helpText(props.help, 'mobile')}
                        />}
                    <ToggleControl
                        label={'Show on Mobile'}
                        checked={showOnMobile}
                        onChange={value => {
                            props.setAttributes({
                                ...props.attributes,
                                tabletBackgroundImage: value ? undefined : 'none'
                            });
                            setShowOnMobile(value);
                        }}
                    />
                </>
            }
        </div>
    );
}

export default BackgroundImageControl;
