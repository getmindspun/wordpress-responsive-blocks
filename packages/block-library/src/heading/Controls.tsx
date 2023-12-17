import {Props} from './types';
import {InspectorControls} from '@wordpress/block-editor';

import {
    BaseControls,
    ContainerContents,
    ContainerControl,
    CustomCSSControl,
    HeadingTagControl
} from '@mindspun/wpx';

const Controls = (props: Props) => {
    return (
        <InspectorControls>
            <ContainerContents>
                <BaseControls
                    attributes={props.attributes.style}
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
                        tagName={props.attributes.tagName}
                        onChange={tagName => props.setAttributes({tagName})}
                    />
                </BaseControls>
            </ContainerContents>
            <ContainerControl title={'Custom CSS'}>
                <ContainerContents>
                    <CustomCSSControl
                        blockId={props.attributes.blockId}
                        attributes={props.attributes.style}
                        setAttributes={style => {
                            props.setAttributes({style: {...props.attributes.style, ...style}});
                        }}
                        isResponsive={true}
                    />
                </ContainerContents>
            </ContainerControl>
        </InspectorControls>
    );
}

export default Controls;
