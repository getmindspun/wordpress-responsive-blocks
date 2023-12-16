import {__} from '@wordpress/i18n';

import {BlockCSSProperties} from '../../types';
import ColorControl, {PopoverPlacement} from '../ColorControl/ColorControl';

export interface BackgroundColorControlProps {
    label?: string;
    attributes: Pick<BlockCSSProperties, 'backgroundColor'|'tabletBackgroundColor'|'mobileBackgroundColor'>,
    setAttributes: (attributes: Partial<BackgroundColorControlProps['attributes']>) => void,
    placement?: PopoverPlacement;
    isResponsive?: boolean;
    hideHeader?: boolean
}

const BackgroundColorControl = (props: BackgroundColorControlProps) => {

    return (
        <ColorControl
            label={props.label}
            attributes={{
                color: props.attributes.backgroundColor,
                tabletColor: props.attributes.tabletBackgroundColor,
                mobileColor: props.attributes.mobileBackgroundColor,
            }}
            setAttributes={attributes => {
                props.setAttributes({
                    backgroundColor: attributes.color,
                    tabletBackgroundColor: attributes.tabletColor,
                    mobileBackgroundColor: attributes.mobileColor,
                })
            }}
            isResponsive={props.isResponsive}
            placement={props.placement}
            hideHeader={props.hideHeader}
        />
    );
};

BackgroundColorControl.defaultProps = {
    label: __('Background')
}

export default BackgroundColorControl;
