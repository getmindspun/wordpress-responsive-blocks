import {BlockAlignControl, ControlGroup} from '@mindspun/wpx';

import {Props} from '../../types';
import TabControls from './TabControls';
import {InspectorControls} from '@wordpress/block-editor';
import {ToggleControl} from '@wordpress/components';

const Controls = (props: Props) => {
    return (
        <InspectorControls>
            <TabControls
                attributes={props.attributes}
                setAttributes={props.setAttributes}
            />
            <ControlGroup
                title={'Header'}
                attributes={props.attributes.header}
                setAttributes={header => {
                    props.setAttributes({header: {...props.attributes.header, ...header}});
                }}
                options={{
                    backgroundColor: true,
                    padding: true,
                    margin: true,
                    border: true,
                }}
            >
                <BlockAlignControl
                    attributes={props.attributes.header}
                    setAttributes={header => {
                        props.setAttributes({header: {...props.attributes.header, ...header}});
                    }}
                />
                <ToggleControl
                    label="Stack Vertically on Mobile"
                    checked={ props.attributes.stackOnMobile }
                    onChange={ isChecked => {
                        props.setAttributes({stackOnMobile: isChecked})
                    }}
                />
            </ControlGroup>
            <ControlGroup
                title={'Content'}
                attributes={props.attributes.content}
                setAttributes={content => {
                    props.setAttributes({content: {...props.attributes.content, ...content}});
                }}
                options={{
                    color: true,
                    backgroundColor: true,
                    padding: true,
                    margin: true,
                    border: true,
                }}
            />
        </InspectorControls>
    );
};

export default Controls;