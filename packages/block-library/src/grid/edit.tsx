import { useInnerBlocksProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

import { useBlockPropsWithId, StylePortalClientId } from '@mindspun/mrblx';

import './editor.scss';
import { Props } from './types';
import Controls from './Controls';
import { getClassName } from './utils';
import { useGetBlock, useHasSelectedBlock } from './hooks';
import { type BlockInstance } from '@wordpress/blocks';
import Placeholder from './Placeholder';

function hasInnerBlocks(block: BlockInstance | null) {
	return block && block.innerBlocks && block.innerBlocks.length > 0;
}

export default function Edit(props: Props) {
	const block = useGetBlock(props.clientId);
	const selected = useHasSelectedBlock(props.clientId);

	const [focused, setFocused] = useState(false);
	const blockProps = useBlockPropsWithId(props, {
		className: getClassName(props.attributes, focused || selected),
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps);

	return (
		<>
			<Controls
				{...props}
				onMouseEnter={() => setFocused(true)}
				onMouseLeave={() => setFocused(false)}
			/>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.style}
			/>

			{hasInnerBlocks(block) ? (
				<div {...innerBlocksProps}></div>
			) : (
				<Placeholder {...props} />
			)}
		</>
	);
}
