import {RadioControl, RangeControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';

import {ControlHeader, DeviceTypeContainer, useGetPreviewDeviceType} from '@mindspun/wpx';

import {Colspan} from '../types';
import {colToRange, hint, isFixed, radioSelected, radioValue} from '../utils';

const RADIO_OPTIONS = [
    { label: __('Inherit'), value: 'inherit' },
    { label: __('Default'), value: 'default' },
    { label: __('Fit to Content'), value: 'auto' },
    { label: __('Fixed'), value: 'fixed' }
]

const Controls = (props: {
    attributes: Colspan;
    setAttributes: (colspan: Partial<Colspan>) => void;
}) => {
    const deviceType = useGetPreviewDeviceType();

    return (
        <div className={'wpx--colspan-control'}>
            <ControlHeader
                title={__('Column span')}
                hint={hint(props.attributes, deviceType)}
                isResponsive={true}
            />
            <DeviceTypeContainer deviceType={'Desktop'}>
                <RadioControl
                    selected={ radioSelected(props.attributes.desktop) }
                    options={ RADIO_OPTIONS.filter(x => x.value !== 'inherit') }
                    onChange={ ( value ) => {
                        props.setAttributes({desktop: radioValue(value)})
                    } }
                />
                {isFixed(props.attributes.desktop) && <RangeControl
                    value={colToRange(props.attributes.desktop)}
                    onChange={value => {
                        props.setAttributes({desktop: value ? value.toString() : undefined});
                    }}
                    min={1}
                    max={12}
                    showTooltip={true}
                    withInputField={false}
                />}
            </DeviceTypeContainer>
            <DeviceTypeContainer deviceType={'Tablet'}>
                <RadioControl
                    selected={ radioSelected(props.attributes.tablet) }
                    options={ RADIO_OPTIONS }
                    onChange={ ( value ) => {
                        props.setAttributes({tablet: radioValue(value)})
                    } }
                />
                {isFixed(props.attributes.tablet) && <RangeControl
                    value={colToRange(props.attributes.tablet)}
                    onChange={value => {
                        props.setAttributes({tablet: value ? value.toString() : undefined});
                    }}
                    min={1}
                    max={12}
                    showTooltip={true}
                    withInputField={false}
                />}
            </DeviceTypeContainer>
            <DeviceTypeContainer deviceType={'Mobile'}>
                <RadioControl
                    selected={ radioSelected(props.attributes.mobile) }
                    options={ RADIO_OPTIONS }
                    onChange={ ( value ) => {
                        props.setAttributes({mobile: radioValue(value)})
                    } }
                />
                {isFixed(props.attributes.mobile) && <RangeControl
                    value={colToRange(props.attributes.mobile)}
                    onChange={value => {
                        props.setAttributes({mobile: value ? value.toString() : undefined});
                    }}
                    min={1}
                    max={12}
                    showTooltip={true}
                    withInputField={false}
                />}
            </DeviceTypeContainer>
        </div>
    );
};

export default Controls;
