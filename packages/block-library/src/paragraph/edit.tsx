import {RichText} from '@wordpress/block-editor';

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
				onChange={ content => {
					props.setAttributes( {content})
				}}
				value={ props.attributes.content }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				placeholder={'Enter text...'}
			/>
		</>
	);
}
