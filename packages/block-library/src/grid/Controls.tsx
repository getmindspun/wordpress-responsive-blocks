import {InspectorControls} from '@wordpress/block-editor';

import {Props} from './types';

import {
    ContainerContents, ContainerControl, CustomCSSControl,
    WidthHeightControl,
} from '@mindspun/wpx';

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
                    <ContainerControl title={'Width'}>
                        <ContainerContents>
                            <WidthHeightControl
                                label={'Width'}
                                propertyName={'width'}
                                attributes={props.attributes.style}
                                setAttributes={style => {
                                    props.setAttributes({style: {...props.attributes.style, ...style}});
                                }}
                                isResponsive={true}
                            />
                            <WidthHeightControl
                                label={'Min Width'}
                                propertyName={'minWidth'}
                                attributes={props.attributes.style}
                                setAttributes={style => {
                                    props.setAttributes({style: {...props.attributes.style, ...style}});
                                }}
                                isResponsive={true}
                            />
                            <WidthHeightControl
                                label={'Max Width'}
                                propertyName={'maxWidth'}
                                attributes={props.attributes.style}
                                setAttributes={style => {
                                    props.setAttributes({style: {...props.attributes.style, ...style}});
                                }}
                                isResponsive={true}
                            />
                        </ContainerContents>
                    </ContainerControl>
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
                </div>
            </InspectorControls>
        </>
    );
}

export default Controls;
