import {CSSProperties} from 'react';
import {Button, ButtonGroup} from '@wordpress/components';
import {__} from '@wordpress/i18n';

import './FontSizeControl.scss';

import {fromRem, toRem} from './utils';
import UnitRangeControl from '../UnitRangeControl/UnitRangeControl';
import {FontSize} from './FontSizeControl';

const FontSizeBaseControl = (props: {
    label?: string;
    fontSize: CSSProperties['fontSize'];
    onChange: (fontSize: CSSProperties['fontSize']) => void;
    fontSizes: FontSize[];
    isAdvanced: boolean
}) => {
    const name = fromRem(props.fontSize, props.fontSizes);

    return (
        <>
            {props.isAdvanced ?
                <UnitRangeControl
                    value={props.fontSize}
                    onChange={props.onChange}
                /> :
                <ButtonGroup>
                    {props.fontSizes.map(option => (
                            <Button
                                key={option.name}
                                label={option.name}
                                showTooltip={true}
                                isPressed={name === option.name}
                                onClick={() => {
                                    const fontSize = name !== option.name ? toRem(option.name, props.fontSizes) : undefined
                                    props.onChange(fontSize);
                                }}
                            >{option.name}</Button>
                        ))
                    }
                </ButtonGroup>
            }
        </>
    );
};

export default FontSizeBaseControl;
