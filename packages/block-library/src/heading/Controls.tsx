import {Props} from './types';
import {InspectorControls} from '@wordpress/block-editor';

import {BaseControls, BlockCSSProperties, ContainerContents, HeadingTagControl} from '@mindspun/wpx';

const Controls = (props: Props) => {
    return (
        <InspectorControls>
            <ContainerContents>
                <BaseControls
                    attributes={props.attributes.style ? props.attributes.style : {} as BlockCSSProperties}
                    setAttributes={style => {
                        props.setAttributes({style: {...props.attributes.style, ...style}});
                    }}
                    options={{
                        color: {responsive: true},
                        textAlign: {responsive: true},
                        fontSize: {responsive: true},
                        letterCase: true,
                        fontAppearance: true,
                        margin: {responsive: true},
                        padding: {responsive: true}
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
