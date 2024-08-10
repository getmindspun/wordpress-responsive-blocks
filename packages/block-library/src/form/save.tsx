import {useInnerBlocksProps} from '@wordpress/block-editor';
import {useBlockPropsWithId} from '@mindspun/mrblx';
import type {Props} from './types';

export default function save(props: { attributes: Props['attributes'] }) {
    const blockProps = useBlockPropsWithId.save(props);
    const innerBlockProps = useInnerBlocksProps.save(blockProps);

    return (
        <form
            {...innerBlockProps}
            method={props.attributes.method}
            action={props.attributes.action}
            noValidate={true}
            encType={props.attributes.encType}
        />
    );
}
