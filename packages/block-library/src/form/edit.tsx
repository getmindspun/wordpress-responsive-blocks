import { useInnerBlocksProps } from '@wordpress/block-editor';

import {StylePortalClientId, useBlockPropsWithId} from '@mindspun/mrblx';

import './editor.scss';
import type { Props } from './types';
import Controls from './controls/Controls';
import template from './template';

export default function Edit(props: Props) {
	const blockProps = useBlockPropsWithId(props);
	const innerBlocksProps = useInnerBlocksProps(
		blockProps,
		{
			template: template,
		}
	);

	return (
		<>
			<StylePortalClientId
				clientId={ props.clientId }
				attributes={ props.attributes.style }
			/>
			<Controls
				{...props}
			/>
			<form {...innerBlocksProps} />
		</>
	);
}
