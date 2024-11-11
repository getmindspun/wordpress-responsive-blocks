import {useBlockProps} from '@wordpress/block-editor';
import {useEffect} from '@wordpress/element';
import useBlockId from './useBlockId';
import {UseBlockProps} from '@wordpress/block-editor/components/use-block-props';
import {useIsInReusableBlock} from './useIsInReusableBlock';

export default function useBlockPropsWithId(
    props: {
        clientId: string;
        attributes: { blockId: string };
        setAttributes: (attributes: { blockId?: string }) => void;
    },
    config?: Parameters<UseBlockProps>[0]
) {
    const {blockId: propsBlockId} = props.attributes;

    const blockId = useBlockId(props.attributes.blockId, props.clientId);
    const blockProps = useBlockProps(config);
    blockProps['data-mrblx-id'] = `${blockId}`;

    useEffect(() => {
        if (blockId !== propsBlockId) {
            props.setAttributes({blockId});
        }
    }, [blockId, propsBlockId]);

    return blockProps;
}

useBlockPropsWithId.save = function (
    props: {
        attributes: { blockId: string };
    },
    config?: Parameters<UseBlockProps>[0]
) {
    const blockProps = useBlockProps.save(config);
    if (props.attributes.blockId) {
        blockProps.id = `mrblx-${props.attributes.blockId}`;
    }
    return blockProps;
};
