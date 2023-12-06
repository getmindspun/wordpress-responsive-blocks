// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import ImageScaleControl, {ImageScaleControlProps} from './ImageScaleControl';
import {useState} from '@wordpress/element';


const meta: Meta<typeof ImageScaleControl> = {
    component: ImageScaleControl,
};

export default meta;

type Story = StoryObj<typeof ImageScaleControl>;

export const Default: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<ImageScaleControlProps['attributes']>({} as ImageScaleControlProps['attributes']);
        return (
            <>
                <ImageScaleControl
                    attributes={attributes}
                    setAttributes={newAttributes => {
                        setAttributes({...attributes, ...newAttributes});
                    }}
                    width={256}
                    height={256}
                />
                <img
                    src={'https://getmindspun.github.io/public/blogs/webp/lenna.jpg'} alt={'Lenna'}
                    width={attributes.scaledWidth !== undefined ? attributes.scaledWidth : 256}
                    height={attributes.scaledHeight !== undefined ? attributes.scaledHeight : 256}
                />
            </>
        )
    }
};
