import {SelectControl, TextControl} from '@wordpress/components';

import {BaseControls, ContainerContents} from '@mindspun/mrblx';
import {Props} from '../types';

export const methodOptions = [
    {value: 'get', label: 'get'},
    {value: 'post', label: 'post'},
    {value: 'dialog', label: 'dialog'}
];

const GeneralControls = (props: Props) => {
    return (
        <>
            <ContainerContents>
                <BaseControls
                    attributes={ props.attributes.style }
                    setAttributes={ style => {
                        props.setAttributes({style: {...props.attributes.style, ...style}});
                    } }
                    options={ {
                        padding: {responsive: true},
                        margin: {responsive: true},
                        border: {responsive: true},
                    } }
                >
                    <SelectControl
                        label={ 'Method' }
                        value={ props.attributes.method }
                        onChange={ method => props.setAttributes({method}) }
                        options={ methodOptions }
                    />
                    <TextControl
                        label={ 'Action' }
                        value={ props.attributes.action ? props.attributes.action : '' }
                        onChange={ action => {
                            props.setAttributes({
                                action: action ? action : undefined
                            });
                        }}
                    />
                </BaseControls>
            </ContainerContents>
        </>
    );
};

export default GeneralControls;
