import {useInnerBlocksProps} from '@wordpress/block-editor';
import {useBlockPropsWithId} from '@mindspun/wpx';
import {BlockStoreSelectors, Props} from './types';
import {BlockInstance} from '@wordpress/blocks';
import {useSelect} from '@wordpress/data';

function useInnerBlocks(clientId: string): BlockInstance[] {
	return useSelect(
		(select) => {
			const block = (select('core/block-editor') as BlockStoreSelectors).getBlock(clientId);
			return block ? block.innerBlocks : [];
		}, []);
}

export default function save(props: {attributes: Props['attributes']}) {
	const blockProps = useBlockPropsWithId.save(props);
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return (
		<div {...blockProps}>
			 <div {...innerBlocksProps} />
		</div>
	);
}