import './FontSizeControl.scss';
import {useGetPreviewDeviceType} from '../../hooks';
import {FontSizeControlProps} from './FontSizeControl';
import FontSizeBaseControl from './FontSizeBaseControl';

const FontSizeResponsiveControl = (props: {
    attributes: FontSizeControlProps['attributes'],
    setAttributes: FontSizeControlProps['setAttributes'],
    isAdvanced?: boolean
}) => {
    const deviceType = useGetPreviewDeviceType();

    return (
        <div className="wpx--font-size-control">
            {deviceType === 'Desktop' &&
                <FontSizeBaseControl
                    fontSize={props.attributes.fontSize}
                    onChange={(fontSize) => {
                        props.setAttributes({fontSize});
                    }}
                    isAdvanced={props.isAdvanced}
                />
            }
            {deviceType === 'Tablet' &&
                <FontSizeBaseControl
                    fontSize={props.attributes.tabletFontSize}
                    onChange={(tabletFontSize) => {
                        props.setAttributes({tabletFontSize});
                    }}
                    isAdvanced={props.isAdvanced}
                />
            }
            {deviceType === 'Mobile' &&
                <FontSizeBaseControl
                    fontSize={props.attributes.mobileFontSize}
                    onChange={(mobileFontSize) => {
                        props.setAttributes({mobileFontSize});
                    }}
                    isAdvanced={props.isAdvanced}
                />
            }
        </div>
    );
};

export default FontSizeResponsiveControl;
