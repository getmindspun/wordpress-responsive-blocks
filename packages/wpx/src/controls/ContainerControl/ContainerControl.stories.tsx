// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import ContainerControl from './ContainerControl';
import {ContainerContents} from '../../components';


const meta: Meta<typeof ContainerControl> = {
    component: ContainerControl,
};

export default meta;

type Story = StoryObj<typeof ContainerControl>;

export const Default: Story = {
    args: {
        title: 'Container',
        initialOpen: false,
        children: (<ContainerContents>My container contents.</ContainerContents>)
    }
};

export const Opened: Story = {
    args: {
        title: 'Container',
        initialOpen: true,
        children: (<ContainerContents>My container contents.</ContainerContents>)
    }
};
