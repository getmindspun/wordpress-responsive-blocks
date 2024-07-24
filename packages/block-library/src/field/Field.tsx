import BaseField from './BaseField';
import type {Props, Validation} from './types';
import {useState, useEffect, useRef} from '@wordpress/element';
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

    useEffect(() => {
        const eventHandler = (event: CustomEvent) => {
            const form = (event as {detail: any}).detail;
            if (form && ref.current && form) {
                setError(validateField(form as HTMLFormElement, ref.current, props.attributes.validation));
            }
        } // move callback inside function
        window.addEventListener('mrblx.submit', eventHandler)
        return () => {
            window.removeEventListener('mrblx.submit', eventHandler) // this is called to remove it when the component 'unmounts' or the dependencies change, but the dependencies never change because you pass empty array
        }
    }, []);

    useEffect(() => {
        const eventHandler = () => {
            setError(null);
        } // move callback inside function
        window.addEventListener('reset', eventHandler)
        return () => {
            window.removeEventListener('reset', eventHandler) // this is called to remove it when the component 'unmounts' or the dependencies change, but the dependencies never change because you pass empty array
        }
    }, []);

    return (<BaseField {...props} fieldError={error} ref={ref}/>);
}

export default Field;
