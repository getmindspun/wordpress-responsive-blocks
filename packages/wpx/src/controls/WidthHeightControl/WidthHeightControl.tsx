import {RangeControl} from '@wordpress/components';
import {useState} from '@wordpress/element';

import './WidthHeightControl.scss';

import {useGetPreviewDeviceType} from '../../hooks';
import {BlockCSSProperties, LengthUnit} from '../../types';
import UnitRangeControl from '../UnitRangeControl/UnitRangeControl';
import {isNumeric, parseUnitValue} from '../../utils';
import {fromValue, headerHint, showClear, toValue} from './utils';
import ControlHeader from '../../components/ControlHeader/ControlHeader';

const UNITS = [
    { value: '%', label: '%', default: 0 },
    { value: 'px', label: 'px', default: 0 },
    { value: 'em', label: 'em', default: 0 },
    { value: 'rem', label: 'rem', default: 0 },
    { value: 'vw', label: 'vw', default: 0 },
    { value: 'vh', label: 'vh', default: 0 },
];

const RANGES = {
    'px': {min: 16, max: 512, step: 1},
    '%': {min: 0, max: 100, step: 1},
    'em': {min: 0, max: 10, step: .01},
    'rem': {min: 0, max: 10, step: .01},
    'vw': {min: 0, max: 100, step: 1},
    'vh': {min: 0, max: 100, step: 1}
}

export type WidthHeightProperties = Pick<BlockCSSProperties,
    'width'|'height'|'minWidth'|'minHeight'|'maxWidth'|'maxHeight'|
    'tabletWidth'|'tabletHeight'|'tabletMinWidth'|'tabletMinHeight'|'tabletMaxWidth'|'tabletMaxHeight'|
    'mobileWidth'|'mobileHeight'|'mobileMinWidth'|'mobileMinHeight'|'mobileMaxWidth'|'mobileMaxHeight'
>;

function rangeControlValue(value: number|undefined, unit: LengthUnit) {
    if (value === 0 || (unit === '%' && value !== undefined)) {
        return value;
    }
    return 50;
}

const WidthHeightControl = (props: {
    label?: string
    propertyName: 'width'|'height'|'minWidth'|'minHeight'|'maxWidth'|'maxHeight',
    attributes: WidthHeightProperties,
    setAttributes: (attributes: Partial<WidthHeightProperties>) => void;
    isResponsive?: boolean,
}) => {
    const deviceType = useGetPreviewDeviceType();
    const [value, unit] = parseUnitValue(toValue(props.attributes, props.propertyName, props.isResponsive, deviceType), '%');
    const [isAdvanced, setIsAdvanced] = useState(false);

    function onRangeChange(value?: number) {
        props.setAttributes(fromValue(value ? `${value}%` : value, props.propertyName, props.isResponsive, deviceType));
    }

    function onClear() {
        onRangeChange(undefined);
    }

    return (
        <div className={'wpx--width-height-control'}>
            <ControlHeader
                title={props.label}
                hint={ headerHint(props.attributes, props.propertyName, props.isResponsive, deviceType, isAdvanced)}
                isAdvanced={ isAdvanced } onAdvancedChange={ setIsAdvanced }
                isResponsive={props.isResponsive}
                onClear={showClear(props.attributes, props.propertyName, props.isResponsive, deviceType) ? onClear : undefined}
            />
            { isAdvanced ?
                <UnitRangeControl
                    onChange={ value => {
                        value = isNumeric(value) ? `${value}${unit}` : value;
                        props.setAttributes(fromValue(value, props.propertyName, props.isResponsive, deviceType));
                    } }
                    value={ toValue(props.attributes, props.propertyName, props.isResponsive, deviceType) }
                    units={ UNITS }
                    ranges={ RANGES }
                /> :
                <RangeControl
                    max={ RANGES[unit].max }
                    min={ RANGES[unit].min }
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
        </div>
    );
};

export default WidthHeightControl;
