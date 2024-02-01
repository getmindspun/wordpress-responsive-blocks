import {
	__experimentalUnitControl as UnitControl,
	RangeControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

import './UnitRangeControl.scss';
import { LabelValue, Range } from './types';
import { parseUnitValue } from '../../utils';
import { LengthUnit } from '../../types';

type UnitRangeControlProps = {
	value: string | number | undefined;
	onChange: (value: string | number | undefined) => void;
	units?: LabelValue[];
	ranges?: Record<string, Range>;
};

function returnedValue(
	value: number | undefined,
	unit: LengthUnit
): string | number | undefined {
	if (value === undefined || value === 0) {
		return value;
	}
	return `${value}${unit}`;
}

const UnitRangeControl = (props: UnitRangeControlProps) => {
	const [value, defaultUnit] = parseUnitValue(props.value);

	/* Unit state must be kept in case the user switches the unit when value is undefined. */
	const [unit, setUnit] = useState(defaultUnit);

	const range = props.ranges![unit ? unit : 'px'] || props.ranges!.px;

	function onNumberChange(v?: number) {
		props.onChange(returnedValue(v, unit));
	}

	function onChange(v?: string) {
		const [newValue, newUnit] = parseUnitValue(v);
		props.onChange(returnedValue(newValue, newUnit));
	}

	function onUnitChange(newUnit?: string) {
		newUnit = newUnit ? newUnit : 'px';
		const newRange = props.ranges![newUnit] || props.ranges!.px;
		setUnit(newUnit as LengthUnit);

		props.onChange(
			value !== undefined
				? returnedValue(
						value > newRange.max ? newRange.max : value,
						newUnit as LengthUnit
					)
				: undefined
		);
	}

	return (
		<div className="wpx--unit-range-control">
			<UnitControl
				units={props.units}
				onChange={onChange}
				onUnitChange={onUnitChange}
				isUnitSelectTabbable
				value={props.value}
			/>
			<RangeControl
				max={range.max}
				min={range.min}
				onBlur={function noRefCheck() {}}
				onChange={onNumberChange}
				onFocus={function noRefCheck() {}}
				onMouseLeave={function noRefCheck() {}}
				onMouseMove={function noRefCheck() {}}
				step={range.step}
				withInputField={false}
				value={value}
			/>
		</div>
	);
};

UnitRangeControl.defaultProps = {
	units: [
		{ value: 'px', label: 'px' },
		{ value: '%', label: '%' },
		{ value: 'em', label: 'em' },
	],
	ranges: {
		px: { min: 0, max: 100, step: 1 },
		'%': { min: 0, max: 100, step: 1 },
		em: { min: 0, max: 10, step: 0.01 },
		rem: { min: 0, max: 10, step: 0.01 },
	},
};

export default UnitRangeControl;
