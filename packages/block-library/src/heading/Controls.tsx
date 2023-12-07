import {Props} from './types';
import {InspectorControls} from '@wordpress/block-editor';

import {BaseControls, ContainerContents, HeadingTagControl} from '@mindspun/wpx';

const Controls = (props: Props) => {
    return (
        <InspectorControls>
            <ContainerContents>
                <BaseControls
                    attributes={props.attributes.style ? props.attributes.style : {}}
                    setAttributes={style => {
                        props.setAttributes({style: {...props.attributes.style, ...style}});
                    }}
                    options={{
                        color: {responsive: true},
                        fontSize: {responsive: true}
                    }}
                >
                    <HeadingTagControl
                        tag={props.attributes.tagName}
                        onChange={tagName => props.setAttributes({tagName})}
                    />
                </BaseControls>
            </ContainerContents>
        </InspectorControls>
    );
}

export default Controls;
