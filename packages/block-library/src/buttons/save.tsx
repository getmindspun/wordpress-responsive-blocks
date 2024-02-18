import { useInnerBlocksProps } from '@wordpress/block-editor';
import { useBlockPropsWithId } from '@mindspun/mrblx';
import { Props } from './types';
import React from 'react';

export default function save(props: { attributes: Props['attributes'] }) {
	const blockProps = useBlockPropsWithId.save(props);
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);
	return <div {...innerBlocksProps} />;
}
