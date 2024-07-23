import { useBlockProps } from '@wordpress/block-editor';
import {useBlockPropsWithId} from '@mindspun/mrblx';
import {Props} from './types';

export default function save(props: { attributes: Props['attributes'] }) {
	const blockProps = useBlockPropsWithId.save(props);
	return (
		<input {...blockProps}
			value={props.attributes.value ? props.attributes.value : undefined}
			type={props.attributes.type ? props.attributes.type : 'submit'}
		/>
	);
}
