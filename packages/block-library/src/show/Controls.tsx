import {InspectorAdvancedControls, InspectorControls} from '@wordpress/block-editor';
import {SelectControl, TextControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {ContainerContents, WidthHeightControl} from '@mindspun/mrblx';

import {Props} from './types';

const OPTIONS = [
    {label: 'None', value: 'none'},
    {label: 'Flip Right', value: 'flip-right'},
    {label: 'Flip Left', value: 'flip-left'},
    {label: 'Flip Up', value: 'flip-up'},
    {label: 'Flip Down', value: 'flip-down'},
    {label: 'Slide Right', value: 'slide-right'},
    {label: 'Slide Left', value: 'slide-left'},
    {label: 'Slide Up', value: 'slide-up'},
    {label: 'Slide Down', value: 'slide-down'},
];

const Controls = (
    props: Props & {
        onMouseEnter?: () => void;
        onMouseLeave?: () => void;
    }
) => {
    return (
        <>
            <InspectorControls>
                <div
                    className={'wp-block-mindspun-show-hide--controls'}
                    onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}
                >
                    <ContainerContents>
                        <SelectControl
                            label={__('Transition')}
                            value={props.attributes.transition}
                            options={OPTIONS}
                            onChange={(transition) =>
                                props.setAttributes({transition})
                            }
                            __nextHasNoMarginBottom
                        />
                        <WidthHeightControl
                            label={'Height'}
                            propertyName={'height'}
                            attributes={props.attributes.style}
                            setAttributes={(style) => {
                                props.setAttributes({
                                    style: {...props.attributes.style, ...style},
                                });
                            }}
                            isResponsive={true}
                        />
                        <WidthHeightControl
                            label={'Width'}
                            propertyName={'width'}
                            attributes={props.attributes.style}
                            setAttributes={(style) => {
                                props.setAttributes({
                                    style: {...props.attributes.style, ...style},
                                });
                            }}
                            isResponsive={true}
                        />
                    </ContainerContents>
                </div>
            </InspectorControls>
            <InspectorAdvancedControls>
                <TextControl
                    label={__('Event Type')}
                    value={
                        props.attributes.eventType
                            ? props.attributes.eventType
                            : 'mrblx.show'
                    }
                    onChange={(eventType) => {
                        props.setAttributes({eventType});
                    }}
                    help={__('The custom event that shows a given inner block.')}
                />
            </InspectorAdvancedControls>
        </>
    );
};

export default Controls;
