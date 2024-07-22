import {InspectorControls} from '@wordpress/block-editor';
import {keyboard, layout, tag} from '@wordpress/icons';

import {ContainerContents, TabbedContainer, TabbedControl} from '@mindspun/mrblx';

import {Props} from '../types';
import GeneralControls from './GeneralControls';

import LabelControls from '../../form/controls/LabelControls';
import InputControls from '../../form/controls/InputControls';
import FieldErrorControls from '../../form/controls/FieldErrorControls';

const Controls = (props: Props) => {
    return (
        <InspectorControls>
            <div className={'wp-block-mindspun-field--controls'}>
                {props.context['mindspun/formBlockId'] ?
                    <GeneralControls {...props} /> :
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
                }
            </div>
        </InspectorControls>
    );
};

export default Controls;
