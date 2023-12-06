import './PaddingControl.scss';

import {useGetPreviewDeviceType} from '../../hooks';
import {PaddingControlProps} from './PaddingControl';
import PaddingBaseControl from './PaddingBaseControl';

const PaddingResponsiveControl = (props: {
    attributes: PaddingControlProps['attributes']
    setAttributes: (attributes: Partial<PaddingControlProps['attributes']>) => void;
    isAdvanced: boolean,
    isLinked: boolean,
}) => {
    const deviceType = useGetPreviewDeviceType();

    return (
        <>
            {deviceType === 'Desktop' &&
                <PaddingBaseControl
                    attributes={props.attributes}
                    setAttributes={attributes => {
                        props.setAttributes({...props.attributes, ...attributes})
                    }}
                    isAdvanced={props.isAdvanced}
                    isLinked={props.isLinked}
                />
            }
            {deviceType === 'Tablet' &&
                <PaddingBaseControl
                    attributes={{
                        paddingTop: props.attributes.tabletPaddingTop,
                        paddingRight: props.attributes.tabletPaddingRight,
                        paddingBottom: props.attributes.tabletPaddingBottom,
                        paddingLeft: props.attributes.tabletPaddingLeft,
                    }}
                    setAttributes={attributes => props.setAttributes({
                        ...props.attributes,
                        tabletPaddingTop: attributes.paddingTop,
                        tabletPaddingRight: attributes.paddingRight,
                        tabletPaddingBottom: attributes.paddingBottom,
                        tabletPaddingLeft: attributes.paddingLeft,
                    })}
                    isAdvanced={props.isAdvanced}
                    isLinked={props.isLinked}
                />
            }
            {deviceType === 'Mobile' &&
                <PaddingBaseControl
                    attributes={{
                        paddingTop: props.attributes.mobilePaddingTop,
                        paddingRight: props.attributes.mobilePaddingRight,
                        paddingBottom: props.attributes.mobilePaddingBottom,
                        paddingLeft: props.attributes.mobilePaddingLeft,
                    }}
                    setAttributes={attributes => props.setAttributes({
                        ...props.attributes,
                        mobilePaddingTop: attributes.paddingTop,
                        mobilePaddingRight: attributes.paddingRight,
                        mobilePaddingBottom: attributes.paddingBottom,
                        mobilePaddingLeft: attributes.paddingLeft,
                    })}
                    isAdvanced={props.isAdvanced}
                    isLinked={props.isLinked}
                />
            }
        </>
    );
};

export default PaddingResponsiveControl;
