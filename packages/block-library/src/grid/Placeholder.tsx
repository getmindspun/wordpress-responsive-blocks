import React from 'react';
import {
	type BlockVariation,
	type InnerBlockTemplate,
	createBlocksFromInnerBlocksTemplate,
} from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	// @ts-ignore
	__experimentalBlockVariationPicker,
} from '@wordpress/block-editor';
import { grid } from '@wordpress/icons';

import { useBlockPropsWithId } from '@mindspun/mrblx';

import { useGetBlock, useBlockEditor } from './hooks';

import variations from './variations';
import { Props } from './types';

const Placeholder = (props: Props) => {
	const blockProps = useBlockPropsWithId(props);
	const block = useGetBlock(props.clientId);
	const { replaceInnerBlocks } = useBlockEditor();

	function onSelect(variation: BlockVariation) {
		if (block) {
			replaceInnerBlocks(
				props.clientId,
				createBlocksFromInnerBlocksTemplate(
					variation.innerBlocks as InnerBlockTemplate[]
				)
			);
		}
	}

	return (
		<div {...blockProps}>
			<__experimentalBlockVariationPicker
				icon={grid}
				label={__('Grid')}
				variations={variations}
				onSelect={onSelect}
			/>
		</div>
	);
};

export default Placeholder;
