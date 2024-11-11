import { useDispatch, useSelect } from '@wordpress/data';
import { useIsInReusableBlock } from './useIsInReusableBlock';

const state = {} as Record<string, number>;

function uniqueId(prefix: string) {
	if (!state[prefix]) {
		state[prefix] = 0;
	}
	const id = ++state[prefix];
	return `${prefix}${id}`;
}

function getPostIdPrefix(blockId: string | null) {
	if (blockId) {
		const tokens = blockId.split('_');
		if (tokens.length === 2) {
			return tokens[0];
		}
	}
	return null;
}

export default function useBlockId(blockId: string, clientId: string) {
	const { checkBlockId } = useSelect((select) => {
		return {
			checkBlockId: (
				select('mrblx/block-data') as {
					checkBlockId: (
						blockId: string,
						clientId: string
					) => boolean;
				}
			).checkBlockId,
		};
	}, []);

	const isInReusableBlock = useIsInReusableBlock(clientId);

	const setBlockId = useDispatch('mrblx/block-data').setBlockId;

	const postId = useSelect((select) => {
		const currentPostId = (
			select('core/editor') as {
				getCurrentPostId: () => number | null;
			}
		).getCurrentPostId();

		// In FSE, getCurrentPostId() returns null.
		return currentPostId !== null
			? currentPostId.toString().replace(/\/+/g, '--')
			: '0';
	}, []);

	const prefix = `${postId}_${clientId.substring(2, 9)}`;

	if (!isInReusableBlock) {
		if (!blockId || postId !== getPostIdPrefix(blockId)) {
			blockId = uniqueId(prefix);
		} else if (!checkBlockId(blockId, clientId)) {
			/*
			 * blockId exists but with the same clientId => switched device views
			 * blockId exists with different client => duplicated block
			 */
			blockId = uniqueId(prefix);
		}
	}

	setBlockId(blockId, clientId);
	return blockId;
}
