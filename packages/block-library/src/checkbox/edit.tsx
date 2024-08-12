import {StylePortalClientId, useBlockPropsWithId} from '@mindspun/mrblx';

import {useRequiredIndicator} from '~shared/hooks/useFieldEdit';

import type {Props} from './types';
import Controls from './controls/Controls';
import {getClassName} from './utils';
import Checkbox from './Checkbox';
import metadata from '../form/block.json';

const Edit = (props: Props) => {
    useRequiredIndicator(props);

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
                attributes={props.attributes.inputStyleError}
                selector={'input.is-error'}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.inputStyle}
                selector={'.mrblx-checkbox-label'}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.inputStyle}
                selector={'is-error .mrblx-checkbox-label'}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.checkboxContentStyle}
                selector={metadata.attributes.checkboxContentStyle.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.checkboxContentErrorStyle}
                selector={metadata.attributes.checkboxContentErrorStyle.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.helpStyle}
                selector={'.field-help'}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.fieldErrorStyle}
                selector={'.field-error'}
            />
            <div {...blockProps}>
                <Checkbox attributes={props.attributes}/>
            </div>
        </>
    );
};

export default Edit;
