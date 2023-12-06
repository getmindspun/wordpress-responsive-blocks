import './BorderControl.scss';

import {useGetPreviewDeviceType} from '../../hooks';
import {BorderControlProps} from './BorderControl';
import BorderRadiusBaseControl from './BorderRadiusBaseControl';

const BorderRadiusResponsiveControl = (props: BorderControlProps & {
    isLinked: boolean,
    isAdvanced: boolean,
}) => {
    const deviceType = useGetPreviewDeviceType();

    return (
        <>
            {deviceType === 'Desktop' &&
                <BorderRadiusBaseControl
                    attributes={{
                        borderTopLeftRadius: props.attributes.borderTopLeftRadius,
                        borderBottomLeftRadius: props.attributes.borderBottomLeftRadius,
                        borderTopRightRadius: props.attributes.borderTopRightRadius,
                        borderBottomRightRadius: props.attributes.borderBottomRightRadius,
                    }}
                    setAttributes={attributes => props.setAttributes({
                        borderTopLeftRadius: attributes.borderTopLeftRadius,
                        borderBottomLeftRadius: attributes.borderBottomLeftRadius,
                        borderTopRightRadius: attributes.borderTopRightRadius,
                        borderBottomRightRadius: attributes.borderBottomRightRadius,
                    })}
                    isAdvanced={props.isAdvanced}
                    isLinked={props.isLinked}
                />
            }
            {deviceType === 'Tablet' &&
                <BorderRadiusBaseControl
                    attributes={{
                        borderTopLeftRadius: props.attributes.tabletBorderTopLeftRadius,
                        borderBottomLeftRadius: props.attributes.tabletBorderBottomLeftRadius,
                        borderTopRightRadius: props.attributes.tabletBorderTopRightRadius,
                        borderBottomRightRadius: props.attributes.tabletBorderBottomRightRadius,
                    }}
                    setAttributes={attributes => props.setAttributes({
                        tabletBorderTopLeftRadius: attributes.borderTopLeftRadius,
                        tabletBorderBottomLeftRadius: attributes.borderBottomLeftRadius,
                        tabletBorderTopRightRadius: attributes.borderTopRightRadius,
                        tabletBorderBottomRightRadius: attributes.borderBottomRightRadius,
                    })}
                    isAdvanced={props.isAdvanced}
                    isLinked={props.isLinked}
                />
            }
            {deviceType === 'Mobile' &&
                <BorderRadiusBaseControl
                    attributes={{
                        borderTopLeftRadius: props.attributes.mobileBorderTopLeftRadius,
                        borderBottomLeftRadius: props.attributes.mobileBorderBottomLeftRadius,
                        borderTopRightRadius: props.attributes.mobileBorderTopRightRadius,
                        borderBottomRightRadius: props.attributes.mobileBorderBottomRightRadius,
                    }}
                    setAttributes={attributes => props.setAttributes({
                        mobileBorderTopLeftRadius: attributes.borderTopLeftRadius,
                        mobileBorderBottomLeftRadius: attributes.borderBottomLeftRadius,
                        mobileBorderTopRightRadius: attributes.borderTopRightRadius,
                        mobileBorderBottomRightRadius: attributes.borderBottomRightRadius,
                    })}
                    isAdvanced={props.isAdvanced}
                    isLinked={props.isLinked}
                />
            }
        </>
    );
};

export default BorderRadiusResponsiveControl;
