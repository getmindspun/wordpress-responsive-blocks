import {Props} from '../types';
import {InspectorControls} from '@wordpress/block-editor';

import {BaseControls, ContainerContents} from '@mindspun/wpx';
import {ToggleControl} from '@wordpress/components';
import DisplayControl from './DisplayControl';

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
                        margin: {responsive: true},
                        padding: {responsive: true}
                    }}
                >
                    <DisplayControl
                        attributes={props.attributes.style}
                        setAttributes={newStyle => {
                            const style = {...props.attributes.style, ...newStyle};
                            props.setAttributes({style});
                        }} />
                </BaseControls>
            </ContainerContents>
        </InspectorControls>
    );
}

export default Controls;
