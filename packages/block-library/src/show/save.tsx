import { useInnerBlocksProps } from '@wordpress/block-editor';
import { Props } from './types';
import classNames from 'classnames';
import { useBlockPropsWithId } from '@mindspun/mrblx';

export default function save(props: { attributes: Props['attributes'] }) {
	const blockProps = useBlockPropsWithId.save(props, {
		className: classNames({
			[`mrblx--transition-${props.attributes.transition}`]: !!props.attributes.transition && props.attributes.transition !== 'none'
		}),
	});
	const innerBlockProps = useInnerBlocksProps.save();


	return (
		<div {...blockProps}>
			<div {...innerBlockProps} />
		</div>
	);
}
