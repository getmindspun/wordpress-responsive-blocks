import { useBlockProps } from '@wordpress/block-editor';
import {useEffect} from '@wordpress/element';

import {useBlockId} from 'wpx';

import './editor.scss';
import {Props} from './types';
import Controls from './Controls';

export default function Edit(props: Props & {clientId: string}) {
	const blockId = useBlockId(props.attributes.blockId, props.clientId)
	const blockProps = useBlockProps();

	useEffect(() => {
		if (blockId !== props.attributes.blockId) {
			props.setAttributes({blockId})
		}
	}, [blockId, props.attributes.blockId]);

	return (
		<>
			<Controls {...props} />
			<div {...blockProps} id={`wpx-${blockId}`}>
				Hello World!
			</div>
		</>
	);
}
