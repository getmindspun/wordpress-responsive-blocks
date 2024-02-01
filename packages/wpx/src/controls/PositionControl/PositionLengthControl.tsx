import LengthControl from '../LengthControl/LengthControl';

const PaddingLengthControl = (props: {
	label: string;
	value: string | number | undefined;
	onChange: (value: string | number | undefined) => void;
	isAdvanced: boolean;
}) => {
	function onClear() {
		props.onChange(undefined);
	}

	return (
		<LengthControl
			title={props.label}
			value={props.value}
			onChange={props.onChange}
			onClear={onClear}
			isAdvanced={props.isAdvanced}
		/>
	);
};

export default PaddingLengthControl;
