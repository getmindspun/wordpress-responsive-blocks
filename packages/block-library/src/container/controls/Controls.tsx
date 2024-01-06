import {Props} from '../types';
import {InspectorAdvancedControls, InspectorControls} from '@wordpress/block-editor';
import {TextControl, ToggleControl} from '@wordpress/components';
import {layout, styles} from '@wordpress/icons';
import {__} from '@wordpress/i18n';

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
                                <SizingControl
                                    attributes={props.attributes.style}
                                    setAttributes={newStyle => {
                                        const style = {...props.attributes.style, ...newStyle};
                                        props.setAttributes({style});
                                    }}/>
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
            <InspectorAdvancedControls>
                <TextControl
                    label={'Link'}
                    value={props.attributes.link ? props.attributes.link : ''}
                    onChange={link => props.setAttributes({link: link ? link : undefined})}
                    help={__('Opens this page when the container is clicked.')}
                />
                <ToggleControl
                    label={__('Open in new tab.')}
                    checked={props.attributes.target === '_blank'}
                    onChange={isChecked => {
                        props.setAttributes({
                            target: isChecked ? '_blank' : undefined
                        });
                    }}
                />
            </InspectorAdvancedControls>
        </>
    );
}

export default Controls;
