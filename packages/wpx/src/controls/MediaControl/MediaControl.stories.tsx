// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import MediaControl, {MediaControlProps} from './MediaControl';
import {useState} from '@wordpress/element';


const meta: Meta<typeof MediaControl> = {
    component: MediaControl,
};

export default meta;

type Story = StoryObj<typeof MediaControl>;

export const Default: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<MediaControlProps['attributes']>({} as MediaControlProps['attributes']);
        return (
            <MediaControl
                attributes={attributes}
                setAttributes={setAttributes}
            />
        )
    }
};


export const WithValue: Story = {
    name: 'with Media',
    render: () => {
        const [attributes, setAttributes] = useState<MediaControlProps['attributes']>({
            'url': '/foo/image.jpg'
        } as MediaControlProps['attributes']);
        return (
            <MediaControl
                title={'Title'}
                attributes={attributes}
                setAttributes={setAttributes}
            />
        )
    }
};

export const Responsive: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<MediaControlProps['attributes']>({
            'url': '/foo/imageBig.jpg',
            'tabletUrl': '/foo/imageMedium.jpg',
            'mobileUrl': '/foo/imageSmall.jpg'
        } as MediaControlProps['attributes']);
        return (
            <MediaControl
                title={'Title'}
                attributes={attributes}
                setAttributes={newAttributes => {
                    setAttributes({...attributes, ...newAttributes});
                }}
                isResponsive
            />
        )
    }
};
