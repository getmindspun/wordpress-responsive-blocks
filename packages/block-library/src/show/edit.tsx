import { useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

import './editor.scss';
import { Props } from './types';
import Controls from './Controls';

import { BLOCK_NAME as INNER_BLOCK } from './inner';
import type { BlockInstance } from '@wordpress/blocks';
import { StylePortalClientId, useBlockPropsWithId } from '@mindspun/mrblx';
import template from './template';

function useFirstBlockId(clientId: string): string | null {
	return useSelect(
		(select) => {
			const block = (
				select('core/block-editor') as {
					getBlock: (clientId: string) => BlockInstance | null;
				}
			).getBlock(clientId);
			if (block && block.innerBlocks.length > 0) {
				return block.innerBlocks[0].attributes.blockId;
			}
			return null;
		},
		[clientId]
	);
}

export default function Edit(props: Props) {
	const blockProps = useBlockPropsWithId(props);

	const firstBlockId = useFirstBlockId(props.clientId);

	useEffect(() => {
		props.setAttributes({
			defaultBlockId: firstBlockId ? firstBlockId : '',
		});
	}, [firstBlockId, props]);

	const innerBlocksProps = useInnerBlocksProps(
		{},
		{
			allowedBlocks: [INNER_BLOCK],
			template: template(props.attributes.blockId),
		}
	);

	return (
		<>
			<Controls {...props} />
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.style}
			/>
			<div {...blockProps}>
				<div {...innerBlocksProps} />
			</div>
		</>
	);
}
