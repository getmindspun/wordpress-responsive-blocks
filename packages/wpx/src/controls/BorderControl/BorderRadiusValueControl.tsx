import {RangeControl} from '@wordpress/components';

import UnitRangeControl from '../UnitRangeControl/UnitRangeControl';
import ControlHeader from '../../components/ControlHeader/ControlHeader';
import {headerHint, parseUnit} from './utils';
import {isNumeric, parseValue} from '../../utils';

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

const BorderRadiusValueControl = (props: BorderRadiusValueControlProps) => {
    const unit = parseUnit(props.value);
    const value = parseValue(props.value);

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
                    onChange={ value => {
                        props.onChange(isNumeric(value) ? `${value}${unit}` : value);
                    } }
                    value={ props.value }
                    units={ UNITS }
                /> :
                <RangeControl
                    max={ unit === '%' ? 100 : 10 }
                    min={ 0 }
                    onBlur={ function noRefCheck() {
                    } }
                    onChange={ value => {
                        props.onChange(`${value}${unit}`);
                    } }
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
