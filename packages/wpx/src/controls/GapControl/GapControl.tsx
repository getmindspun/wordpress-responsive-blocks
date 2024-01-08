import {useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';

import './GapControl.scss';

import {BlockCSSProperties} from '../../types';
import ControlHeader from '../../components/ControlHeader/ControlHeader';
import {useGetPreviewDeviceType} from '../../hooks';

import {headerHint, showClear} from './utils';
import GapResponsiveControl from './GapResponsiveControl';
import GapBaseControl from './GapBaseControl';


export interface GapControlProps {
    label?: string
    attributes: BlockCSSProperties
    setAttributes: (attributes: Partial<GapControlProps['attributes']>) => void;
    isResponsive?: boolean
}

const GapControl = (props: GapControlProps) => {
    const deviceType = useGetPreviewDeviceType(!!props.isResponsive);
    const [isAdvanced, setIsAdvanced] = useState(false);

    function onClear() {
        if (deviceType === 'Tablet') {
            props.setAttributes({tabletGap: undefined});
        } else if (deviceType === 'Mobile') {
            props.setAttributes({mobileGap: undefined});
        } else {
            props.setAttributes({gap: undefined});
        }
    }

    return (
        <div className="wpx--gap-control">
            <ControlHeader
                title={props.label}
                hint={headerHint(props.attributes, deviceType)}
                isAdvanced={isAdvanced} onAdvancedChange={setIsAdvanced}
                isResponsive={props.isResponsive}
                onClear={showClear(props.attributes, deviceType) ? onClear : undefined}
            />
            {props.isResponsive ?
                <GapResponsiveControl
                    {...props}
                    isAdvanced={isAdvanced}
                /> :
                <GapBaseControl
                    gap={props.attributes.gap}
                    onChange={gap => {
                        props.setAttributes({gap});
                    }}
                    isAdvanced={isAdvanced}
                />
            }
        </div>
    );
};

GapControl.defaultProps = {
    label: __('Gap')
}

export default GapControl;
