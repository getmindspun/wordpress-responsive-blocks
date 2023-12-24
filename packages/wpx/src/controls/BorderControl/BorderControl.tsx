import './BorderControl.scss';

import {BlockCSSProperties} from '../../types';
import ControlHeader from '../../components/ControlHeader/ControlHeader';
import BorderBaseControl from './BorderBaseControl';
import BorderResponsiveControl from './BorderResponsiveControl';
import BorderRadiusControl from './BorderRadiusControl';

export type BorderControlProps = {
    label?: string;
    attributes: BlockCSSProperties;
    setAttributes: (attributes: Partial<BorderControlProps['attributes']>) => void;
    isResponsive?: boolean;
    disableRadiusControl?: boolean;
}

function anySet(attributes: BlockCSSProperties) {
    return attributes.borderTop !== undefined || attributes.borderRight !== undefined || attributes.borderBottom !== undefined || attributes.borderLeft !== undefined ||
        attributes.tabletBorderTop !== undefined || attributes.tabletBorderRight !== undefined || attributes.tabletBorderBottom !== undefined || attributes.tabletBorderLeft !== undefined ||
        attributes.mobileBorderTop !== undefined || attributes.mobileBorderRight !== undefined || attributes.mobileBorderBottom !== undefined || attributes.mobileBorderLeft !== undefined;

}

const BorderControl = (props: BorderControlProps) => {
    function onClear() {
        props.setAttributes({
            ...props.attributes,
            borderTop: undefined,
            borderRight: undefined,
            borderBottom: undefined,
            borderLeft: undefined,
        })
    }

    return (
        <div className="wpx--border-control">
            <ControlHeader
                title={props.label}
                isResponsive={props.isResponsive}
                onClear={anySet(props.attributes) ? onClear : undefined}
            />
            {props.isResponsive ?
                <BorderResponsiveControl {...props}/> :
                <BorderBaseControl
                    attributes={props.attributes}
                    setAttributes={props.setAttributes}
                />
            }
            {!props.disableRadiusControl &&
                <BorderRadiusControl
                    attributes={props.attributes}
                    setAttributes={props.setAttributes}
                />
            }
        </div>
    );
};

export default BorderControl;
