// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import DeviceTypeContainer from './DeviceTypeContainer';
import {useState} from '@wordpress/element';
import ControlHeader from '../ControlHeader/ControlHeader';

const meta: Meta<typeof DeviceTypeContainer> = {
    component: DeviceTypeContainer,
};

export default meta;

type Story = StoryObj<typeof DeviceTypeContainer>;

export const Default: Story = {
    render: () => {
        return (
            <>
                <ControlHeader isResponsive={true}/>
                <DeviceTypeContainer deviceType={'Desktop'}>
                    This container is shown on Desktop only.
                </DeviceTypeContainer>
                <DeviceTypeContainer deviceType={'Tablet'}>
                    This container is shown on Tablet only.
                </DeviceTypeContainer>
                <DeviceTypeContainer deviceType={'Mobile'}>
                    This container is shown on Mobile only.
                </DeviceTypeContainer>
            </>
        );
    }
};