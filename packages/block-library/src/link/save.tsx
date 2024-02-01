import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { Props } from './types';

export default function save(props: { attributes: Props['attributes'] }) {
	const blockProps = useBlockProps.save();
	const innerBlockProps = useInnerBlocksProps.save(blockProps);

	const rel =
		props.attributes.link.rel && props.attributes.link.rel.length > 0
			? props.attributes.link.rel.join(' ')
			: undefined;

	return (
		<a
			{...innerBlockProps}
			href={props.attributes.link.href || '#'}
			target={props.attributes.link.target}
			rel={rel}
			aria-label=""
		/>
	);
}
