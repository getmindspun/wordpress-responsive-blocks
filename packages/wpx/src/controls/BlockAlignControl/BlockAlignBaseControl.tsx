import {__} from '@wordpress/i18n';
import {Button, ButtonGroup} from '@wordpress/components';

import './BlockAlignControl.scss';
import {BlockAlign, BlockCSSProperties} from '../../types';


const BlockAlignControl = (props: {
    label?: string,
    options: BlockAlign[];
    blockAlign: BlockCSSProperties['blockAlign'],
    onChange: (blockAlign: BlockCSSProperties['blockAlign']) => void;
}) => {
    return (

        <ButtonGroup>
            {props.options.includes('left') &&
                <Button
                    key="left"
                    icon={'align-left'}
                    label={__('Align left')}
                    showTooltip={true}
                    isPressed={props.blockAlign === 'left'}
                    onClick={() => {
                        const blockAlign = props.blockAlign !== 'left' ? 'left' : undefined;
                        props.onChange(blockAlign);
                    }}
                />
            }
            {props.options.includes('center') &&
                <Button
                    key="center"
                    icon={'align-center'}
                    label={__('Align center')}
                    showTooltip={true}
                    isPressed={props.blockAlign === 'center'}
                    onClick={() => {
                        const blockAlign = props.blockAlign !== 'center' ? 'center' : undefined;
                        props.onChange(blockAlign);
                    }}
                />
            }
            {props.options.includes('right') &&
                <Button
                    key="right"
                    icon={'align-right'}
                    label={__('Align right')}
                    showTooltip={true}
                    isPressed={props.blockAlign === 'right'}
                    onClick={() => {
                        const align = props.blockAlign !== 'right' ? 'right' : undefined;
                        props.onChange(align);
                    }}
                />
            }
            {props.options.includes('wide') &&
                <Button
                    key="wide"
                    icon={'align-wide'}
                    label={__('Align wide')}
                    showTooltip={true}
                    isPressed={props.blockAlign === 'wide'}
                    onClick={() => {
                        const align = props.blockAlign !== 'wide' ? 'wide' : undefined;
                        props.onChange(align);
                    }}
                />
            }
            {props.options.includes('full') &&
                <Button
                    key="full"
                    icon={'align-full-width'}
                    label={__('Align full width')}
                    showTooltip={true}
                    isPressed={props.blockAlign === 'full'}
                    onClick={() => {
                        const align = props.blockAlign !== 'full' ? 'full' : undefined;
                        props.onChange(align);
                    }}
                />
            }
        </ButtonGroup>
    );
};

BlockAlignControl.defaultProps = {
    label: __('Block Align'),
    options: ['left', 'center', 'right', 'wide', 'full'] as BlockAlign[],
}

export default BlockAlignControl;
