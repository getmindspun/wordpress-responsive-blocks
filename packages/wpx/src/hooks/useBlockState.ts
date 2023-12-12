import {useDispatch, useSelect} from '@wordpress/data';
import React from 'react';
import {useCallback} from '@wordpress/element';

export default function useBlockState(key: string|number) {
    const dispatch = useDispatch('wpx/block-data') as {
        setControlState: (key: string|number, value: React.Key) => void;
    };

    const { controlState } = useSelect(
        ( select ) => {
            return {
                controlState: (select( 'wpx/block-data' ) as {
                    getControlState: (key: string|number) => React.Key
                }).getControlState(key),
            };
        },
        [key]
    );


    const setter = useCallback((value: React.Key) => {
        dispatch.setControlState(key, value);
    }, [ controlState ]);

    return [controlState, setter] as [React.Key, (value: React.Key) => void];
}
