import { useInnerBlocksProps } from '@wordpress/block-editor';
import { useBlockPropsWithId } from '@mindspun/mrblx';
import { Props } from './types';
import classNames from 'classnames';

export default function save(props: { attributes: Props['attributes'] }) {
	const className = classNames({
		'mrblx--tab-panel--active': props.attributes.isDefault,
	});
	const blockProps = useBlockPropsWithId.save(props, { className });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return <div {...innerBlocksProps} role="tabpanel" />;
}
