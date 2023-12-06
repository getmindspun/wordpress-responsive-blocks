import React from 'react';
import {Button, ButtonGroup} from '@wordpress/components';

import './ControlHeader.scss';

import {ReactComponent as SliderIcon} from '../../icons/Sliders.svg';
import {ReactComponent as ClearIcon} from '../../icons/Clear.svg';
import LinkButton from './LinkButton';
import {useGetPreviewDeviceType, useSetPreviewDeviceType} from '../../hooks';

type ControlHeaderProps = {
    title?: string;
    hint?: string;
    isAdvanced?: boolean,
    onAdvancedChange?: (isAdvanced: boolean) => void;
    isLinked?: boolean,
    onLinkedChange?: (isLinked: boolean) => void;
    onClear?: () => void;
    isResponsive?: boolean
}

const ControlHeader = (props: ControlHeaderProps) => {
    const deviceType = useGetPreviewDeviceType();
    const setDeviceType = useSetPreviewDeviceType();

    return (
        <div className="wpx--control-header">
            <label>
                { props.title }
                { props.hint && <span>{ props.hint }</span> }
            </label>
            { !!props.isResponsive &&
                <ButtonGroup>
                    <Button
                        key="desktop"
                        icon={ 'desktop' }
                        isSmall={ true }
                        label={ 'Desktop' }
                        showTooltip={true}
                        isPressed={ deviceType === 'Desktop' }
                        onClick={ () => setDeviceType('Desktop') }
                    />
                    <Button
                        key="tablet"
                        icon={ 'tablet' }
                        isSmall={ true }
                        label={ 'Tablet' }
                        showTooltip={true}
                        isPressed={ deviceType === 'Tablet' }
                        onClick={ () => setDeviceType('Tablet') }
                    />
                    <Button
                        key="mobile"
                        icon={ 'smartphone' }
                        isSmall={ true }
                        label={ 'Mobile' }
                        showTooltip={true}
                        isPressed={ deviceType === 'Mobile' }
                        onClick={ () => setDeviceType('Mobile') }
                    />
                </ButtonGroup>
            }
            { (props.isAdvanced !== undefined && props.onAdvancedChange) &&
                <Button
                    key="slider"
                    icon={ SliderIcon }
                    isSmall={ true }
                    isPressed={ props.isAdvanced }
                    onClick={ () => props.onAdvancedChange!(!props.isAdvanced) }
                    label={ props.isAdvanced ? 'Use size preset' : 'Set custom size' }
                    showTooltip={true}
                />
            }
            { (props.isLinked !== undefined && props.onLinkedChange) &&
                <LinkButton
                    isLinked={ props.isLinked }
                    onLinkedChange={ props.onLinkedChange }
                />
            }
            { !!props.onClear &&
                <Button
                    key="clear"
                    icon={ ClearIcon }
                    isSmall={ true }
                    onClick={ props.onClear }
                    label={ 'Reset' }
                    showTooltip={true}
                />
            }
        </div>
    );
};

export default ControlHeader;
