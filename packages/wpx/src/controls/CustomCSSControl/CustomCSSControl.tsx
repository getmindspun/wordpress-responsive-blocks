import {useState} from '@wordpress/element';
import {Modal} from '@wordpress/components';
import {__} from '@wordpress/i18n';

import './CustomCSSControl.scss';
import {useGetPreviewDeviceType} from '../../hooks';
import {ControlHeader} from '../../components';
import CustomCSSEditor from './CustomCSSEditor';
import {prop, showClear} from './utils';

export type CustomCSSProperties = {
    customCSS?: string,
    tabletCustomCSS?: string,
    mobileCustomCSS?: string
}

export type CustomCSSControlProps = {
    blockId?: string,
    attributes: CustomCSSProperties,
    setAttributes: (attributes: CustomCSSControlProps['attributes']) => void
    isResponsive?: boolean
}

const CustomCSSControl = (props: CustomCSSControlProps) => {
    const deviceType = useGetPreviewDeviceType();
    const [showModal, setShowModal] = useState(false);

    const title = __('Custom CSS') + ((deviceType !== 'Desktop') ? ` (${deviceType})` : '');

    function onClear() {
        props.setAttributes({
            [prop(deviceType)]: undefined
        });
    }

    return (
        <div className={'wpx--custom-css-control'}>
            {showModal &&
                <Modal
                    focusOnMount //focus on the first element in the modal
                    shouldCloseOnEsc
                    shouldCloseOnClickOutside
                    overlayClassName="wpx--custom-css-control--modal"
                    title={title}
                    onRequestClose={() => {
                        setShowModal(false);
                    }}
                >
                    <CustomCSSEditor
                        {...props}
                        deviceType={deviceType}
                    />
                </Modal>
            }
            <ControlHeader
                onClear={showClear(props.attributes, deviceType) ? onClear : undefined}
                onExpand={() => setShowModal(true)}
                isResponsive={props.isResponsive}
            />
            <CustomCSSEditor
                {...props}
                deviceType={deviceType}
            />
        </div>
    );
}

export default CustomCSSControl;
