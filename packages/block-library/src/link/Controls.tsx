import {Props} from './types';
import {InspectorControls} from '@wordpress/block-editor';

import {
    BaseControls,
    BlockCSSProperties,
    ContainerContents,
    ContainerControl,
    CustomCSSControl,
    LinkControl
} from '@mindspun/wpx';

const Controls = (props: Props & {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}) => {
    return (
        <InspectorControls>
            <div
                className={'wp-block-mindspun-link-group--controls'}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
            >
                <ContainerContents>
                    <LinkControl
                        attributes={props.attributes.link}
                        setAttributes={link => {
                            props.setAttributes({link: {...props.attributes.link, ...link}});
                        }}
                    />
                </ContainerContents>
            </div>
        </InspectorControls>
    );
}

export default Controls;
