import {useInnerBlocksProps} from '@wordpress/block-editor';
import {useBlockPropsWithId} from '@mindspun/wpx';
import {Props} from './types';
import {getClassName} from './utils';

export default function save(props: {attributes: Props['attributes']}) {
	const blockProps = useBlockPropsWithId.save(props, {
		className: getClassName(props.attributes.colspan)
	});
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return (
		<div {...innerBlocksProps} />
	);
}
