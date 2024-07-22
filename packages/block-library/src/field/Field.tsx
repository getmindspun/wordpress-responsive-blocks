import classNames from 'classnames';
import type {Props} from './types'
import Input from './Input';
import FieldError from './FieldError';

const Field = (props: {
    attributes: Props['attributes'],
    fieldError?: string|null,
}) => {
    const className = classNames('mrblx-label', {
        'is-error': !!props.fieldError
    });

    return (
        <>
            {props.attributes.labelPosition !== 'none' ?
                <label className={className}>
                    <span>{props.attributes.label}</span>
                    <Input attributes={props.attributes} />
                </label> :
                <Input
                    className={!!props.fieldError ? 'is-error' : undefined}
                    attributes={props.attributes}
                />
            }
            {props.fieldError && <FieldError message={props.fieldError} />}
        </>
    )
}

export default Field;
