import { useBlockPropsWithId } from '@mindspun/mrblx';

import {buildBlockAttrs} from '~shared/utils';

import type { Props } from './types';
import {getClassName} from './utils';
import BaseCheckbox from './BaseCheckbox';

const Save = (props: { attributes: Props['attributes'] }) => {
	const blockProps = useBlockPropsWithId.save(props, {
		className: getClassName(props),
	});

	return (
		<div
			{...blockProps}
			data-mrblx-attrs={buildBlockAttrs(props.attributes)}
		>
			<BaseCheckbox attributes={props.attributes} />
		</div>
	);
};

export default Save;
