// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {useState} from '@wordpress/element';

import JustifyContentControl, {JustifyContentControlProps} from './JustifyContentControl';

const meta: Meta<typeof JustifyContentControl> = {
    component: JustifyContentControl,
};

export default meta;

type Story = StoryObj<typeof JustifyContentControl>;

export const Base: Story = {
    render: () => {
        const [attributes, setAttributes] = useState({} as JustifyContentControlProps['attributes']);
        return (
            <div style={{width: '280px', margin: '0 auto'}}>
                <JustifyContentControl
                    attributes={attributes}
                    setAttributes={newAttributes => {
                        setAttributes({...attributes, ...newAttributes});
                    }}
                />
                <pre>{JSON.stringify(attributes, null, 4)}</pre>
            </div>
        );
    }
};

export const BaseWithOptions: Story = {
    render: () => {
        const [attributes, setAttributes] = useState({} as JustifyContentControlProps['attributes']);
        return (
            <div style={{width: '280px', margin: '0 auto'}}>
                <JustifyContentControl
                    attributes={attributes}
                    setAttributes={newAttributes => {
                        setAttributes({...attributes, ...newAttributes});
                    }}
                    options={ ['right', 'left', 'center'] }
                />
                <pre>{JSON.stringify(attributes, null, 4)}</pre>
            </div>
        );
    }
};

export const Responsive: Story = {
    render: () => {
        const [attributes, setAttributes] = useState({} as JustifyContentControlProps['attributes']);
        return (
            <div style={{width: '280px', margin: '0 auto'}}>
                <JustifyContentControl
                    attributes={attributes}
                    setAttributes={newAttributes => {
                        setAttributes({...attributes, ...newAttributes});
                    }}
                    isResponsive={true}
                />
                <pre>{JSON.stringify(attributes, null, 4)}</pre>
            </div>
        );
    }
};

export const ResponsiveWithOptions: Story = {
    render: () => {
        const [attributes, setAttributes] = useState({} as JustifyContentControlProps['attributes']);
        return (
            <div style={{width: '280px', margin: '0 auto'}}>
                <JustifyContentControl
                    attributes={attributes}
                    setAttributes={newAttributes => {
                        setAttributes({...attributes, ...newAttributes});
                    }}
                    options={ ['right', 'left', 'center'] }
                    isResponsive={true}
                />
                <pre>{JSON.stringify(attributes, null, 4)}</pre>
            </div>
        );
    }
};
