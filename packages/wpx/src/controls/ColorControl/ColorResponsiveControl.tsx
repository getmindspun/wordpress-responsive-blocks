import {useGetPreviewDeviceType} from '../../hooks';
import {ColorControlProps} from './ColorControl';
import ColorBaseControl from './ColorBaseControl';


const ColorResponsiveControl = (props: ColorControlProps & {label: string}) => {
    const deviceType = useGetPreviewDeviceType();

    return (
        <>
            {deviceType === 'Desktop' &&
                <ColorBaseControl
                    label={props.label}
                    value={props.attributes.color}
                    onChange={(color) => {
                        props.setAttributes({...props.attributes, color})
                    }}
                    placement={props.placement}
                />
            }
            {deviceType === 'Tablet' &&
                <ColorBaseControl
                    label={props.label}
                    value={props.attributes.tabletColor}
                    onChange={(tabletColor) => {
                        props.setAttributes({...props.attributes, tabletColor})
                    }}
                    placement={props.placement}
                />
            }
            {deviceType === 'Mobile' &&
                <ColorBaseControl
                    label={props.label}
                    value={props.attributes.mobileColor}
                    onChange={(mobileColor) => {
                        props.setAttributes({...props.attributes, mobileColor})
                    }}
                    placement={props.placement}
                />
            }
        </>
    );
};

export default ColorResponsiveControl;
