import {InspectorControls} from '@wordpress/block-editor';
import {layout, styles} from '@wordpress/icons';
import {__} from '@wordpress/i18n';
import {TextControl, ToggleControl} from '@wordpress/components';

import {
    BlockCSSProperties,
    ContainerContents,
    TabbedContainer,
    TabbedControl, WidthHeightControl
} from '@mindspun/wpx';

import {Props} from '../types';
import StyleControls from './StyleControls';
import ButtonVariantControl from './ButtonVariantControl';
import RelControl from './RelControl';

const Controls = (props: Props) => {
    return (
        <InspectorControls>
            <div
                className={'wp-block-mindspun-button--controls'}
            >
                <TabbedControl>
                    <TabbedContainer key={'General'} icon={layout}>
                        <ContainerContents>
                            <ButtonVariantControl
                                attributes={props.attributes}
                                setAttributes={props.setAttributes}
                            />
                            <WidthHeightControl
                                label={__('Width')}
                                propertyName={'width'}
                                attributes={props.attributes.style}
                                setAttributes={style => {
                                    props.setAttributes({style: {...props.attributes.style, ...style}})
                                }}
                            />
                            <hr/>
                            <TextControl
                                label={__('Link')}
                                value={props.attributes.href ? props.attributes.href : ''}
                                onChange={href => props.setAttributes({href: href ? href : undefined})}
                                help={__('Opens this page when button is clicked.')}
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
                            <RelControl
                                attributes={props.attributes}
                                setAttributes={props.setAttributes}
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
    );
}

export default Controls;
