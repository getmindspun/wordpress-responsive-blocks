import {CSSProperties} from 'react';
import './ColorControl.scss';
import ColorResponsiveControl from './ColorResponsiveControl';
import ColorBaseControl from './ColorBaseControl';
import {ControlHeader} from '../../components';

/* Defined in @wordpress/component but not exported. */
export type PopoverPlacement = 'left' | 'right' | 'top' | 'bottom' |
    'left-end' | 'left-start' | 'right-end' | 'right-start' |
    'top-end' | 'top-start' | 'bottom-end' | 'bottom-start' | 'overlay';

export interface ColorControlProps {
    label: string;
    attributes: {
        color?: CSSProperties['color'],
        tabletColor?: CSSProperties['color'],
        mobileColor?: CSSProperties['color'],
    },
    setAttributes: (attributes: Partial<ColorControlProps['attributes']>) => void,
    placement?: PopoverPlacement;
    isResponsive?: boolean;
    hideHeader?: boolean
}

const ColorControl = (props: ColorControlProps) => {

    return (
        <div className="wpx--color-control">
            {props.isResponsive && !props.hideHeader && <ControlHeader isResponsive={true} /> }
            {props.isResponsive ?
                <ColorResponsiveControl {...props}/> :
                <ColorBaseControl
                    label={props.label}
                    value={props.attributes.color}
                    onChange={color => {
                        props.setAttributes({...props.attributes, color});
                    }}
                    placement={props.placement}
                />
            }
        </div>
    );
};

export default ColorControl;
