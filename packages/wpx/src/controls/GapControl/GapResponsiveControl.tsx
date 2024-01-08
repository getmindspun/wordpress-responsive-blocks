import {useGetPreviewDeviceType} from '../../hooks';
import {GapControlProps} from './GapControl';
import GapBaseControl from './GapBaseControl';

const GapResponsiveControl = (props: {
    attributes: GapControlProps['attributes']
    setAttributes: (attributes: Partial<GapControlProps['attributes']>) => void;
    isAdvanced: boolean
    isResponsive?: boolean
}) => {
    const deviceType = useGetPreviewDeviceType(!!props.isResponsive);

    return (
        <>
            {deviceType === 'Desktop' &&
                <GapBaseControl
                    gap={props.attributes.gap}
                    onChange={gap => {
                        props.setAttributes({gap})
                    }}
                    isAdvanced={props.isAdvanced}
                />
            }
            {deviceType === 'Tablet' &&
                <GapBaseControl
                    gap={props.attributes.tabletGap}
                    onChange={tabletGap => {
                        props.setAttributes({tabletGap})
                    }}
                    isAdvanced={props.isAdvanced}
                />
            }
            {deviceType === 'Mobile' &&
                <GapBaseControl
                    gap={props.attributes.mobileGap}
                    onChange={mobileGap => {
                        props.setAttributes({mobileGap})
                    }}
                    isAdvanced={props.isAdvanced}
                />
            }
        </>
    );
};

export default GapResponsiveControl;
