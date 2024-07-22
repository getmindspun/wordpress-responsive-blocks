import type {Props} from './types';

const Input = (props: {
    className?: string,
    attributes: Props['attributes']
}) => {
    const size = props.attributes.inputSize ? props.attributes.inputSize : 20;

    return (
        <input
            className={props.className}
            name={props.attributes.name ? props.attributes.name : undefined}
            type={props.attributes.type ? props.attributes.type : undefined}
            autoComplete={props.attributes.autoComplete ? props.attributes.autoComplete : undefined}
            autoFocus={!!props.attributes.autoFocus}
            spellCheck={!!props.attributes.spellCheck}
            autoCapitalize={props.attributes.autoCapitalize ? props.attributes.autoCapitalize : undefined}
            size={size}
        />
    )
}

export default Input;
