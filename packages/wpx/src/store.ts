import React from 'react';
import {register, createReduxStore} from '@wordpress/data';
import {State} from '@wordpress/data/build-types/redux-store/metadata/selectors';

if (!window.wpxStore) {
    const DEFAULT_STATE = {
        blockIds: {},
        controlStates: {}
    } as {
        blockIds: Record<string, string>
        controlStates: Record<string|number, React.Key>
    }

    const store = createReduxStore('wpx/block-data', {
        reducer(state = DEFAULT_STATE, action) {
            switch (action.type) {
                case 'SET_BLOCK_ID':
                    return {
                        ...state,
                        blockIds: {...state.blockIds, [action.blockId]: action.clientId}
                    };
                case 'SET_CONTROL_STATE':
                    return {
                        ...state,
                        controlStates: {...state.controlStates, [action.key]: action.value}
                    }
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
            setControlState(key: string|number, value: React.Key) {
                return {
                    type: 'SET_CONTROL_STATE',
                    key,
                    value
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
            getControlState(state: State, key: string|number): React.Key|undefined {
                return state.controlStates[key];
            }
        }
    });

    register(store);
    window.wpxStore = store;
}