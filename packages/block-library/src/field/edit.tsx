import {useEffect} from '@wordpress/element';

import {StylePortalClientId, useBlockPropsWithId} from '@mindspun/mrblx';

import './editor.scss';
import type {Props} from './types';
import Controls from './controls/Controls';
import {getClassName} from './utils';
import Field from './Field';

const Edit = (props: Props) => {
    const blockProps = useBlockPropsWithId(props, {
        className: getClassName(props)
    });

    useEffect(() => {
        if (props.context['mindspun/labelPosition']) {
            props.setAttributes({
                labelPosition: props.context['mindspun/labelPosition'] as Props['attributes']['labelPosition'] || 'top'
            });
        }
    }, [props.context['mindspun/labelPosition']]);

    return (
        <>
            <Controls { ...props } />
            <StylePortalClientId
                clientId={ props.clientId }
                attributes={ props.attributes.style }
            />
            <StylePortalClientId
                clientId={ props.clientId }
                attributes={ props.attributes.labelStyle }
                selector={ 'label' }
            />
            <StylePortalClientId
                clientId={ props.clientId }
                attributes={ props.attributes.labelStyleError }
                selector={ 'label.is-error' }
            />
            <StylePortalClientId
                clientId={ props.clientId }
                attributes={ props.attributes.inputStyle }
                selector={ 'input' }
            />
            <StylePortalClientId
                clientId={ props.clientId }
                attributes={ props.attributes.inputStyleFocus }
                selector={ 'input:focus-visible' }
            />
            <StylePortalClientId
                clientId={ props.clientId }
                attributes={ props.attributes.inputStyleError }
                selector={ 'input.is-error' }
            />
            <StylePortalClientId
                clientId={ props.clientId }
                attributes={ props.attributes.fieldErrorStyle }
                selector={ '.field-error' }
            />
            <div { ...blockProps }>
                <Field attributes={ props.attributes }/>
            </div>
        </>
    );
};

export default Edit;
