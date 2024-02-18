import { useInnerBlocksProps } from '@wordpress/block-editor';
import { StylePortalClientId, useBlockPropsWithId } from '@mindspun/mrblx';

import { Props } from '../types';
import Controls from './Controls';

export default function Edit(props: Props & { clientId: string }) {
	const blockProps = useBlockPropsWithId(props);
	const innerBlocksProps = useInnerBlocksProps(blockProps);

	return (
		<>
			<Controls {...props} />
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.style}
			/>
			<div {...innerBlocksProps} />
		</>
	);
}
