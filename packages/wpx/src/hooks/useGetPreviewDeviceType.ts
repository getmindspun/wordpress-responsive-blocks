import {useSelect} from '@wordpress/data';

export function useGetPreviewDeviceType() {
    const {deviceType} = useSelect(select => {
        const selectors = select('core/edit-post') as {
            __experimentalGetPreviewDeviceType: () => string
        } | null;

        return {
            deviceType: selectors ? selectors.__experimentalGetPreviewDeviceType() : 'Desktop'
        }
    }, []);

    return deviceType;
}
