import classNames from 'classnames';
import {ElementType} from 'react';
import {useInnerBlocksProps} from '@wordpress/block-editor';
import {useState} from '@wordpress/element';

import {useBlockPropsWithId, StylePortalClientId} from '@mindspun/wpx';

import './editor.scss';
import {Props} from './types';
import Controls from './controls/Controls';

export default function Edit(props: Props & {clientId: string}) {
	const [focused, setFocused] = useState(false);
	const blockProps = useBlockPropsWithId(props, {
		className: classNames({
			'wpx--focused': focused
		})
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps);
	const HeadingTag = (props.attributes.tagName || 'div') as ElementType;

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
			<HeadingTag {...innerBlocksProps} />
		</>
	);
}
