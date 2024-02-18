import React, { ElementType } from 'react';
import { useInnerBlocksProps } from '@wordpress/block-editor';
import { useBlockPropsWithId } from '@mindspun/mrblx';
import { Props } from './types';

export default function save(props: { attributes: Props['attributes'] }) {
	const blockProps = useBlockPropsWithId.save(props);
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);
	const HeadingTag = (props.attributes.tagName || 'div') as ElementType;

	return <HeadingTag {...innerBlocksProps} />;
}
