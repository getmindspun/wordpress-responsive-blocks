import {CSSProperties} from 'react';
import {Button, ButtonGroup} from '@wordpress/components';
import {__} from '@wordpress/i18n';

import './FontSizeControl.scss';

import {fromRem, toRem} from './utils';
import UnitRangeControl from '../UnitRangeControl/UnitRangeControl';

export interface FontSizeControlProps {
    label?: string;
    fontSize: CSSProperties['fontSize'];
    onChange: (fontSize: CSSProperties['fontSize']) => void;
    isResponsive?: boolean;
    isAdvanced?: boolean
}

const FontSizeBaseControl = (props: FontSizeControlProps) => {
    const name = fromRem(props.fontSize);

    return (
        <>
            {props.isAdvanced ?
                <UnitRangeControl
                    value={props.fontSize}
                    onChange={props.onChange}
                /> :
                <ButtonGroup>
                    <Button
                        key="small"
                        label={__('Small')}
                        showTooltip={true}
                        isPressed={name === 'S'}
                        onClick={() => {
                            const fontSize = name !== 'S' ? toRem('S') : undefined
                            props.onChange(fontSize);
                        }}
                    >S</Button>
                    <Button
                        key="medium"
                        label={__('Medium')}
                        showTooltip={true}
                        isPressed={name === 'M'}
                        onClick={() => {
                            const fontSize = name !== 'M' ? toRem('M') : undefined
                            props.onChange(fontSize);
                        }}
                    >M</Button>
                    <Button
                        key="large"
                        label={__('Large')}
                        showTooltip={true}
                        isPressed={name === 'L'}
                        onClick={() => {
                            const fontSize = name !== 'L' ? toRem('L') : undefined
                            props.onChange(fontSize);
                        }}
                    >L</Button>
                    <Button
                        key="xl"
                        label={__('Extra Large')}
                        showTooltip={true}
                        isPressed={name === 'XL'}
                        onClick={() => {
                            const fontSize = name !== 'XL' ? toRem('XL') : undefined
                            props.onChange(fontSize);
                        }}
                    >XL</Button>
                    <Button
                        key="xxl"
                        label={__('Extra Extra Large')}
                        showTooltip={true}
                        isPressed={name === 'XXL'}
                        onClick={() => {
                            const fontSize = name !== 'XXL' ? toRem('XXL') : undefined
                            props.onChange(fontSize);
                        }}
                    >
                        <div>XXL</div>
                    </Button>
                </ButtonGroup>
            }
        </>
    );
};

export default FontSizeBaseControl;
