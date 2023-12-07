import {Button, ButtonGroup} from '@wordpress/components';
import {__} from '@wordpress/i18n';

import './VerticalAlignControl.scss';

import alignTop from '../../icons/alignTop';
import alignBottom from '../../icons/alignBottom';
import middle from '../../icons/middle';
import stretch from '../../icons/stretch';

import {VerticalAlign} from '../../types';
import {CSSProperties} from 'react';


const VerticalAlignBaseControl = (props: {
    label?: string
    options: VerticalAlign[];
    verticalAlign: CSSProperties['verticalAlign'] | undefined;
    onChange: (verticalAlign: VerticalAlign|undefined) => void;
}) => {
    return (
        <ButtonGroup>
            {props.options.includes('top') &&
                <Button
                    key="top"
                    icon={alignTop}
                    label={__('Align top')}
                    showTooltip={true}
                    isPressed={props.verticalAlign === 'top'}
                    onClick={() => {
                        const verticalAlign = props.verticalAlign !== 'top' ? 'top' : undefined;
                        props.onChange(verticalAlign)
                    }}
                />
            }
            {props.options.includes('middle') &&
                <Button
                    key="middle"
                    icon={middle}
                    label={__('Align middle')}
                    showTooltip={true}
                    isPressed={props.verticalAlign === 'middle'}
                    onClick={() => {
                        const verticalAlign = props.verticalAlign !== 'middle' ? 'middle' : undefined;
                        props.onChange(verticalAlign)
                    }}
                />
            }
            {props.options.includes('bottom') &&
                <Button
                    key="bottom"
                    icon={alignBottom}
                    label={__('Align bottom')}
                    showTooltip={true}
                    isPressed={props.verticalAlign === 'bottom'}
                    onClick={() => {
                        const verticalAlign = props.verticalAlign !== 'bottom' ? 'bottom' : undefined;
                        props.onChange(verticalAlign)
                    }}
                />
            }
            {props.options.includes('stretch') &&
                <Button
                    key="stretch"
                    icon={stretch}
                    label={__('Stretch to fill')}
                    showTooltip={true}
                    isPressed={props.verticalAlign === 'stretch'}
                    onClick={() => {
                        const verticalAlign = props.verticalAlign !== 'stretch' ? 'stretch' : undefined;
                        props.onChange(verticalAlign)
                    }}
                />
            }
        </ButtonGroup>
    );
}

export default VerticalAlignBaseControl;
