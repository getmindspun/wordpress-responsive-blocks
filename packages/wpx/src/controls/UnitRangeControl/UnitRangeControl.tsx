import {__experimentalUnitControl as UnitControl, RangeControl} from '@wordpress/components';
import {useState} from '@wordpress/element';

import './UnitRangeControl.scss';
import {LabelValue, Range} from './types';
import {parseUnitValue} from '../../utils';
import {LengthUnit} from '../../types';

type UnitRangeControlProps = {
    value: string | number | undefined;
    onChange: (value: string | number | undefined) => void;
    units?: LabelValue[];
    ranges?: Record<string, Range>;
}

function returnedValue(value: number, unit: LengthUnit): string | number {
    if (value === 0) {
        return 0;
    }
    return `${value}${unit}`;
}

const UnitRangeControl = (props: UnitRangeControlProps) => {
    const [value, unit] = parseUnitValue(props.value);
    const [range, setRange] = useState(
        props.ranges![unit ? unit : 'px'] || props.ranges!['px']
    );

    function onNumberChange(value?: number) {
        props.onChange(value !== undefined ? returnedValue(value, unit) : undefined);
    }

    function onChange(value?: string) {
        return onNumberChange(value ? parseInt(value) : undefined);
    }

    function onUnitChange(unit?: string) {
        unit = unit ? unit : 'px';
        const newRange = props.ranges![unit] || props.ranges!['px'];
        setRange(newRange);

        props.onChange(value !== undefined ? returnedValue(value > newRange.max ? newRange.max : value, unit as LengthUnit) : undefined);
    }

    return (
        <div className="wpx--unit-range-control">
            <UnitControl
                units={ props.units }
                onChange={ onChange }
                onUnitChange={ onUnitChange }
                isUnitSelectTabbable
                value={ value }
            />
            <RangeControl
                max={ range.max }
                min={ range.min }
                onBlur={ function noRefCheck() {
                } }
                onChange={ onNumberChange }
                onFocus={ function noRefCheck() {
                } }
                onMouseLeave={ function noRefCheck() {
                } }
                onMouseMove={ function noRefCheck() {
                } }
                step={ range.step }
                withInputField={ false }
                value={ value }
            />
        </div>
    );
};

UnitRangeControl.defaultProps = {
    units: [
        {value: 'px', label: 'px'},
        {value: '%', label: '%'},
        {value: 'em', label: 'em'},
    ],
    ranges: {
        'px': {min: 0, max: 100, step: 1},
        '%': {min: 0, max: 100, step: 1},
        'em': {min: 0, max: 10, step: .01},
        'rem': {min: 0, max: 10, step: .01}
    }
};

export default UnitRangeControl;
