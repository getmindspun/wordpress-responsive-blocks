import { useInnerBlocksProps } from '@wordpress/block-editor';

import { useBlockPropsWithId, StylePortalClientId } from '@mindspun/mrblx';

import './editor.scss';
import { Props } from './types';
import Controls from './Controls';
import { BLOCK_NAME as BUTTON_BLOCK } from './button';

export default function Edit(props: Props & { clientId: string }) {
	const blockProps = useBlockPropsWithId(props);
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [[BUTTON_BLOCK]],
		allowedBlocks: [BUTTON_BLOCK],
	});

	return (
		<>
			<Controls {...props} />
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.style}
			/>
			<div {...innerBlocksProps}></div>
		</>
	);
}
