import {RangeControl} from '@wordpress/components';

import UnitRangeControl from '../UnitRangeControl/UnitRangeControl';
import ControlHeader from '../../components/ControlHeader/ControlHeader';
import {headerHint} from './utils';
import {isNumeric, parseUnitValue} from '../../utils';
import {LengthUnit} from '../../types';

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
}

export function onChangeValue(value: string|number|undefined, unit: LengthUnit) {
    if (value === 0 || value === undefined) {
        return value;
    }
    return isNumeric(value) ? `${value}${unit}` : value
}

export function onRangeChangeValue(value: number|undefined, unit: LengthUnit) {
    if (value === 0 || value === undefined) {
        return value;
    }
    return `${value}${unit}` ;
}

const BorderRadiusValueControl = (props: BorderRadiusValueControlProps) => {
    const [value, unit] = parseUnitValue(props.value);

    function onRangeChange(value?: number) {
        props.onChange(onRangeChangeValue(value, unit));
    }

    return (
        <>
            {!!props.title && <ControlHeader
                title={ props.title }
                hint={ headerHint(props.isMixed, props.value) }
                isAdvanced={ props.isAdvanced }
                isLinked={ props.isLinked }
                onClear={ props.onClear }
            />}
            { props.isAdvanced ?
                <UnitRangeControl
                    onChange={ value => props.onChange(onChangeValue(value, unit)) }
                    value={ props.value }
                    units={ UNITS }
                /> :
                <RangeControl
                    max={ unit === '%' ? 100 : 10 }
                    min={ 0 }
                    onBlur={ function noRefCheck() {
                    } }
                    onChange={ value => onRangeChange(value) }
                    onFocus={ function noRefCheck() {
                    } }
                    onMouseLeave={ function noRefCheck() {
                    } }
                    onMouseMove={ function noRefCheck() {
                    } }
                    step={ 1 }
                    withInputField={ false }
                    value={ value !== undefined ? value : ( unit === '%' ? 50 : 5 ) }
                />
            }
        </>
    );
};

BorderRadiusValueControl.defaultProps = {
    isMixed: false,
};

export default BorderRadiusValueControl;
