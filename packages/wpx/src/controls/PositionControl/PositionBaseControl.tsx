import {CSSProperties} from 'react';
import {SelectControl} from '@wordpress/components';
import PositionLengthControl from './PositionLengthControl';
import {__} from '@wordpress/i18n';

const OPTIONS = [
    {label: 'Default', value: 'default'},
    {label: 'Static', value: 'static'},
    {label: 'Relative', value: 'relative'},
    {label: 'Absolute', value: 'absolute'},
    {label: 'Fixed', value: 'fixed'},
    {label: 'Sticky', value: 'sticky'}
];

const PositionBaseControl = (props: {
    attributes: CSSProperties,
    setAttributes: (attributes: CSSProperties) => void,
    isAdvanced?: boolean
}) => {
    return (
        <>
            <SelectControl
                value={props.attributes.position ? props.attributes.position : 'default'}
                options={OPTIONS}
                onChange={(position) => {
                    props.setAttributes({
                        position: position !== 'default' ? position as CSSProperties['position'] : undefined
                    });
                }}
            />
            <PositionLengthControl
                label={__('top')}
                value={props.attributes.top}
                onChange={top => props.setAttributes({top})}
                isAdvanced={!!props.isAdvanced}
            />
            <PositionLengthControl
                label={__('right')}
                value={props.attributes.right}
                onChange={right => props.setAttributes({right})}
                isAdvanced={!!props.isAdvanced}
            />
            <PositionLengthControl
                label={__('bottom')}
                value={props.attributes.bottom}
                onChange={bottom => props.setAttributes({bottom})}
                isAdvanced={!!props.isAdvanced}
            />
            <PositionLengthControl
                label={__('left')}
                value={props.attributes.left}
                onChange={left => props.setAttributes({left})}
                isAdvanced={!!props.isAdvanced}
            />
        </>
    );
}

export default PositionBaseControl;