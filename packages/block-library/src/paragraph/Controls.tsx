import {Props} from './types';
import {InspectorControls} from '@wordpress/block-editor';

import {BaseControls, ContainerContents} from '@mindspun/wpx';

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
                        textAlign: {responsive: true},
                        fontSize: {responsive: true},
                        letterCase: true,
                        fontAppearance: true,
                        margin: {responsive: true},
                        padding: {responsive: true}
                    }}
                />
            </ContainerContents>
        </InspectorControls>
    );
}

export default Controls;
