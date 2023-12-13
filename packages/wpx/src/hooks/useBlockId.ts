import {useDispatch, useSelect} from '@wordpress/data';

const state = {} as Record<string, number>;

function uniqueId(prefix: string) {
    if (!state[prefix]) {
        state[prefix] = 0;
    }
    const id = ++state[prefix];
    return `${prefix}${id}`;
}

function getPostIdPrefix( blockId: string | null) {
    if (blockId) {
        const tokens = blockId.split('_');
        if (tokens.length === 2) {
            return tokens[0];
        }
    }
    return null;
}

export default function useBlockId(blockId: string, clientId: string) {
    const { checkBlockId } = useSelect(
        ( select ) => {
            return {
                checkBlockId: (select( 'wpx/block-data' ) as {
                    checkBlockId: (blockId: string, clientId: string) => boolean
                }).checkBlockId,
            };
        },
        [ clientId ]
    );

    const setBlockId = useDispatch('wpx/block-data').setBlockId;

    const postId = useSelect(select => {
        return (select('core/editor') as {
            getCurrentPostId: () => number
        }).getCurrentPostId().toString();
    }, []);

    const prefix = `${postId}_${clientId.substring( 2, 9 )}`;

    if (!blockId || postId !== getPostIdPrefix(blockId)) {
        blockId = uniqueId(prefix);
    } else {
        /*
         * blockId exists but with the same clientId => switched device views
         * blockId exists with different client => duplicated block
         */
        if (!checkBlockId(blockId, clientId)) {
            blockId = uniqueId(prefix);
        }
    }

    setBlockId(blockId, clientId);
    return blockId;
}
