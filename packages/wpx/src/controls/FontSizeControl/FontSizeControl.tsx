import './FontSizeControl.scss';
import FontSizeResponsiveControl from './FontSizeResponsiveControl';
import {BlockCSSProperties} from '../../types';
import {ControlHeader} from '../../components';
import FontSizeBaseControl from './FontSizeBaseControl';
import {useState} from '@wordpress/element';
import {useGetPreviewDeviceType} from '../../hooks';
import {headerHint, showClear} from './utils';

export interface FontSizeControlProps {
    label?: string;
    attributes: Pick<BlockCSSProperties, 'fontSize' | 'mobileFontSize' | 'tabletFontSize'>,
    setAttributes: (values: Partial<FontSizeControlProps['attributes']>) => void;
    isResponsive?: boolean;
}

const FontSizeControl = (props: FontSizeControlProps) => {
    const deviceType = useGetPreviewDeviceType();
    const [isAdvanced, setIsAdvanced] = useState(false);

    function onClear() {
        if (deviceType === 'Tablet') {
            props.setAttributes({
                tabletFontSize: undefined,
            });
        } else if (deviceType === 'Mobile') {
            props.setAttributes({
                mobileFontSize: undefined,
            });
        } else {
            props.setAttributes({
                fontSize: undefined,
            });
        }
    }

    return (
        <div className="wpx--font-size-control">
            <ControlHeader
                title={props.label}
                hint={headerHint(props.attributes, deviceType)}
                isResponsive={props.isResponsive}
                isAdvanced={isAdvanced} onAdvancedChange={setIsAdvanced}
                onClear={showClear(props.attributes, deviceType) ? onClear : undefined}
            />
            {props.isResponsive ?
                <FontSizeResponsiveControl
                    attributes={props.attributes}
                    setAttributes={props.setAttributes}
                    isAdvanced={isAdvanced}
                /> :
                <FontSizeBaseControl
                    fontSize={ props.attributes.fontSize }
                    onChange={ (fontSize) => {
                        props.setAttributes({fontSize})
                    } }
                    isAdvanced={isAdvanced}
                />
            }
        </div>
    );
};

FontSizeControl.defaultProps = {
    label: 'Font Size'
}

export default FontSizeControl;
