import {__} from '@wordpress/i18n';

import {prop} from './utils';
import {CustomCSSControlProps} from './CustomCSSControl';
import {DeviceTypeContainer} from '../../components';
import CSSEditor from './CSSEditor';

const CustomCSSEditor = (props: CustomCSSControlProps & {
    deviceType: string;
}) => {
    const value = props.attributes[prop(props.isResponsive, props.deviceType)];

    function onChange(val: string){
        const key = prop(props.isResponsive, props.deviceType);
        props.setAttributes({
            [key]: val
        });
    }

    return (
        <div>
            <CSSEditor
                value={value}
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
