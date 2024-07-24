import React from 'react';
import classNames from 'classnames';
import {forwardRef} from '@wordpress/element';

import type {Props} from './types'
import Input from './Input';
import RequiredIndicator from './RequiredIndicator';
import {isRequired} from './utils';
import FieldError from './FieldError';

const Legend = (props: {
    attributes: Props['attributes'],
    fieldError?: string|null
}) => {
    if (props.fieldError) {
        return (<FieldError message={props.fieldError} />);
    }
    if (props.attributes.help) {
        return (<small>{props.attributes.help}</small>);
    }
    return null;
}

const BaseField = forwardRef((props: {
    attributes: Props['attributes'],
    fieldError?: string|null
}, ref: React.ForwardedRef<HTMLInputElement>) => {
    const className = classNames('mrblx-label', {
        'is-error': !!props.fieldError
    });

    if (props.attributes.labelPosition === 'none') {
        return (
            <>
                <Input
                    className={!!props.fieldError ? 'is-error' : undefined}
                    attributes={props.attributes}
                />
                <Legend {...props} />
            </>
        );
    }

    return (
        <label className={className}>
            <span>{props.attributes.label}<RequiredIndicator isRequired={isRequired(props.attributes)} text={props.attributes.labelRequiredIndicator}/></span>
            <Input ref={ref} attributes={props.attributes} />
            <Legend {...props} />
        </label>
    )
});

export default BaseField;
