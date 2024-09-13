import { useBlockProps } from '@wordpress/block-editor';
import type { Props } from './types';

const Save = (props: { attributes: Props['attributes'] }) => {
	return (
		<input
			{...useBlockProps.save()}
			type={'hidden'}
			name={props.attributes.name}
			value={props.attributes.value}
		/>
	);
};

export default Save;
