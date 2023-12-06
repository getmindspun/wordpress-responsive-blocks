import {useDispatch} from '@wordpress/data';

export function useSetPreviewDeviceType() {
    const dispatch = useDispatch('core/edit-post') as {
        __experimentalSetPreviewDeviceType: (value: string) => void;
    } ;

    return (value: string) => {
        dispatch.__experimentalSetPreviewDeviceType(value);
    }
}
