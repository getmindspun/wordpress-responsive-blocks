import './MarginControl.scss';

import {useGetPreviewDeviceType} from '../../hooks';
import {MarginControlProps} from './MarginControl';
import MarginBaseControl from './MarginBaseControl';

const MarginResponsiveControl = (props: {
    attributes: MarginControlProps['attributes']
    setAttributes: (attributes: Partial<MarginControlProps['attributes']>) => void;
    isAdvanced: boolean,
    isLinked: boolean,
}) => {
    const deviceType = useGetPreviewDeviceType();

    return (
        <>
            {deviceType === 'Desktop' &&
                <MarginBaseControl
                    attributes={props.attributes}
                    setAttributes={attributes => {
                        props.setAttributes({...props.attributes, ...attributes})
                    }}
                    isAdvanced={props.isAdvanced}
                    isLinked={props.isLinked}
                />
            }
            {deviceType === 'Tablet' &&
                <MarginBaseControl
                    attributes={{
                        marginTop: props.attributes.tabletMarginTop,
                        marginRight: props.attributes.tabletMarginRight,
                        marginBottom: props.attributes.tabletMarginBottom,
                        marginLeft: props.attributes.tabletMarginLeft,
                    }}
                    setAttributes={attributes => props.setAttributes({
                        ...props.attributes,
                        tabletMarginTop: attributes.marginTop,
                        tabletMarginRight: attributes.marginRight,
                        tabletMarginBottom: attributes.marginBottom,
                        tabletMarginLeft: attributes.marginLeft,
                    })}
                    isAdvanced={props.isAdvanced}
                    isLinked={props.isLinked}
                />
            }
            {deviceType === 'Mobile' &&
                <MarginBaseControl
                    attributes={{
                        marginTop: props.attributes.mobileMarginTop,
                        marginRight: props.attributes.mobileMarginRight,
                        marginBottom: props.attributes.mobileMarginBottom,
                        marginLeft: props.attributes.mobileMarginLeft,
                    }}
                    setAttributes={attributes => props.setAttributes({
                        ...props.attributes,
                        mobileMarginTop: attributes.marginTop,
                        mobileMarginRight: attributes.marginRight,
                        mobileMarginBottom: attributes.marginBottom,
                        mobileMarginLeft: attributes.marginLeft,
                    })}
                    isAdvanced={props.isAdvanced}
                    isLinked={props.isLinked}
                />
            }
        </>
    );
};

export default MarginResponsiveControl;
