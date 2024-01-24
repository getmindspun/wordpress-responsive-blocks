import {Props} from '../types';
import {InspectorControls} from '@wordpress/block-editor';
import {layout, styles} from '@wordpress/icons';

import {
    ContainerContents,
    TabbedContainer,
    TabbedControl,
} from '@mindspun/wpx';
import DisplayControl from './DisplayControl';
import FlexDirectionControl from './FlexDirectionControl';
import JustifyContentControl from './JustifyContentControl';
import AlignItemsControl from './AlignItemsControl';
import SizingControl from './sizing/SizingControl';
import StyleControls from './StyleControls';
import {SelectControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';

const Controls = (props: Props & {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}) => {
    return (
        <>
            <InspectorControls>
                <div
                    className={'wp-block-mindspun-container--controls'}
                    onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}
                >
                    <TabbedControl>
                        <TabbedContainer key={'Layout'} icon={layout}>
                            <ContainerContents>
                                <DisplayControl
                                    attributes={props.attributes.style}
                                    setAttributes={newStyle => {
                                        const style = {...props.attributes.style, ...newStyle};
                                        props.setAttributes({style});
                                    }}/>
                                <FlexDirectionControl
                                    attributes={props.attributes.style}
                                    setAttributes={newStyle => {
                                        const style = {...props.attributes.style, ...newStyle};
                                        props.setAttributes({style});
                                    }}/>
                                <JustifyContentControl
                                    attributes={props.attributes.style}
                                    setAttributes={newStyle => {
                                        const style = {...props.attributes.style, ...newStyle};
                                        props.setAttributes({style});
                                    }}/>
                                <AlignItemsControl
                                    attributes={props.attributes.style}
                                    setAttributes={newStyle => {
                                        const style = {...props.attributes.style, ...newStyle};
                                        props.setAttributes({style});
                                    }}/>
                                <hr/>
                                <SizingControl
                                    attributes={props.attributes.style}
                                    setAttributes={newStyle => {
                                        const style = {...props.attributes.style, ...newStyle};
                                        props.setAttributes({style});
                                    }}/>
                                <SelectControl
                                    label={__('HTML Tag')}
                                    value={ props.attributes.tagName ? props.attributes.tagName : 'div' }
                                    options={ [
                                        { label: 'div', value: 'div' },
                                        { label: 'section', value: 'section' },
                                    ] }
                                    onChange={ ( tagName ) => props.setAttributes({tagName})}
                                    __nextHasNoMarginBottom
                                />
                            </ContainerContents>
                        </TabbedContainer>
                        <TabbedContainer key={'Style'} icon={styles}>
                            <StyleControls
                                attributes={props.attributes}
                                setAttributes={props.setAttributes}
                            />
                        </TabbedContainer>
                    </TabbedControl>
                </div>
            </InspectorControls>
        </>
    );
}

export default Controls;
