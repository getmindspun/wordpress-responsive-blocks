import {RangeControl} from '@wordpress/components';
import {parseUnitValue} from '../../utils';
import ControlHeader from '../../components/ControlHeader/ControlHeader';

const BoxShadowOffsetControl = (props: {
    label: string;
    value: string | number | undefined;
    onChange: (value: string | number | undefined) => void;
    isAdvanced?: boolean;
}) => {
    const [value, unit] = parseUnitValue(props.value);

    return (
        <>
            <ControlHeader title={props.label}
            />
            <RangeControl
                max={128}
                min={-128}
                onBlur={function noRefCheck() {
                }}
                onChange={value => {
                    props.onChange(`${value}${unit}`);
                }}
                onFocus={function noRefCheck() {
                }}
                onMouseLeave={function noRefCheck() {
                }}
                onMouseMove={function noRefCheck() {
                }}
                step={1}
                withInputField={props.isAdvanced}
                value={value ? value : 0}
            />
        </>
    );
};

export default BoxShadowOffsetControl;
