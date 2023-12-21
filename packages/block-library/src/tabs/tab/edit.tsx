import {useInnerBlocksProps} from '@wordpress/block-editor';
import {useBlockPropsWithId} from '@mindspun/wpx';

import {Props} from './types';
import Controls from './Controls';
import {useEffect} from '@wordpress/element';

function isFirstTab(blockId: string, tabs: Record<string, string>) {
    const labels = Object.keys(tabs);
    if (blockId && labels && labels.length > 0) {
        return blockId === tabs[labels[0]];
    }
    return false;
}

export default function Edit(props: Props & { clientId: string }) {
    const blockProps = useBlockPropsWithId(props);
    const innerBlocksProps = useInnerBlocksProps(blockProps);

    useEffect(() => {
        props.setAttributes({
            isDefault: isFirstTab(props.attributes.blockId, props.context['mindspun/tabs'])
        })
    }, [props.context]);

    /* This block is entirely static to avoid flicker on change. */
    return (
        <>
            <Controls {...props} />
            <div {...innerBlocksProps} role="tabpanel" tabIndex={0}/>
        </>
    );
}
