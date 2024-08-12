import {StylePortalClientId, useBlockPropsWithId} from '@mindspun/mrblx';

import './editor.scss';
import type {Props} from './types';
import Controls from './controls/Controls';
import {getClassName} from './utils';
import Field from './Field';
import {useFieldEdit} from '~shared/hooks/useFieldEdit';

const Edit = (props: Props) => {
    useFieldEdit(props);

    const blockProps = useBlockPropsWithId(props, {
        className: getClassName(props),
    });

    return (
        <>
            <Controls {...props} />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.style}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.labelStyle}
                selector={'.mrblx-field-label'}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.labelStyleError}
                selector={'.is-error .mrblx-field-label'}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.labelStyleRequiredIndicator}
                selector={'.mrblx-field-label .mrblx-required-indicator'}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.inputStyle}
                selector={'input'}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.inputStyleFocus}
                selector={'input:focus-visible'}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.inputStyleError}
                selector={'.is-error input'}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.fieldErrorStyle}
                selector={'.field-error'}
            />
            <div {...blockProps}>
                <Field attributes={props.attributes}/>
            </div>
        </>
    );
};

export default Edit;
