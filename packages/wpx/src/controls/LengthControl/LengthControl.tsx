import React from 'react';
import {RangeControl} from '@wordpress/components';

import UnitRangeControl from '../UnitRangeControl/UnitRangeControl';
import {parseUnitValue} from '../../utils';
import ControlHeader from '../../components/ControlHeader/ControlHeader';
import {headerHint, onChangeValue, onRangeChangeValue, rangeControlValue} from './utils';

const UNITS = [
    { value: 'px', label: 'px', default: 0 },
    { value: '%', label: '%', default: 0 },
    { value: 'em', label: 'em', default: 0 },
    { value: 'rem', label: 'rem', default: 0 },
];

type LengthControlProps = {
    title?: string | undefined;
    value: string | number | undefined;
    onChange: (value: string | number | undefined) => void;
    isMixed?: boolean;
    isAdvanced?: boolean
    onAdvancedChange?: (isAdvanced: boolean) => void;
    isLinked?: boolean;
    onLinkedChange?: (isLinked: boolean) => void;
    onClear?: () => void;
}

const LengthControl = (props: LengthControlProps) => {
    const [value, unit] = parseUnitValue(props.value);

    function onRangeChange(value?: number) {
        props.onChange(onRangeChangeValue(value));
    }

    return (
        <>
            {props.title && <ControlHeader
                title={ props.title }
                hint={ headerHint(props.isMixed, props.isAdvanced, value, unit) }
                isAdvanced={ props.isAdvanced } onAdvancedChange={ props.onAdvancedChange }
                isLinked={ props.isLinked } onLinkedChange={ props.onLinkedChange }
                onClear={ value !== undefined ? props.onClear : undefined }
            />}
            { props.isAdvanced ?
                <UnitRangeControl
                    onChange={ value => props.onChange(onChangeValue(value, unit)) }
                    value={ props.value }
                    units={ UNITS }
                /> :
                <RangeControl
                    max={ 5 }
                    min={ 0 }
                    step={ 1 }
                    onBlur={ function noRefCheck() {
                    } }
                    onChange={ onRangeChange }
                    onFocus={ function noRefCheck() {
                    } }
                    onMouseLeave={ function noRefCheck() {
                    } }
                    onMouseMove={ function noRefCheck() {
                    } }
                    withInputField={ false }
                    value={ rangeControlValue(value, unit) }
                />
            }
        </>
    );
};

export default LengthControl;
