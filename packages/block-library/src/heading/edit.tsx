import { RichText } from '@wordpress/block-editor';

import { useBlockPropsWithId, StylePortalClientId } from '@mindspun/mrblx';

import './editor.scss';
import { Props } from './types';
import Controls from './Controls';

export default function Edit(props: Props & { clientId: string }) {
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
				onChange={(content) => {
					props.setAttributes({ content });
				}}
				value={props.attributes.content}
				allowedFormats={['core/bold', 'core/italic', 'core/link']}
				placeholder={'Heading...'}
			/>
		</>
	);
}
