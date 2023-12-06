import {Props} from './types';
import {InspectorControls} from '@wordpress/block-editor';

import {FontSizeControl} from 'wpx';

const Controls = (props: Props) => {
    return (
        <InspectorControls>
            <FontSizeControl
                value={props.attributes.fontSize}
                onChange={(fontSize: string | number | undefined) => {
                    props.setAttributes({fontSize});
                }}
            />
        </InspectorControls>
    );
}

export default Controls;
