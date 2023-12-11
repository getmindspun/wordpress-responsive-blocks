import {Props} from '../types';
import {InspectorControls} from '@wordpress/block-editor';
import {layout, styles} from '@wordpress/icons';
import InputControl from '@wordpress/components/build-types/input-control';

import {
    ContainerContents,
    TabbedContainer,
    TabbedControl
} from '@mindspun/wpx';
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
