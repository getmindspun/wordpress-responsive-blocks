// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import BackgroundColorControl, {BackgroundColorControlProps} from './BackgroundColorControl';
import {useState} from '@wordpress/element';
import {buildCSS} from '../../functions';
import StyleDisplay from '../../.storybook/StyleDisplay';


const meta: Meta<typeof BackgroundColorControl> = {
    component: BackgroundColorControl,
};

export default meta;

type Story = StoryObj<typeof BackgroundColorControl>;

export const Default: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<BackgroundColorControlProps['attributes']>({} as BackgroundColorControlProps['attributes']);
        return (
            <BackgroundColorControl
                attributes={attributes}
                setAttributes={newAttributes => {
                    setAttributes({...attributes, ...newAttributes});
                }}
                placement="bottom-start"
            />
        );
    }
};

export const Responsive: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<BackgroundColorControlProps['attributes']>({} as BackgroundColorControlProps['attributes']);
        return (
            <>
                <BackgroundColorControl
                    attributes={attributes}
                    setAttributes={newAttributes => {
                        setAttributes({...attributes, ...newAttributes});
                    }}
                    placement="bottom-start"
                    isResponsive={true}
                />
                <StyleDisplay attributes={attributes} />
            </>
        );
    }
};
