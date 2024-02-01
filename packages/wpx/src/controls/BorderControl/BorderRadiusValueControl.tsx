import { RangeControl } from '@wordpress/components';

import UnitRangeControl from '../UnitRangeControl/UnitRangeControl';
import ControlHeader from '../../components/ControlHeader/ControlHeader';
import { headerHint } from './utils';
import { isNumeric, parseUnitValue } from '../../utils';
import { LengthUnit } from '../../types';

const UNITS = [
	{ value: 'px', label: 'px', default: 0 },
	{ value: '%', label: '%', default: 0 },
];

type BorderRadiusValueControlProps = {
	title?: string | undefined;
	value: string | number | undefined;
	onChange: (value: string | number | undefined) => void;
	isMixed?: boolean;
	isLinked?: boolean;
	isAdvanced: boolean;
	onClear?: () => void;
};

export function onChangeValue(
	value: string | number | undefined,
	unit: LengthUnit
) {
	if (value === 0 || value === undefined) {
		return value;
	}
	return isNumeric(value) ? `${value}${unit}` : value;
}

function onRangeChangeValue(value: number | undefined, unit: LengthUnit) {
	if (value === 0 || value === undefined) {
		return value;
	}
	return `${value}${unit}`;
}

function rangeControlValue(value: number | undefined, unit: LengthUnit) {
	if (value !== undefined) {
		return value;
	}
	return unit === '%' ? 50 : 5;
}

const BorderRadiusValueControl = (props: BorderRadiusValueControlProps) => {
	const [value, unit] = parseUnitValue(props.value);

	function onRangeChange(v?: number) {
		props.onChange(onRangeChangeValue(v, unit));
	}

	return (
		<>
			{!!props.title && (
				<ControlHeader
					title={props.title}
					hint={headerHint(props.isMixed, props.value)}
					isAdvanced={props.isAdvanced}
					isLinked={props.isLinked}
					onClear={props.onClear}
				/>
			)}
			{props.isAdvanced ? (
				<UnitRangeControl
					onChange={(v) => props.onChange(onChangeValue(v, unit))}
					value={props.value}
					units={UNITS}
				/>
			) : (
				<RangeControl
					max={unit === '%' ? 100 : 10}
					min={0}
					onBlur={function noRefCheck() {}}
					onChange={(v) => onRangeChange(v)}
					onFocus={function noRefCheck() {}}
					onMouseLeave={function noRefCheck() {}}
					onMouseMove={function noRefCheck() {}}
					step={1}
					withInputField={false}
					value={rangeControlValue(value, unit)}
				/>
			)}
		</>
	);
};

BorderRadiusValueControl.defaultProps = {
	isMixed: false,
};

export default BorderRadiusValueControl;
