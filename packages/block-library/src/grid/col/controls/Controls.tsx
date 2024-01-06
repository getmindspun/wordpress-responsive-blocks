import {InspectorControls} from '@wordpress/block-editor';

import {ContainerContents} from '@mindspun/wpx';

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
            </ContainerContents>
        </InspectorControls>
    );
};

export default Controls;
