import { useInnerBlocksProps } from '@wordpress/block-editor';
import {useEffect} from '@wordpress/element';
import { useBlockPropsWithId } from '@mindspun/mrblx';

import { Props } from './types';
import Controls from './Controls';
import classNames from 'classnames';

export default function Edit(props: Props) {
	const className = classNames({
		'mrblx--show': props.attributes.isDefault,
	});

	const blockProps = useBlockPropsWithId(props, { className });
	const innerBlocksProps = useInnerBlocksProps(blockProps);

	console.log(props);

	useEffect(() => {
		props.setAttributes({
			isDefault: (!!props.attributes.blockId && props.context['mindspun/defaultBlockId'] === props.attributes.blockId)
		});
	}, [props.context]);

	return (
		<>
			<Controls {...props} />
			<div {...innerBlocksProps} />
		</>
	);
}
