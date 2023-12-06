import {Props} from './types';
import {InspectorControls} from '@wordpress/block-editor';

import {BaseControls, HeadingTagControl} from '@mindspun/wpx';

const Controls = (props: Props) => {
    return (
        <InspectorControls>
            <BaseControls
                attributes={props.attributes.style ? props.attributes.style : {}}
                setAttributes={style => {
                    props.setAttributes({style: {...props.attributes.style, ...style}});
                }}
                options={{
                    color: {responsive: true}
                }}
            >
                <HeadingTagControl
                    tag={props.attributes.tagName}
                    onChange={tagName => props.setAttributes({tagName})}
                />
            </BaseControls>
        </InspectorControls>
    );
}

export default Controls;
