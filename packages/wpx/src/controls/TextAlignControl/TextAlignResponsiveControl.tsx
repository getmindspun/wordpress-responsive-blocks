import {useGetPreviewDeviceType} from '../../hooks';

import './TextAlignControl.scss';
import TextAlignBaseControl from './TextAlignBaseControl';
import {TextAlignControlProps} from './TextAlignControl';

const TextAlignControl = (props: TextAlignControlProps) => {
    const deviceType = useGetPreviewDeviceType();

    return (
        <>
            {deviceType === 'Desktop' &&
                <TextAlignBaseControl
                    textAlign={props.attributes.textAlign}
                    onChange={textAlign => {
                        props.setAttributes({textAlign});
                    }} />
            }
            {deviceType === 'Tablet' &&
                <TextAlignBaseControl
                    textAlign={props.attributes.tabletTextAlign}
                    onChange={tabletTextAlign => {
                        props.setAttributes({tabletTextAlign});
                    }} />
            }
            {deviceType === 'Mobile' &&
                <TextAlignBaseControl
                    textAlign={props.attributes.mobileTextAlign}
                    onChange={mobileTextAlign => {
                        props.setAttributes({mobileTextAlign});
                    }} />
            }
        </>
    );
};

export default TextAlignControl;
