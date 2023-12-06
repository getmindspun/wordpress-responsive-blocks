// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {useState} from '@wordpress/element';

import BlockAlignControl, {BlockAlignControlProps} from './BlockAlignControl';

const meta: Meta<typeof BlockAlignControl> = {
    component: BlockAlignControl,
};

export default meta;

type Story = StoryObj<typeof BlockAlignControl>;

export const Base: Story = {
    render: () => {
        const [attributes, setAttributes] = useState({} as BlockAlignControlProps['attributes']);
        return (
            <div style={{width: '280px', margin: '0 auto'}}>
                <BlockAlignControl
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
        const [attributes, setAttributes] = useState({} as BlockAlignControlProps['attributes']);
        return (
            <div style={{width: '280px', margin: '0 auto'}}>
                <BlockAlignControl
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
        const [attributes, setAttributes] = useState({} as BlockAlignControlProps['attributes']);
        return (
            <div style={{width: '280px', margin: '0 auto'}}>
                <BlockAlignControl
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
        const [attributes, setAttributes] = useState({} as BlockAlignControlProps['attributes']);
        return (
            <div style={{width: '280px', margin: '0 auto'}}>
                <BlockAlignControl
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
