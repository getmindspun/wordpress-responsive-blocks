import {register, createReduxStore} from '@wordpress/data';

window.wp = window.wp || {};
if (!window.wp.editor) {
    const DEFAULT_STATE = {
        deviceType: 'Desktop'
    };

    const store = createReduxStore('core/editor', {
        reducer(state = DEFAULT_STATE, action) {
            switch (action.type) {
                case 'SET_DEVICE_TYPE':
                    return {
                        ...state,
                        deviceType: action.deviceType
                    };
                default:
                    return state;
            }
        },
        actions: {
            setDeviceType(deviceType) {
                return {
                    type: 'SET_DEVICE_TYPE',
                    deviceType
                };
            },
        },
        selectors: {
            getDeviceType(state) {
                return state.deviceType
            }
        },
    });

    register(store);
    window.wp.editor = store;
}
