// noinspection JSUnusedGlobalSymbols

/**
 * This component is deprecated in favor of using the clear button on the ControlHeader.
 */

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import ClearButton from './ClearButton';

const meta: Meta<typeof ClearButton> = {
    component: ClearButton,
};

export default meta;

type Story = StoryObj<typeof ClearButton>;

export const Default: Story = {};
