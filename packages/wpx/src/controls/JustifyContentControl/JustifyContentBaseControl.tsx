import {__} from '@wordpress/i18n';
import {Button, ButtonGroup} from '@wordpress/components';
import {justifyLeft,  justifyCenter, justifyRight, justifySpaceBetween, justifyStretch} from '@wordpress/icons';

import './JustifyContentControl.scss';
import {JustifyContent, BlockCSSProperties} from '../../types';


const JustifyContentControl = (props: {
    label?: string,
    options: JustifyContent[];
    justifyContent: BlockCSSProperties['justifyContent'],
    onChange: (justifyContent: BlockCSSProperties['justifyContent']) => void;
}) => {
    return (
        <ButtonGroup>
            {props.options.includes('left') &&
                <Button
                    key="left"
                    icon={justifyLeft}
                    label={__('Justify left')}
                    showTooltip={true}
                    isPressed={props.justifyContent === 'left'}
                    onClick={() => {
                        const justifyContent = props.justifyContent !== 'left' ? 'left' : undefined;
                        props.onChange(justifyContent);
                    }}
                />
            }
            {props.options.includes('center') &&
                <Button
                    key="center"
                    icon={justifyCenter}
                    label={__('Justify center')}
                    showTooltip={true}
                    isPressed={props.justifyContent === 'center'}
                    onClick={() => {
                        const justifyContent = props.justifyContent !== 'center' ? 'center' : undefined;
                        props.onChange(justifyContent);
                    }}
                />
            }
            {props.options.includes('right') &&
                <Button
                    key="right"
                    icon={justifyRight}
                    label={__('Justify right')}
                    showTooltip={true}
                    isPressed={props.justifyContent === 'right'}
                    onClick={() => {
                        const justify = props.justifyContent !== 'right' ? 'right' : undefined;
                        props.onChange(justify);
                    }}
                />
            }
            {props.options.includes('space-between') &&
                <Button
                    key="space-between"
                    icon={justifySpaceBetween}
                    label={__('Justify with space between')}
                    showTooltip={true}
                    isPressed={props.justifyContent === 'space-between'}
                    onClick={() => {
                        const justify = props.justifyContent !== 'space-between' ? 'space-between' : undefined;
                        props.onChange(justify);
                    }}
                />
            }
            {props.options.includes('stretch') &&
                <Button
                    key="stretch"
                    icon={justifyStretch}
                    label={__('Justify stretch')}
                    showTooltip={true}
                    isPressed={props.justifyContent === 'stretch'}
                    onClick={() => {
                        const justify = props.justifyContent !== 'stretch' ? 'stretch' : undefined;
                        props.onChange(justify);
                    }}
                />
            }
        </ButtonGroup>
    );
};

JustifyContentControl.defaultProps = {
    label: __('Justify Content'),
    options: ['left', 'center', 'right', 'space-between', 'stretch'] as JustifyContent[],
}

export default JustifyContentControl;
