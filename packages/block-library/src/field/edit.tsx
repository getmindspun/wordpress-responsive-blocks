import {useEffect} from '@wordpress/element';

import {StylePortalClientId, useBlockPropsWithId} from '@mindspun/mrblx';

import type {Props} from './types';
import Controls from './controls/Controls';
import {getClassName} from './utils';
import Field from './Field';

const Edit = (props: Props) => {
    const blockProps = useBlockPropsWithId(props, {
        className: getClassName(props)
    });

    useEffect(() => {
        props.setAttributes({
            labelPosition: props.context['mindspun/labelPosition'] || 'top'
        });
    }, [props.context['mindspun/labelPosition']]);

    return (
        <>
            <Controls { ...props } />
            <StylePortalClientId
                clientId={ props.clientId }
                attributes={ props.attributes.style }
            />
            <div { ...blockProps }>
                <Field attributes={ props.attributes }/>
            </div>
        </>
    );
};

export default Edit;
