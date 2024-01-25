import {InspectorControls} from '@wordpress/block-editor';

import {BaseControls, BlockCSSProperties, ContainerContents} from '@mindspun/wpx';

import {Props} from '../types';
import ColspanControl from './ColspanControl';

const Controls = (props: Props) => {
    return (
        <InspectorControls>
            <ContainerContents>
                <ColspanControl
                    attributes={props.attributes.colspan}
                    setAttributes={colspan => {
                        props.setAttributes({colspan: {...props.attributes.colspan, ...colspan}});
                    }}
                />
                <BaseControls
                    attributes={props.attributes.style ? props.attributes.style : {} as BlockCSSProperties}
                    setAttributes={style => {
                        props.setAttributes({style: {...props.attributes.style, ...style}});
                    }}
                    options={{
                        padding: {responsive: true}
                    }}
                />
            </ContainerContents>
        </InspectorControls>
    );
};

export default Controls;
