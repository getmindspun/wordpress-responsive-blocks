import {RichText} from '@wordpress/block-editor';

import {useBlockPropsWithId, StylePortalClientId} from '@mindspun/wpx';

import './editor.scss';
import {Props} from './types';
import Controls from './Controls';

export default function Edit(props: Props & {clientId: string}) {
	const blockProps = useBlockPropsWithId(props);
	const tagName = props.attributes.tagName ? props.attributes.tagName : 'h2';

	return (
		<>
			<Controls {...props} />
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.style}
			/>
			<RichText
				{...blockProps}
				tagName={tagName}
				onChange={ text => {
					props.setAttributes( {text})
				}}
				value={ props.attributes.text }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				placeholder={'Heading...'}
			/>
		</>
	);
}
