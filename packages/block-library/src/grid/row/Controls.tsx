import {InspectorControls} from '@wordpress/block-editor';

import {Props} from '../types';

import {ContainerContents, GapControl} from '@mindspun/wpx';

const Controls = (props: Props & {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}) => {
    return (
        <>
            <InspectorControls>
                <div
                    className={'wp-block-mindspun-grid--controls'}
                    onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}
                >
                    <ContainerContents>
                        <GapControl
                            attributes={props.attributes.style}
                            setAttributes={style => {
                                props.setAttributes({style: {...props.attributes.style, ...style}});
                            }}
                            isResponsive={true}
                        />
                    </ContainerContents>
                </div>
            </InspectorControls>
        </>
    );
}

export default Controls;
