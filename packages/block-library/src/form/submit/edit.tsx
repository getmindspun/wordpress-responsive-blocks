import { StylePortalClientId, useBlockPropsWithId } from '@mindspun/mrblx';

import './editor.scss';
import type { Props } from './types';
import Controls from './controls/Controls';

export default function Edit(props: Props) {
	const blockProps = useBlockPropsWithId(props);
	return (
		<>
			<Controls {...props} />
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.style}
			/>
			<input
				{...blockProps}
				value={
					props.attributes.value ? props.attributes.value : undefined
				}
				type={props.attributes.type ? props.attributes.type : 'submit'}
				onClick={(event) => event.preventDefault()}
			/>
		</>
	);
}
