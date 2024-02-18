import { RangeControl } from '@wordpress/components';
import { parseUnitValue } from '../../utils';
import ControlHeader from '../../components/ControlHeader/ControlHeader';
import { UnitRangeControl } from '../index';
import { hint } from './utils';

const UNITS = [{ value: 'px', label: 'px' }];

const RANGES = {
	px: { min: 0, max: 25, step: 1 },
};

const BoxShadowLengthControl = (props: {
	label: string;
	value: string | number | undefined;
	onChange: (value: string | number | undefined) => void;
	isAdvanced?: boolean;
}) => {
	const [value, unit] = parseUnitValue(props.value);

	return (
		<>
			<ControlHeader title={props.label} hint={hint(props.value)} />
			{props.isAdvanced ? (
				<UnitRangeControl
					value={props.value}
					onChange={props.onChange}
					units={UNITS}
					ranges={RANGES}
				/>
			) : (
				<RangeControl
					max={25}
					min={0}
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
			)}
		</>
	);
};

export default BoxShadowLengthControl;
