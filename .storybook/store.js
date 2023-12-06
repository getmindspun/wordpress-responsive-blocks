import { createReduxStore, register } from '@wordpress/data';

const DEFAULT_STATE = {
    deviceType: 'Desktop',
};

const store = createReduxStore( 'core/edit-post', {
    reducer( state = DEFAULT_STATE, action ) {
        switch ( action.type ) {
            case 'SET_DEVICE_TYPE':
                return {
                    ...state,
                    deviceType: action.deviceType
                };
        }

        return state;
    },

    actions: {
        __experimentalSetPreviewDeviceType(deviceType) {
            return {
                type: 'SET_DEVICE_TYPE',
                deviceType,
            };
        }
    },

    selectors: {
        __experimentalGetPreviewDeviceType( state ) {
            return state.deviceType;
        },
    },
} );

register( store );
