import {InspectorControls} from '@wordpress/block-editor';
import {keyboard, layout, tag} from '@wordpress/icons';

import {TabbedContainer, TabbedControl} from '@mindspun/mrblx';

import {Props} from '../types';
import GeneralControls from './GeneralControls';

import LabelControls from '~shared/controls/form/LabelControls';
import FieldErrorControls from '~shared/controls/form/FieldErrorControls';
import SelectControls from './SelectControls';

const Controls = (props: Props) => {
    return (
        <InspectorControls>
            <div className={'wp-block-mindspun-select--controls'}>
                {props.context['mindspun/formBlockId'] ?
                    <GeneralControls {...props} /> :
                    <TabbedControl>
                        <TabbedContainer key={'General'} icon={layout}>
                            <GeneralControls {...props} />
                        </TabbedContainer>
                        <TabbedContainer key={'Labels'} icon={tag}>
                            <LabelControls {...props} />
                        </TabbedContainer>
                        <TabbedContainer key={'Select'} icon={keyboard}>
                            <SelectControls {...props} />
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
