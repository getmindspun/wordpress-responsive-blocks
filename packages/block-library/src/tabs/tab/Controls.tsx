import {InspectorControls} from '@wordpress/block-editor';

import {ContainerContents, ControlHeader} from '@mindspun/wpx';

import {Props} from './types';

const Controls = (props: Props) => {

    function onChange(value: string) {
        props.setAttributes({label: value});
    }

    return (
        <InspectorControls>
            <div className={'wp-block-mindspun-tab--controls'}>
                <ContainerContents>
                    <div className="wpx--tab-controls">
                        <ControlHeader title="Title"/>
                        <input
                            type="text"
                            value={props.attributes.label}
                            onChange={(event => onChange(event.target.value))}
                        />
                    </div>
                </ContainerContents>
            </div>
        </InspectorControls>
    );
};

export default Controls;
