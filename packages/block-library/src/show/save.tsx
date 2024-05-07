import classNames from 'classnames';
import { useInnerBlocksProps } from '@wordpress/block-editor';
import { Props } from './types';
import { useBlockPropsWithId } from '@mindspun/mrblx';

export default function save(props: { attributes: Props['attributes'] }) {
	const blockProps = useBlockPropsWithId.save(props, {
		className: classNames({
			[`mrblx--transition-${props.attributes.transition}`]:
				!!props.attributes.transition &&
				props.attributes.transition !== 'none',
			'data-event-type': props.attributes.eventType
				? props.attributes.eventType
				: 'mrblx.show',
		}),
	});
	const innerBlockProps = useInnerBlocksProps.save();

	return (
		<div {...blockProps} data-transition-duration={props.attributes.transitionDuration ? `${props.attributes.transitionDuration}s` : undefined} >
			<div {...innerBlockProps} />
		</div>
	);
}
