import {__experimentalNumberControl as NumberControl, SelectControl, TextControl} from '@wordpress/components';
import {BaseControls, ContainerContents} from '@mindspun/mrblx';
import {Props} from '../types';

const GeneralControls = (props: Props) => {
    return (
        <ContainerContents>
            <TextControl
                label={ 'Label' }
                value={ props.attributes.label }
                onChange={ label => props.setAttributes({label}) }
            />
            <SelectControl
                label={ 'Type' }
                value={ props.attributes.type }
                onChange={ type => props.setAttributes({
                    type: type as Props['attributes']['type']
                }) }
                options={[
                    {label: 'text', value: 'text'},
                    {label: 'password', value: 'password'},
                    {label: 'email', value: 'email'},
                    {label: 'number', value: 'number'},
                    {label: 'date', value: 'date'},
                    {label: 'tel', value: 'tel'},
                    {label: 'url', value: 'url'},
                ]}
            />
            <NumberControl
                label={ 'Input size' }
                labelPosition={ 'top' }
                isShiftStepEnabled={ false }
                onChange={ value => {
                    const inputSize = value ? parseInt(value) : 20;
                    props.setAttributes({inputSize});
                } }
                value={ props.attributes.inputSize || 20 }
                min={ 1 }
            />
            <BaseControls
                attributes={ props.attributes.style }
                setAttributes={ style => {
                    props.setAttributes({style: {...props.attributes.style, ...style}});
                } }
                options={ {
                    padding: {responsive: true},
                    margin: {responsive: true}
                } }
            />
        </ContainerContents>
    );
}

export default GeneralControls;
