// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import BackgroundImageControl, {BackgroundImageControlProps} from './BackgroundImageControl';
import {useState} from '@wordpress/element';


const meta: Meta<typeof BackgroundImageControl> = {
    component: BackgroundImageControl,
};

export default meta;

type Story = StoryObj<typeof BackgroundImageControl>;

export const Default: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<BackgroundImageControlProps['attributes']>({} as BackgroundImageControlProps['attributes']);
        return (
            <BackgroundImageControl
                attributes={attributes}
                setAttributes={setAttributes}
            />
        )
    }
};


export const WithValue: Story = {
    name: 'with Media',
    render: () => {
        const [attributes, setAttributes] = useState<BackgroundImageControlProps['attributes']>({
            backgroundImage: 'url(/foo/background-large.jpg)',
        } as BackgroundImageControlProps['attributes']);
        return (
            <>
                <BackgroundImageControl
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
                <pre>{JSON.stringify(attributes, null, 4)}</pre>
            </>
        )
    }
};


export const ResponsiveWithValue: Story = {
    name: 'Responsive with Media',
    render: () => {
        const [attributes, setAttributes] = useState<BackgroundImageControlProps['attributes']>({
            backgroundImage: 'url(/foo/background-large.jpg)',
            tabletBackgroundImage: 'url(/foo/background-medium.jpg)',
            mobileBackgroundImage: 'url(/foo/background-small.jpg)',
        } as BackgroundImageControlProps['attributes']);
        return (
            <>
                <BackgroundImageControl
                    attributes={attributes}
                    setAttributes={newAttributes => {
                        setAttributes({...attributes, ...newAttributes});
                    }}
                    isResponsive={true}
                />
                <pre>{JSON.stringify(attributes, null, 4)}</pre>
            </>
        )
    }
};
