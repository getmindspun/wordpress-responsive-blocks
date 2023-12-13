import {InspectorControls} from '@wordpress/block-editor';
import {layout, styles} from '@wordpress/icons';
import {__} from '@wordpress/i18n';
import {TextControl, ToggleControl} from '@wordpress/components';

import {
    ContainerContents,
    TabbedContainer,
    TabbedControl
} from '@mindspun/wpx';

import {Props} from '../types';
import StyleControls from './StyleControls';
import ButtonVariantControl from './ButtonVariantControl';

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
