import { useSelect } from '@wordpress/data';
import { BlockEditorSelectors } from '@mindspun/block-library/src/grid/hooks';

export function useIsInReusableBlock(clientId: string): boolean {
	return useSelect(
		(select) => {
			const { getBlockParents, getBlock } = select(
				'core/block-editor'
			) as BlockEditorSelectors;
			const parentIds = getBlockParents(clientId);
			return parentIds.some((parentId) => {
				const parentBlock = getBlock(parentId);
				return parentBlock && parentBlock.name === 'core/block';
			});
		},
		[clientId]
	);
}
