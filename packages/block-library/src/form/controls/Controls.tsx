import {Props} from '../types';
import {InspectorControls} from '@wordpress/block-editor';
import {layout, keyboard, tag} from '@wordpress/icons';

import {TabbedControl, TabbedContainer} from '@mindspun/mrblx';

import GeneralControls from './GeneralControls';
import LabelControls from './LabelControls';
import InputControls from './InputControls';
import FieldErrorControls from './FieldErrorControls';


const Controls = (
    props: Props & {
        onMouseEnter?: () => void;
        onMouseLeave?: () => void;
    }
) => {
    return (
        <InspectorControls>
            <div
                className={'wp-block-mindspun-form--controls'}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
            >
                <TabbedControl>
                    <TabbedContainer key={'General'} icon={layout}>
                        <GeneralControls {...props} />
                    </TabbedContainer>
                    <TabbedContainer key={'Labels'} icon={tag}>
                        <LabelControls {...props} />
                    </TabbedContainer>
                    <TabbedContainer key={'Inputs'} icon={keyboard}>
                        <InputControls {...props} />
                    </TabbedContainer>
                    <TabbedContainer key={'Field Errors'}>
                        <FieldErrorControls {...props} />
                    </TabbedContainer>
                </TabbedControl>
            </div>
        </InspectorControls>
    );
};

export default Controls;
