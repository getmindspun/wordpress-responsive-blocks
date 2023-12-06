import {register, createReduxStore} from '@wordpress/data';
import {State} from '@wordpress/data/build-types/redux-store/metadata/selectors';

if (!window.wpxStore) {
    const DEFAULT_STATE = {
        blockIds: {}
    } as {
        blockIds: Record<string, string>
    }

    const store = createReduxStore('wpx/block-data', {
        reducer(state = DEFAULT_STATE, action) {
            switch (action.type) {
                case 'SET_BLOCK_ID':
                    return {
                        ...state,
                        blockIds: {...state.blockIds, [action.blockId]: action.clientId}
                    };
                default:
                    return state;
            }
        },
        actions: {
            setBlockId(blockId: string, clientId: string) {
                return {
                    type: 'SET_BLOCK_ID',
                    blockId,
                    clientId
                };
            },
        },
        selectors: {
            checkBlockId(state: State, blockId: string, clientId: string) {
                if (blockId && state.blockIds.hasOwnProperty(blockId)) {
                    return state.blockIds[blockId] === clientId;
                }
                return true;
            },
        }
    });

    register(store);
    window.wpxStore = store;
}