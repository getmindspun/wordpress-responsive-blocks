// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {useState} from '@wordpress/element';

import LetterCaseControl from './LetterCaseControl';
import {BlockCSSProperties} from '../../types';

const meta: Meta<typeof LetterCaseControl> = {
    component: LetterCaseControl,
};

export default meta;

type Story = StoryObj<typeof LetterCaseControl>;

export const Default: Story = {
    render: () => {
        const [textTransform, setTextTransform] = useState<BlockCSSProperties['textTransform']>(undefined);
        return (
            <LetterCaseControl textTransform={ textTransform } onChange={ setTextTransform }/>
        );
    }
};
