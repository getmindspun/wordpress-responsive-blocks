import {useSelect} from '@wordpress/data';
import {ColorObject} from '@wordpress/components/build-types/color-palette/types';

export default function useColors() {
    return useSelect(select => {
        const selectors = select('core/block-editor') as {
            getSettings: () => { colors: ColorObject[] }
        }
        return selectors ? selectors.getSettings().colors : [];
    }, []);
}