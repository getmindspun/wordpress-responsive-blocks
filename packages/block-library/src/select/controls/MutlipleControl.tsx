import { CheckboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const MultipleControl = (props: {
	multiple: boolean;
	setMultiple: (value: boolean) => void;
}) => (
	<CheckboxControl
		label={__('Multiple')}
		checked={props.multiple}
		onChange={(required) => {
			props.setMultiple(required);
		}}
	/>
);

export default MultipleControl;
