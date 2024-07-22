import {useBlockPropsWithId} from '@mindspun/mrblx';
import type {Props} from './types';
import {getClassName, buildBlockAttrs} from './utils';
import Field from './Field';

const Save = (props: { attributes: Props['attributes'] }) => {
    const blockProps = useBlockPropsWithId.save(props, {
        className: getClassName(props)
    });

    return (
        <div
            {...blockProps}
            data-mrblx-attrs={buildBlockAttrs(props.attributes)}
        >
            <div {...blockProps}>
                <Field attributes={props.attributes}/>
            </div>
        </div>
    );
};

export default Save;