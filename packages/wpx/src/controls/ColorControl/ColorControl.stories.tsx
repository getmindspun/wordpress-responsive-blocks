// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import ColorControl, {ColorControlProps} from './ColorControl';
import {useState} from '@wordpress/element';


const meta: Meta<typeof ColorControl> = {
    component: ColorControl,
};

export default meta;

type Story = StoryObj<typeof ColorControl>;

export const Default: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<ColorControlProps['attributes']>({} as ColorControlProps['attributes']);
        return (
            <ColorControl
                label={'Color'}
                attributes={attributes}
                setAttributes={newAttributes => {
                    setAttributes({...attributes, ...newAttributes});
                }}
                placement="bottom-start"
            />
        );
    }
};

export const Responsive: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<ColorControlProps['attributes']>({} as ColorControlProps['attributes']);
        return (
            <ColorControl
                label={'Color'}
                attributes={attributes}
                setAttributes={newAttributes => {
                    setAttributes({...attributes, ...newAttributes});
                }}
                placement="bottom-start"
                isResponsive={true}
            />
        );
    }
};
