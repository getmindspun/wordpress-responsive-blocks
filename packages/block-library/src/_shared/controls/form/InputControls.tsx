
import type {BlockCSSProperties} from '@mindspun/mrblx';
import {
    BaseControls,
    BoxShadowControl,
    ContainerContents,
    ContainerControl,
} from '@mindspun/mrblx';

type Attributes = {
    inputStyle: BlockCSSProperties,
    inputStyleError: BlockCSSProperties,
    inputStyleFocus: BlockCSSProperties,
};

const InputControls = (props: {
    attributes: Attributes,
    setAttributes: (attributes: Partial<Attributes>) => void
}) => {
    return (
        <>
            <ContainerControl title={ 'Style' }>
                <ContainerContents>
                    <BaseControls
                        attributes={ props.attributes.inputStyle }
                        setAttributes={ style => {
                            const inputStyle = {...props.attributes.inputStyle, ...style};
                            props.setAttributes({inputStyle});
                        } }
                        options={ {
                            color: {responsive: true},
                            backgroundColor: {responsive: true},
                            margin: {responsive: true},
                            padding: {responsive: true},
                            border: {responsive: true}
                        } }
                    />
                    <BoxShadowControl
                        attributes={ props.attributes.inputStyle }
                        setAttributes={ inputStyle => {
                            props.setAttributes({inputStyle: {...props.attributes.inputStyle, ...inputStyle}});
                        } }
                        isResponsive={ true }
                    />
                </ContainerContents>
            </ContainerControl>
            <ContainerControl title={ 'Error State' }>
                <ContainerContents>
                    <BaseControls
                        attributes={ props.attributes.inputStyleError }
                        setAttributes={ style => {
                            const inputStyleError = {...props.attributes.inputStyleError, ...style};
                            props.setAttributes({inputStyleError});
                        } }
                        options={ {
                            color: {responsive: true},
                            backgroundColor: {responsive: true},
                            border: {responsive: true}
                        } }
                    />
                    <BoxShadowControl
                        attributes={ props.attributes.inputStyleError }
                        setAttributes={ inputStyleError => {
                            props.setAttributes({inputStyleError: {...props.attributes.inputStyleError, ...inputStyleError}});
                        } }
                        isResponsive={ true }
                    />
                </ContainerContents>
            </ContainerControl>
            <ContainerControl title={ 'Focus' }>
                <ContainerContents>
                    <BaseControls
                        attributes={ props.attributes.inputStyleFocus }
                        setAttributes={ style => {
                            const inputStyleFocus = {...props.attributes.inputStyleFocus, ...style};
                            props.setAttributes({inputStyleFocus});
                        } }
                        options={ {
                            color: {responsive: true},
                            backgroundColor: {responsive: true},
                            border: {responsive: true}
                        } }
                    />
                    <BoxShadowControl
                        attributes={ props.attributes.inputStyleFocus }
                        setAttributes={ inputStyleFocus => {
                            props.setAttributes({inputStyleFocus: {...props.attributes.inputStyleFocus, ...inputStyleFocus}});
                        } }
                        isResponsive={ true }
                    />
                </ContainerContents>
            </ContainerControl>
        </>
    );
};

export default InputControls;
