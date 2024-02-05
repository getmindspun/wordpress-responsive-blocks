import React from 'react';

import { useInnerBlocksProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { type BlockInstance } from '@wordpress/blocks';
import { useEffect, useState } from '@wordpress/element';

import { StylePortalClientId, useBlockPropsWithId } from '@mindspun/wpx';

import './editor.scss';
import { BlockStoreSelectors, Props } from './types';
import Header from './components/Header';
import Tab from './components/Tab';
import Controls from './controls/Controls';
import { labelsEqual, tabsToLabels } from './utils';

import { BLOCK_NAME as TAB_BLOCK } from './tab';

function useInnerBlocks(clientId: string): BlockInstance[] {
	return useSelect(
		(select) => {
			const block = (
				select('core/block-editor') as BlockStoreSelectors
			).getBlock(clientId);
			return block ? block.innerBlocks : [];
		},
		[clientId]
	);
}

function buildCSS(activeTabBlockId: string | null) {
	return activeTabBlockId
		? `div[data-wpx-id="${activeTabBlockId}"]{display:block !important}`
		: '';
}

export default function Edit(props: Props) {
	const tabs = useInnerBlocks(props.clientId);
	const [activeTab, setActiveTab] = useState<string | null>(null);

	useEffect(() => {
		if (!activeTab && props.attributes.blockId && tabs.length > 0) {
			setActiveTab(tabs[0].attributes.blockId);
		}
	}, [activeTab, props.attributes.blockId, tabs]);

	useEffect(() => {
		const labels = tabsToLabels(tabs);
		if (!labelsEqual(labels, props.attributes.labels)) {
			props.setAttributes({ labels });
		}
	}, [tabs, props]);

	const blockProps = useBlockPropsWithId(props);
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		allowedBlocks: [TAB_BLOCK],
		template: [
			['mindspun/tab', { label: 'Tab 1' }, [['core/paragraph', {}, []]]],
			['mindspun/tab', { label: 'Tab 2' }, [['core/paragraph', {}, []]]],
			['mindspun/tab', { label: 'Tab 3' }, [['core/paragraph', {}, []]]],
		],
	});

	return (
		<>
			<Controls {...props} />
			<style>{buildCSS(activeTab)}</style>
			<div {...innerBlocksProps}>
				<Header {...props}>
					<StylePortalClientId
						clientId={props.clientId}
						attributes={props.attributes.tab}
						selector={'.wpx--tab:not(.wpx--tab--active)'}
					/>
					<StylePortalClientId
						clientId={props.clientId}
						attributes={props.attributes.activeTab}
						selector={'.wpx--tab--active'}
					/>
					<StylePortalClientId
						clientId={props.clientId}
						attributes={props.attributes.content}
						selector={'.wp-block-mindspun-tab'}
					/>
					{tabs.map((tab, index) => {
						const blockId = tab.attributes.blockId;
						const isActive =
							blockId === activeTab ||
							(!activeTab && index === 0);

						return (
							<Tab
								key={index}
								blockId={blockId}
								label={tab.attributes.label}
								isActive={isActive}
								onClick={() => setActiveTab(blockId)}
							/>
						);
					})}
				</Header>
				{children as React.ReactNode}
			</div>
		</>
	);
}
