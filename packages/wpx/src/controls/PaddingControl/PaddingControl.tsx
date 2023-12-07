import {useState} from '@wordpress/element';

import './PaddingControl.scss';

import {BlockCSSProperties} from '../../types';
import PaddingResponsiveControl from '../PaddingControl/PaddingResponsiveControl';
import PaddingBaseControl from '../PaddingControl/PaddingBaseControl';
import ControlHeader from '../../components/ControlHeader/ControlHeader';
import {headerHint, showClear} from './utils';
import {useGetPreviewDeviceType} from '../../hooks';


export interface PaddingControlProps {
    label?: string
    attributes: BlockCSSProperties
    setAttributes: (attributes: Partial<PaddingControlProps['attributes']>) => void;
    isResponsive?: boolean
}

const PaddingControl = (props: PaddingControlProps) => {
    const deviceType = useGetPreviewDeviceType();
    const [isLinked, setIsLinked] = useState(true);
    const [isAdvanced, setIsAdvanced] = useState(false);

    function onClear() {
        if (deviceType === 'Tablet') {
            props.setAttributes({
                tabletPaddingTop: undefined,
                tabletPaddingRight: undefined,
                tabletPaddingBottom: undefined,
                tabletPaddingLeft: undefined,
            });
        } else if (deviceType === 'Mobile') {
            props.setAttributes({
                mobilePaddingTop: undefined,
                mobilePaddingRight: undefined,
                mobilePaddingBottom: undefined,
                mobilePaddingLeft: undefined,
            });
        } else {
            props.setAttributes({
                paddingTop: undefined,
                paddingRight: undefined,
                paddingBottom: undefined,
                paddingLeft: undefined,
            });
        }
    }

    return (
        <div className="wpx--padding-control">
            <ControlHeader
                title={props.label}
                hint={ isLinked ? headerHint(props.attributes, deviceType) : ''}
                isLinked={ isLinked } onLinkedChange={ setIsLinked }
                isAdvanced={ isAdvanced } onAdvancedChange={ setIsAdvanced }
                isResponsive={props.isResponsive}
                onClear={showClear(props.attributes, deviceType) ? onClear : undefined}
            />
            {props.isResponsive ?
                <PaddingResponsiveControl
                    {...props}
                    isAdvanced={isAdvanced}
                    isLinked={isLinked}
                /> :
                <PaddingBaseControl
                    attributes={props.attributes}
                    setAttributes={props.setAttributes}
                    isAdvanced={isAdvanced}
                    isLinked={isLinked}
                />
            }
        </div>
    );
};

PaddingControl.defaultProps = {
    label: 'Padding'
}

export default PaddingControl;
