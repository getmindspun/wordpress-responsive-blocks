// noinspection JSUnusedGlobalSymbols

import React, {CSSProperties} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import TextAlignBaseControl from './TextAlignBaseControl';
import {useState} from '@wordpress/element';
import TextAlignControl, {TextAlignControlProps} from './TextAlignControl';

const meta: Meta<typeof TextAlignControl> = {
    component: TextAlignControl,
};

export default meta;

type Story = StoryObj<typeof TextAlignControl>;

export const Base: Story = {
    render: () => {
        const [attributes, setAttributes] = useState({} as TextAlignControlProps['attributes']);
        return (
            <div style={{width: '280px', margin: '0 auto'}}>
                <TextAlignControl
                    attributes={attributes}
                    setAttributes={newAttributes => {
                        setAttributes({...attributes, ...newAttributes});
                    }}/>
                <pre>{JSON.stringify(attributes, null, 4)}</pre>
            </div>
        );
    }
};

export const Responsive: Story = {
    render: () => {
        const [attributes, setAttributes] = useState({} as TextAlignControlProps['attributes']);
        return (
            <div style={{width: '280px', margin: '0 auto'}}>
                <TextAlignControl
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
