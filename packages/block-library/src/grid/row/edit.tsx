import {useInnerBlocksProps} from '@wordpress/block-editor';
import {useBlockPropsWithId} from '@mindspun/wpx';

import {Props} from '../types';

export default function Edit(props: Props & { clientId: string }) {
    const blockProps = useBlockPropsWithId(props);
    const innerBlocksProps = useInnerBlocksProps(blockProps);

    return (
        <div {...innerBlocksProps} />
    );
}
