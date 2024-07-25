import {useState, useRef} from '@wordpress/element';
import {useEvent} from '~shared/hooks/useEvent';

import BaseField from './BaseField';
import type {Props, Validation} from './types';
import {validate} from './validate';
import {CustomEvent} from '../buttons/button/types';

function validateField(form: HTMLFormElement, input: HTMLInputElement, validation: Validation) {
    if (form.contains(input)) {
        const error = validate(input, validation);
        if (error) {
            form.classList.add('mrblx-invalid');
            form.isInvalid = true;
        }
        return error;
    }
    return null;
}

const Field = (props: {
    attributes: Props['attributes']
}) => {
    const [error, setError] = useState<string|null>(null);
    const ref = useRef<HTMLInputElement|null>(null);

    const submitEventHandler = (event: CustomEvent) => {
        const form = (event as {detail: any}).detail;
        if (form && ref.current && form) {
            setError(validateField(form as HTMLFormElement, ref.current, props.attributes.validation));
        }
    }

    useEvent('mrblx.submit', submitEventHandler);
    useEvent('reset', () => setError(null));

    return (<BaseField {...props} fieldError={error} ref={ref}/>);
}

export default Field;
