import {useBlockPropsWithId} from '@mindspun/mrblx';
import type {Props} from './types';
import Input from './Input';
import {getClassName, buildBlockAttrs} from './utils';

const Save = (props: { attributes: Props['attributes'] }) => {
    const blockProps = useBlockPropsWithId.save(props, {
        className: getClassName(props)
    });

    return (
        <div
            { ...blockProps }
            data-mrblx-attrs={ buildBlockAttrs(props.attributes) }
        >
            <Input attributes={ props.attributes }/>
        </div>
    );
};

export default Save;