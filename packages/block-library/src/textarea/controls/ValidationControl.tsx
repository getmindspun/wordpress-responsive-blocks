import {__} from '@wordpress/i18n';
import {
    RadioControl,
    __experimentalNumberControl as NumberControl
} from '@wordpress/components';

import CustomValidationControl from '~shared/controls/form/CustomValidationControl';
import RequiredControl from '~shared/controls/form/RequiredControl';
import type {Validation} from '~shared/types';

const SimpleTextAreaValidationControl = (props: {
    validation: Validation;
    setValidation: (attributes: Partial<Validation>) => void;
}) => {
    return (
        <>
            <RequiredControl
                required={!!props.validation.required}
                setRequired={(required) => {
                    props.setValidation({required});
                }}
            />
            <NumberControl
                label={__('Minimum Length')}
                value={props.validation.minLength}
                onChange={(minLength) => {
                    props.setValidation({
                        minLength: minLength
                            ? parseInt(minLength)
                            : undefined,
                    });
                }}
            />
        </>
    );
};


const ValidationControl = (props: {
    validation: Validation;
    setValidation: (attributes: Partial<Validation>) => void;
}) => {
    return (
        <>
            <RadioControl
                label={__('Validation')}
                selected={
                    props.validation.type ? props.validation.type : 'none'
                }
                options={[
                    {label: 'None', value: 'none'},
                    {label: 'Simple', value: 'simple'},
                    {label: 'Custom', value: 'custom'},
                ]}
                onChange={(type) =>
                    props.setValidation({
                        type:
                            type !== 'none'
                                ? (type as Validation['type'])
                                : undefined,
                    })
                }
            />
            {props.validation.type === 'simple' ? (
                <SimpleTextAreaValidationControl {...props} />
            ) : null}
            {props.validation.type === 'custom' ? (
                <CustomValidationControl {...props} />
            ) : null}
        </>
    );
};

export default ValidationControl;
