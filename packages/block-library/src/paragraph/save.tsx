import { RichText } from '@wordpress/block-editor';
import { useBlockPropsWithId } from '@mindspun/mrblx';
import { Props } from './types';

export default function save(props: { attributes: Props['attributes'] }) {
	return (
		<RichText.Content
			{...useBlockPropsWithId.save(props)}
			tagName={'p'}
			value={props.attributes.content}
		/>
	);
}
