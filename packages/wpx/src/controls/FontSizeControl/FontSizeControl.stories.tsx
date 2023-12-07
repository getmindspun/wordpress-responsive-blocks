// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import FontSizeControl, {FontSizeControlProps} from './FontSizeControl';
import {useState} from '@wordpress/element';
import Display from '../../.storybook/Display';


const meta: Meta<typeof FontSizeControl> = {
    component: FontSizeControl,
};

export default meta;

type Story = StoryObj<typeof FontSizeControl>;

export const Default: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<FontSizeControlProps['attributes']>({} as FontSizeControlProps['attributes']);
        return (
            <Display attributes={attributes}>
                <FontSizeControl
                    attributes={attributes}
                    setAttributes={newAttributes => {
                        setAttributes({...attributes, ...newAttributes});
                    }}
                />
            </Display>
        );
    }
};

export const Responsive: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<FontSizeControlProps['attributes']>({} as FontSizeControlProps['attributes']);
        return (
            <Display attributes={attributes}>
                <FontSizeControl
                    attributes={attributes}
                    setAttributes={newAttributes => {
                        setAttributes({...attributes, ...newAttributes});
                    }}
                    isResponsive={true}
                />
            </Display>
        );
    }
};
