// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import UnitRangeControl from './UnitRangeControl';
import {useState} from '@wordpress/element';

const meta: Meta<typeof UnitRangeControl> = {
    component: UnitRangeControl,
};

export default meta;

type Story = StoryObj<typeof UnitRangeControl>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState<string | number | undefined>(undefined);
        return (
            <>
            <UnitRangeControl onChange={ setValue } value={ value }/>
                <pre>Value: {value !== undefined ? value : 'undefined' }</pre>
            </>
        );
    }
};