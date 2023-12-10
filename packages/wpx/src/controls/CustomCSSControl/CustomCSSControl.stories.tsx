// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {useState} from '@wordpress/element';
import CustomCSSControl, {CustomCSSProperties} from './CustomCSSControl';
import {BlockCSSProperties} from '../../types';
import {buildCSS} from '../../functions';

const meta: Meta<typeof CustomCSSControl> = {
    title: 'controls/CustomCSSControl',
    component: CustomCSSControl,
};

export default meta;

type Story = StoryObj<typeof CustomCSSControl>;

const Display = (props: { attributes: BlockCSSProperties, children: React.ReactNode }) => {
    return (
        <>
            <div style={{display: 'flex'}}>
                <div style={{flexGrow: 1, flexBasis: 0}}>
                    {props.children}
                </div>
                <div style={{flexGrow: 1, flexBasis: 0, marginTop: '2em'}}>
                        <pre
                            style={{
                                width: 'fit-content',
                                margin: '0 auto'
                            }}>{JSON.stringify(props.attributes, null, 4)}</pre>
                </div>
            </div>
            <div style={{marginTop: '2em'}}>
                &lt;style&gt;
                <pre>
                        {buildCSS('123', props.attributes)}
                    </pre>
                &lt;/style&gt;
            </div>
        </>
    )
}

export const Default: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<CustomCSSProperties>({} as CustomCSSProperties);

        return (
            <Display attributes={attributes}>
                <CustomCSSControl
                    blockId={'123'}
                    attributes={attributes}
                    setAttributes={newAttributes => {
                        setAttributes({...attributes, ...newAttributes});
                    }}
                />
            </Display>
        );
    }
};

export const Responsive: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<CustomCSSProperties>({} as CustomCSSProperties);

        return (
            <Display attributes={attributes}>
                <CustomCSSControl
                    blockId={'123'}
                    attributes={attributes}
                    setAttributes={newAttributes => {
                        setAttributes({...attributes, ...newAttributes});
                    }}
                    isResponsive={true}
                />
            </Display>
        );
    }
};
