import {__} from '@wordpress/i18n';

import './VerticalAlignControl.scss';
import {BlockCSSProperties, VerticalAlign} from '../../types';
import VerticalAlignResponsiveControl from './VerticalAlignResponsiveControl';
import VerticalAlignBaseControl from './VerticalAlignBaseControl';
import {ControlHeader} from '../../components';

export type VerticalAlignControlProps = {
    label?: string;
    options?: VerticalAlign[];
    attributes: BlockCSSProperties;
    setAttributes: (attributes: Partial<VerticalAlignControlProps['attributes']>) => void;
    isResponsive?: boolean;
}

const VerticalAlignControl = (props: VerticalAlignControlProps) => {
    return (
        <div className="wpx--vertical-align-control">
            <ControlHeader
                title={props.label}
                isResponsive={props.isResponsive}
            />
            {props.isResponsive ?
                <VerticalAlignResponsiveControl {...props}/> :
                <VerticalAlignBaseControl
                    label={props.label}
                    options={props.options!}
                    verticalAlign={props.attributes.verticalAlign}
                    onChange={verticalAlign => {
                        props.setAttributes({...props.attributes, verticalAlign});
                    }}
                />
            }
        </div>
    );
};

VerticalAlignControl.defaultProps = {
    label: __('Vertical Align'),
    options: ['top', 'middle', 'bottom', 'stretch'] as VerticalAlign[],
}

export default VerticalAlignControl;
