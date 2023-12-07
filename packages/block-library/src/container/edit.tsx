import {useInnerBlocksProps} from '@wordpress/block-editor';

import {useBlockPropsWithId, StylePortal} from '@mindspun/wpx';

import './editor.scss';
import {Props} from './types';
import Controls from './controls/Controls';
import {getClassName} from './utils';

export default function Edit(props: Props & {clientId: string}) {
	const blockProps = useBlockPropsWithId(props, {
		className: getClassName(props.attributes)
	});
	const innerBlocksProps = useInnerBlocksProps();

	return (
		<>
			<Controls {...props} />
			<StylePortal
				blockId={props.attributes.blockId}
				attributes={props.attributes.style}
			/>
			<div {...blockProps}>
				<div {...innerBlocksProps} />
			</div>
		</>
	);
}
