import {useInnerBlocksProps} from '@wordpress/block-editor';
import {useState} from '@wordpress/element';

import {useBlockPropsWithId, StylePortalClientId} from '@mindspun/wpx';

import './editor.scss';
import {Props} from './types';
import Controls from './Controls';
import TEMPLATE from './template';
import {getClassName} from './utils';
import {hasSelectedBlock} from './hooks';

export default function Edit(props: Props & {clientId: string}) {
	const selected = hasSelectedBlock(props.clientId);

	const [focused, setFocused] = useState(false);
	const blockProps = useBlockPropsWithId(props, {
		className: getClassName(props.attributes, focused || selected)
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: TEMPLATE
	});

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
			<div {...innerBlocksProps}></div>
		</>
	);
}
