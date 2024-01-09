import {useInnerBlocksProps} from '@wordpress/block-editor';
import {useState} from '@wordpress/element';

import {useBlockPropsWithId, StylePortalClientId} from '@mindspun/wpx';

import './editor.scss';
import {Props} from './types';
import Controls from './controls/Controls';
import {getClassName} from './utils';

export default function Edit(props: Props & {clientId: string}) {
	const [focused, setFocused] = useState(false);
	const blockProps = useBlockPropsWithId(props, {
		className: getClassName(props.attributes, focused)
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps);

	return (
		<>
			<Controls
				{...props}
				onMouseEnter={() => setFocused(true)}
				onMouseLeave={() => setFocused(false)}
			/>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.style}
			/>
			<div {...innerBlocksProps} />
		</>
	);
}
