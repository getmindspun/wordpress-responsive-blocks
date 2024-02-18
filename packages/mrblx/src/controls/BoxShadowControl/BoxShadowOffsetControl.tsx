import { RangeControl } from '@wordpress/components';
import { parseUnitValue } from '../../utils';
import ControlHeader from '../../components/ControlHeader/ControlHeader';
import { hint } from './utils';

const BoxShadowOffsetControl = (props: {
	label: string;
	value: string | number | undefined;
	onChange: (value: string | number | undefined) => void;
	isAdvanced?: boolean;
}) => {
	const [value, unit] = parseUnitValue(props.value);

	return (
		<>
			<ControlHeader title={props.label} hint={hint(props.value)} />
			<RangeControl
				max={128}
				min={-128}
				onBlur={function noRefCheck() {}}
				onChange={(v) => {
					props.onChange(`${v}${unit}`);
				}}
				onFocus={function noRefCheck() {}}
				onMouseLeave={function noRefCheck() {}}
				onMouseMove={function noRefCheck() {}}
				step={1}
				withInputField={props.isAdvanced}
				value={value ? value : 0}
			/>
		</>
	);
};

export default BoxShadowOffsetControl;
