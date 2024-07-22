import {SelectControl} from '@wordpress/components';

import {
    BaseControls,
    ContainerContents,
    ContainerControl,
} from '@mindspun/mrblx';

import {Props} from '../types';

const LabelControls = (props: Props) => {
    return (
        <>
            <ContainerContents>
                <SelectControl
                    label="Position"
                    value={ props.attributes.labelPosition }
                    options={ [
                        {label: 'Top', value: 'top'},
                        {label: 'Inline', value: 'inline'},
                        {label: 'None', value: 'none'},
                    ] }
                    onChange={ labelPosition => props.setAttributes({
                        labelPosition: labelPosition as Props['attributes']['labelPosition']
                    }) }
                    __nextHasNoMarginBottom
                />
            </ContainerContents>
            <ContainerControl title={ 'Style' }>
                <ContainerContents>
                    <BaseControls
                        attributes={ props.attributes.labelStyle }
                        setAttributes={ style => {
                            const labelStyle = {...props.attributes.labelStyle, ...style};
                            props.setAttributes({labelStyle});
                        } }
                        options={ {
                            color: {responsive: true},
                            backgroundColor: {responsive: true},
                            fontAppearance: true,
                            fontSize: {responsive: true},
                            textAlign: {responsive: true},
                            letterCase: true,
                            margin: {responsive: true},
                            padding: {responsive: true}
                        } }
                    />
                </ContainerContents>
            </ContainerControl>
            <ContainerControl title={ 'Error State' }>
                <ContainerContents>
                    <BaseControls
                        attributes={ props.attributes.labelStyleError }
                        setAttributes={ style => {
                            const labelStyleError = {...props.attributes.labelStyleError, ...style};
                            props.setAttributes({labelStyleError});
                        } }
                        options={ {
                            color: {responsive: true},
                            backgroundColor: {responsive: true},
                        } }
                    />
                </ContainerContents>
            </ContainerControl>
        </>
    );
};

export default LabelControls;

