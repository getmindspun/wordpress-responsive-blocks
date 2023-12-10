import {useCallback, useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';

import CodeMirror from '@uiw/react-codemirror';
import {css} from '@codemirror/lang-css';

import {prop} from './utils';
import {CustomCSSControlProps} from './CustomCSSControl';
import {DeviceTypeContainer} from '../../components';

const CustomCSSEditor = (props: CustomCSSControlProps & {
    deviceType: string;
}) => {
    const value = props.attributes[prop(props.deviceType)];

    function onChange(val: string){
        const key = prop(props.deviceType);
        props.setAttributes({
            [key]: val
        });
    }

    return (
        <div>
            <CodeMirror
                value={value}
                height="200px"
                extensions={[css()]}
                onChange={onChange}
            />
            <DeviceTypeContainer deviceType={'Desktop'}>
                <small>
                    {__('CSS added here should be scoped to the block, meaning each selector should begin with  ')}
                    <em>#wpx-{props.blockId}.</em>
                </small>
            </DeviceTypeContainer>
            <DeviceTypeContainer deviceType={'Tablet'}>
                <small>
                    {__('This CSS will automatically be wrapped in a media query to limit it to tablet devices and smaller.')}
                </small>
            </DeviceTypeContainer>
            <DeviceTypeContainer deviceType={'Mobile'}>
                <small>
                    {__('This CSS will automatically be wrapped in a media query to limit it to mobile devices.')}
                </small>
            </DeviceTypeContainer>
        </div>
    );
}

export default CustomCSSEditor;
