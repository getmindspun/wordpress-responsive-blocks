// noinspection JSUnusedGlobalSymbols

import React, {CSSProperties} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import ControlGroup from './ControlGroup';
import {useState} from '@wordpress/element';
import {BlockCSSProperties} from './types';
import {buildCSS} from './functions';


const meta: Meta<typeof ControlGroup> = {
    component: ControlGroup,
};

export default meta;

type Story = StoryObj<typeof ControlGroup>;

const Display = (props: { attributes: BlockCSSProperties, children: React.ReactNode }) => {
    return (
        <>
            <div style={{display: 'flex'}}>
                <div style={{flexGrow: 1, flexBasis: 0}}>
                    <div style={{width: 280, marginLeft: 'auto', marginRight: 'auto'}}>
                        {props.children}
                    </div>
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
                        {buildCSS('123', '.block', props.attributes)}
                    </pre>
                &lt;/style&gt;
            </div>
        </>
    )
}

export const Default: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<CSSProperties>({});
        return (
            <div style={{display: 'flex'}}>
                <div style={{flexGrow: 1, flexBasis: 0}}>
                    <div style={{width: 280, marginLeft: 'auto', marginRight: 'auto'}}>
                        <ControlGroup
                            title="Kitchen Sink"
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
                <ControlGroup
                    title="Responsive"
                    attributes={attributes}
                    setAttributes={(value: Partial<BlockCSSProperties>) => {
                        const newAttributes = {...attributes, ...value};
                        setAttributes(newAttributes);
                    }}
                    options={{
                        color: {responsive: true},
                        backgroundColor: {responsive: true},
                        textAlign: {responsive: true},
                        blockAlign: {responsive: true},
                        margin: {responsive: true},
                        padding: {responsive: true},
                    }}
                />
            </Display>
        );
    }
};

export const OnlySpacing: Story = {
    name: 'only Spacing',
    render: () => {
        const [attributes, setAttributes] = useState<CSSProperties>({});
        return (
            <Display attributes={attributes}>
                <ControlGroup
                    title="Spacing"
                    attributes={attributes}
                    setAttributes={(value: Partial<CSSProperties>) => {
                        const newAttributes = {...attributes, ...value};
                        setAttributes(newAttributes);
                    }}
                    options={{
                        padding: true,
                        margin: true
                    }}
                />
            </Display>
        );

    }
};

export const OnlyColors: Story = {
    name: 'only Colors',
    render: () => {
        const [attributes, setAttributes] = useState<CSSProperties>({});

        return (
            <Display attributes={attributes}>
                <ControlGroup
                    title="Colors"
                    attributes={attributes}
                    setAttributes={(value: Partial<CSSProperties>) => {
                        const newAttributes = {...attributes, ...value};
                        setAttributes(newAttributes);
                    }}
                    options={{
                        color: true,
                        backgroundColor: true
                    }}
                />
            </Display>
        );

    }
};