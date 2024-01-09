import {InspectorControls} from '@wordpress/block-editor';

import {
    BackgroundColorControl, BlockCSSProperties,
    ColorsGroup, ContainerContents,
    GapControl, JustifyContentControl, MarginControl,
} from '@mindspun/wpx';

import {Props} from '../types';
import {__} from '@wordpress/i18n';
import {ToggleControl} from '@wordpress/components';

const Controls = (props: Props) => {
    return (
        <InspectorControls>
            <div
                className={'wp-block-mindspun-buttons--controls'}
            >
                <ContainerContents>
                    <JustifyContentControl
                        attributes={props.attributes.style}
                        setAttributes={style => {
                            props.setAttributes({style: {...props.attributes.style, ...style}});
                        }}
                        options={['left', 'center', 'right', 'space-between']}
                        isResponsive={true}
                    />
                    <ToggleControl
                        label={__('Allow to wrap to multiple lines.')}
                        checked={props.attributes.style.flexWrap === undefined || props.attributes.style.flexWrap === 'wrap'}
                        onChange={isChecked => {
                            const style = {...props.attributes.style, flexWrap: isChecked ? undefined : 'nowrap' as BlockCSSProperties['flexWrap']}
                            props.setAttributes({style})
                        }}
                    />
                    <ColorsGroup isResponsive={true}>
                        <BackgroundColorControl
                            attributes={props.attributes.style}
                            setAttributes={style => {
                                props.setAttributes({style: {...props.attributes.style, ...style}});
                            }}
                            isResponsive={true}
                            hideHeader={true}
                        />
                    </ColorsGroup>
                    <GapControl
                        attributes={props.attributes.style}
                        setAttributes={style => {
                            props.setAttributes({style: {...props.attributes.style, ...style}});
                        }}
                        isResponsive={true}
                    />
                    <MarginControl
                        attributes={props.attributes.style}
                        setAttributes={style => {
                            props.setAttributes({style: {...props.attributes.style, ...style}});
                        }}
                        isResponsive={true}
                    />
                </ContainerContents>
            </div>
        </InspectorControls>
    );
}

export default Controls;
