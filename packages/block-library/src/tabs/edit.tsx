import React from 'react';

import {useInnerBlocksProps} from '@wordpress/block-editor';
import {useSelect} from '@wordpress/data';
import {BlockInstance} from '@wordpress/blocks';

import {StylePortal, useBlockPropsWithId, useBlockState} from '@mindspun/wpx';

import './editor.scss';
import {BlockStoreSelectors, Props} from './types';
import Header from './components/Header';
import Tab from './components/Tab';

import Controls from './components/controls/Controls';
import {useEffect, useState} from '@wordpress/element';

function useInnerBlocks(clientId: string): BlockInstance[] {
    return useSelect(
        (select) => {
            const block = (select('core/block-editor') as BlockStoreSelectors).getBlock(clientId);
            return block ? block.innerBlocks : [];
        }, []);
}

function buildCSS(activeTab: string|null) {
    return activeTab ? `#wpx-${activeTab}{display:block}` : '';
}

export default function Edit(props: Props) {
    const tabs = useInnerBlocks(props.clientId);
    const [activeTab, setActiveTab] = useState<string|null>(null);

    useEffect(() => {
        if (!activeTab && props.attributes.blockId && tabs.length > 0) {
            setActiveTab(tabs[0].attributes.blockId);
        }
    }, [activeTab, props.attributes.blockId, tabs]);

    const blockProps = useBlockPropsWithId(props);
    const {children, ...innerBlocksProps} = useInnerBlocksProps(blockProps, {
        allowedBlocks: ['mindspun/tab'],
        template: [
            ['mindspun/tab', {label: 'Tab 1'}, [
                ['core/paragraph', {}, []]
            ]],
            ['mindspun/tab', {label: 'Tab 2'}, [
                ['core/paragraph', {}, []]
            ]],
            ['mindspun/tab', {label: 'Tab 3'}, [
                ['core/paragraph', {}, []]
            ]],
        ],
    });

    return (
        <>
            <Controls {...props} />
            <style>{buildCSS(activeTab)}</style>
            <div {...innerBlocksProps}>
                <Header attributes={props.attributes}>
                    <StylePortal
                        blockId={props.attributes.blockId}
                        attributes={props.attributes.tab}
                        selector={'.wpx--tab'}
                    />
                    <StylePortal
                        blockId={props.attributes.blockId}
                        attributes={props.attributes.activeTab}
                        selector={'.wpx--tab--active'}
                    />
                    <StylePortal
                        blockId={props.attributes.blockId}
                        attributes={props.attributes.content}
                        selector={'.wp-block-mindspun-tab'}
                    />
                    {
                        tabs.map((tab: BlockInstance, index) => {
                            const isActive = (tab.attributes.blockId === activeTab || (!activeTab && index === 0))

                            return (
                                <Tab
                                    label={tab.attributes.label}
                                    isActive={isActive}
                                    onClick={() => setActiveTab(tab.attributes.blockId)}
                                />
                            );
                        })
                    }
                </Header>
                {children as React.ReactNode}
            </div>
        </>
    )
        ;
}
