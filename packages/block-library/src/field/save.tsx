import {useBlockPropsWithId} from '@mindspun/mrblx';
import type {Props} from './types';
import {getClassName, buildBlockAttrs} from './utils';
import BaseField from './BaseField';

const Save = (props: { attributes: Props['attributes'] }) => {
    const blockProps = useBlockPropsWithId.save(props, {
        className: getClassName(props)
    });

    return (
        <div
            {...blockProps}
            data-mrblx-attrs={buildBlockAttrs(props.attributes)}
        >
            <BaseField attributes={props.attributes}/>
        </div>
    );
};

export default Save;