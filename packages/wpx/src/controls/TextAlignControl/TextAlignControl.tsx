import {__} from '@wordpress/i18n';

import {BlockCSSProperties} from '../../types';
import {ControlHeader} from '../../components';

import './TextAlignControl.scss';
import TextAlignBaseControl from './TextAlignBaseControl';
import TextAlignResponsiveControl from './TextAlignResponsiveControl';

export type TextAlignControlProps = {
    label?: string;
    attributes: Pick<BlockCSSProperties, 'textAlign' | 'tabletTextAlign' | 'mobileTextAlign'>
    setAttributes: (attributes: Partial<TextAlignControlProps['attributes']>) => void;
    isResponsive?: boolean;
}

const TextAlignControl = (props: TextAlignControlProps) => {
    return (
        <div className="wpx--text-align-control">
            <ControlHeader
                title={props.label}
                isResponsive={props.isResponsive}
            />
            {props.isResponsive ?
                <TextAlignResponsiveControl {...props} /> :
                <TextAlignBaseControl
                    label={props.label}
                    textAlign={props.attributes.textAlign}
                    onChange={textAlign => {
                        props.setAttributes({...props.attributes, textAlign});
                    }}
                />
            }
        </div>
    );
};

TextAlignControl.defaultProps = {
    label: __('Text Align'),
}

export default TextAlignControl;
