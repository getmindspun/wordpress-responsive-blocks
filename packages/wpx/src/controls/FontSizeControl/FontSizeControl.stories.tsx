// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import FontSizeControl from './FontSizeControl';
import {useState} from '@wordpress/element';
import FontSizeResponsiveControl, {FontSizeResponsiveControlProps} from './FontSizeResponsiveControl';


const meta: Meta<typeof FontSizeControl> = {
    component: FontSizeControl,
};

export default meta;

type Story = StoryObj<typeof FontSizeControl>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState<string | number | undefined>(undefined);
        return <FontSizeControl onChange={ setValue } value={ value }/>;
    }
};

export const Responsive: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<FontSizeResponsiveControlProps['attributes']>({} as FontSizeResponsiveControlProps['attributes']);
        return (
            <FontSizeResponsiveControl
                attributes={ attributes }
                setAttributes={newAttributes => {
                    setAttributes({...attributes, ...newAttributes});
                }}
            />
        );
    }
};
