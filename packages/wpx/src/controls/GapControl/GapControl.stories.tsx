// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import GapControl, {GapControlProps} from './GapControl';
import {useState} from '@wordpress/element';


const meta: Meta<typeof GapControl> = {
    component: GapControl,
};

export default meta;

type Story = StoryObj<typeof GapControl>;

export const Default: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<GapControlProps['attributes']>({});
        return (
            <>
                <GapControl
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
                <pre>{JSON.stringify(attributes, null, 4)}</pre>
            </>
        )
    }
};

export const Responsive: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<GapControlProps['attributes']>({});
        return (
            <>
                <GapControl
                    attributes={attributes}
                    setAttributes={newAttributes => {
                        setAttributes({...attributes, ...newAttributes})
                    }}
                    isResponsive={true}
                />
                <pre>{JSON.stringify(attributes, null, 4)}</pre>
            </>
        )
    }
};
