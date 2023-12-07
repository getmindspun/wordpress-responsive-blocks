// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {useState} from '@wordpress/element';

import LetterCaseControl, {TextTransform} from './LetterCaseControl';

const meta: Meta<typeof LetterCaseControl> = {
    component: LetterCaseControl,
};

export default meta;

type Story = StoryObj<typeof LetterCaseControl>;

export const Default: Story = {
    render: () => {
        const [textTransform, setTextTransform] = useState<TextTransform>(undefined);
        return (
            <LetterCaseControl textTransform={ textTransform } onChange={ setTextTransform }/>
        );
    }
};
