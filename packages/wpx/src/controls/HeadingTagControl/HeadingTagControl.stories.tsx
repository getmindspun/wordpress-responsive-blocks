// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import HeadingTagControl, {HeadingTag} from './HeadingTagControl';
import {useState} from '@wordpress/element';


const meta: Meta<typeof HeadingTagControl> = {
    component: HeadingTagControl,
};

export default meta;

type Story = StoryObj<typeof HeadingTagControl>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState<HeadingTag>('h3');
        return <HeadingTagControl onChange={ setValue } tagName={ value }/>;
    }
};
