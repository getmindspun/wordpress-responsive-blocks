import {CheckboxControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';

const RequiredControl = (props: {
    required: boolean
    setRequired: (value: boolean) => void,
}) => (
    <CheckboxControl
        label={__('Required')}
        checked={props.required}
        onChange={required => {
            props.setRequired(required)
        }}
    />
);

export default RequiredControl;
