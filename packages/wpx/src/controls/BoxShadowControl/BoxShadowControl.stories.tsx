// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {useState} from '@wordpress/element';

import BoxShadowControl from './BoxShadowControl';
import {BlockCSSProperties} from '../../types';
import {prop} from './utils';
import {useGetPreviewDeviceType} from '../../hooks';


const meta: Meta<typeof BoxShadowControl> = {
    title: 'controls/BoxShadowControl',
    component: BoxShadowControl,
};

export default meta;

type Story = StoryObj<typeof BoxShadowControl>;

const Display = (props: {
    attributes: BlockCSSProperties,
    children: React.ReactNode
}) => {
    const deviceType = useGetPreviewDeviceType();

    return (
        <div style={{display: 'flex'}}>
            <div style={{flexGrow: 1, flexBasis: 1}}>
                {props.children}
                <pre style={{marginTop: '2em'}}>{JSON.stringify(props.attributes, null, 4)}</pre>
            </div>
            <div style={{flexGrow: 1, flexBasis: 1}}>
                <div style={{
                    width: '300px', height: '100px', border: '3px solid black', margin: '2em auto',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    boxShadow: props.attributes[prop(deviceType)]
                }}>
                    This is a box with a box-shadow around it.
                </div>
            </div>
        </div>
    );
}

export const Default: Story = {
    render: () => {
        const [attributes, setAttributes] = useState<BlockCSSProperties>({} as BlockCSSProperties);

        return (
            <Display attributes={attributes}>
                <BoxShadowControl
                    label={'Box Shadow'}
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
        const [attributes, setAttributes] = useState<BlockCSSProperties>({} as BlockCSSProperties);

        return (
            <Display attributes={attributes}>
                <BoxShadowControl
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
