import {__} from '@wordpress/i18n';
import {ToggleControl} from '@wordpress/components';

import './BoxShadowControl.scss';
import ControlHeader from '../../components/ControlHeader/ControlHeader';
import {BlockCSSProperties} from '../../types';
import {useGetPreviewDeviceType} from '../../hooks';
import {parseBoxShadow, prop, toValue} from './utils';
import BoxShadowOffsetControl from './BoxShadowOffsetControl';
import {useState} from '@wordpress/element';
import BoxShadowLengthControl from './BoxShadowLengthControl';
import {ColorControl} from '../index';

const DEFAULT = '5px 5px 10px #ccc';

export type BoxShadowProperties = Pick<BlockCSSProperties, 'boxShadow' | 'tabletBoxShadow' | 'mobileBoxShadow'>;

export type BoxShadowControlProps = {
    label?: string;
    attributes: BoxShadowProperties;
    setAttributes: (attributes: Partial<BoxShadowControlProps['attributes']>) => void;
    isResponsive?: boolean;
}

export type BoxShadow = {
    offsetX: string | 0 | undefined;
    offsetY: string | 0 | undefined;
    blurRadius: string | 0 | undefined;
    spreadRadius: string | 0 | undefined;
    color: string | undefined;
    inset: boolean;
}

const BoxShadowControl = (props: BoxShadowControlProps) => {
    const deviceType = useGetPreviewDeviceType();
    const [isAdvanced, setIsAdvanced] = useState(false);
    const value = props.attributes[prop(props.isResponsive, deviceType)];
    const boxShadow = parseBoxShadow(value);

    function onClear() {
        props.setAttributes({
            [prop(props.isResponsive, deviceType)]: undefined
        })
    }

    return (
        <div className="wpx--box-shadow-control">
            <ControlHeader
                title={props.label}
                isResponsive={props.isResponsive}
                onClear={value !== undefined ? onClear : undefined}
                isAdvanced={isAdvanced} onAdvancedChange={setIsAdvanced}
            />
            {(deviceType === 'Desktop' || props.attributes.boxShadow == undefined) && <ToggleControl
                label={__('Enable Box Shadow')}
                checked={value !== undefined}
                onChange={isChecked => {
                    props.setAttributes({[prop(props.isResponsive, deviceType)]: isChecked ? DEFAULT : undefined})
                }}
            />}
            {(props.attributes.boxShadow !== undefined) &&
                <>
                    {(deviceType !== 'Desktop') && <ToggleControl
                        label={__(`Show on ${deviceType}`)}
                        checked={props.attributes[prop(props.isResponsive, deviceType)] !== 'none'}
                        onChange={isChecked => {
                            props.setAttributes({[prop(props.isResponsive, deviceType)]: isChecked ? undefined : 'none'})
                        }}
                    />}
                    {props.attributes[prop(props.isResponsive, deviceType)] !== 'none' &&
                        <>
                            <ToggleControl
                                label={__('Enable Inset')}
                                checked={boxShadow.inset}
                                onChange={isChecked => {
                                    boxShadow.inset = isChecked;
                                    props.setAttributes({[prop(props.isResponsive, deviceType)]: toValue(boxShadow)})
                                }}
                            />
                            <ColorControl
                                label={__('Color')}
                                attributes={{
                                    color: boxShadow.color
                                }}
                                setAttributes={newAttributes => {
                                    boxShadow.color = newAttributes.color;
                                    props.setAttributes({
                                        [prop(props.isResponsive, deviceType)]: toValue(boxShadow)
                                    })
                                }}
                            />
                            <BoxShadowOffsetControl
                                label={__('Offset-X')}
                                value={boxShadow.offsetX}
                                onChange={value => {
                                    boxShadow.offsetX = value as BoxShadow['offsetX'];
                                    props.setAttributes({
                                        [prop(props.isResponsive, deviceType)]: toValue(boxShadow)
                                    })
                                }}
                                isAdvanced={isAdvanced}
                            />
                            <BoxShadowOffsetControl
                                label={__('Offset-Y')}
                                value={boxShadow.offsetY}
                                onChange={value => {
                                    boxShadow.offsetY = value as BoxShadow['offsetY'];
                                    props.setAttributes({
                                        [prop(props.isResponsive, deviceType)]: toValue(boxShadow)
                                    })
                                }}
                                isAdvanced={isAdvanced}
                            />
                            <BoxShadowLengthControl
                                label={__('Blur Radius')}
                                value={boxShadow.blurRadius}
                                onChange={value => {
                                    boxShadow.blurRadius = value as BoxShadow['blurRadius'];
                                    props.setAttributes({
                                        [prop(props.isResponsive, deviceType)]: toValue(boxShadow)
                                    })
                                }}
                                isAdvanced={isAdvanced}
                            />
                            <BoxShadowLengthControl
                                label={__('Spread Radius')}
                                value={boxShadow.spreadRadius}
                                onChange={value => {
                                    boxShadow.spreadRadius = value as BoxShadow['spreadRadius'];
                                    if (boxShadow.blurRadius === undefined) {
                                        boxShadow.blurRadius = 0;
                                    }
                                    props.setAttributes({
                                        [prop(props.isResponsive, deviceType)]: toValue(boxShadow)
                                    })
                                }}
                                isAdvanced={isAdvanced}
                            />
                        </>
                    }
                </>
            }
        </div>
    );
}

export default BoxShadowControl;
