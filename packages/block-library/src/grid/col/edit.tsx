import {useInnerBlocksProps} from '@wordpress/block-editor';
import {useBlockPropsWithId} from '@mindspun/wpx';

import {Props} from './types';
import Controls from './controls/Controls';
import {getClassName} from './utils';

export default function Edit(props: Props & { clientId: string }) {
    const blockProps = useBlockPropsWithId(props, {
        className: getClassName(props.attributes.colspan)
    });
    const innerBlocksProps = useInnerBlocksProps(blockProps);

    /* This block is entirely static to avoid flicker on change. */
    return (
        <>
            <Controls {...props} />
            <div {...innerBlocksProps} />
        </>
    );
}
