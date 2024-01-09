import {EditorSelection, RichText} from '@wordpress/block-editor';
import {BlockInstance} from '@wordpress/blocks';

import {useBlockPropsWithId, StylePortalClientId} from '@mindspun/wpx';

import './editor.scss';
import {Props} from './types';
import Controls from './Controls';

export default function Edit(props: Props) {
	const blockProps = useBlockPropsWithId(props);

	return (
		<>
			<Controls {...props} />
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.style}
			/>
			<RichText
				identifier="content"
				{...blockProps}
				tagName={'p'}
				onChange={ text => {
					props.setAttributes( {text})
				}}
				value={ props.attributes.text }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				placeholder={'Enter text...'}
			/>
		</>
	);
}
