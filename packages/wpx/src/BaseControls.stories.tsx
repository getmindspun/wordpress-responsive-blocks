// noinspection JSUnusedGlobalSymbols

import React, {CSSProperties} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {useState} from '@wordpress/element';

import {BlockCSSProperties} from './types';
import BaseControls from './BaseControls';

import Display from './.storybook/Display';


const meta: Meta<typeof BaseControls> = {
    component: BaseControls,
};

export default meta;

type Story = StoryObj<typeof BaseControls>;

export const Default: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<CSSProperties>({});
        return (
            <div style={{display: 'flex'}}>
                <div style={{flexGrow: 1, flexBasis: 0}}>
                    <div style={{width: 280, marginLeft: 'auto', marginRight: 'auto'}}>
                        <BaseControls
                            attributes={attributes}
                            setAttributes={(value: Partial<CSSProperties>) => {
                                const newAttributes = {...attributes, ...value};
                                setAttributes(newAttributes);
                            }}/>
                    </div>
                </div>
                <div style={{flexGrow: 1, flexBasis: 0}}>
                    <pre>{JSON.stringify(attributes, null, 4)}</pre>
                </div>
            </div>
        );
    }
};

export const Responsive: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<BlockCSSProperties>({});
        return (
            <Display attributes={attributes}>
                <BaseControls
                    attributes={attributes}
                    setAttributes={(value: Partial<BlockCSSProperties>) => {
                        const newAttributes = {...attributes, ...value};
                        setAttributes(newAttributes);
                    }}
                    options={{
                        color: {responsive: true},
                        backgroundColor: {responsive: true},
                        textAlign: {responsive: true},
                        fontSize: {responsive: true},
                        blockAlign: {responsive: true},
                        margin: {responsive: true},
                        padding: {responsive: true},
                    }}
                />
            </Display>
        );
    }
};
