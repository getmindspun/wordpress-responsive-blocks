// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import FontAppearanceControl, {FontAppearance} from './FontAppearanceControl';
import {useState} from '@wordpress/element';


const meta: Meta<typeof FontAppearanceControl> = {
    component: FontAppearanceControl,
};

export default meta;

type Story = StoryObj<typeof FontAppearanceControl>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState<FontAppearance>({});
        return <FontAppearanceControl onChange={ setValue } style={ value }/>;
    }
};
