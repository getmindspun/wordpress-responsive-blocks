import { useBlockPropsWithId } from '@mindspun/mrblx';

import {buildBlockAttrs} from '~shared/utils';

import type { Props } from './types';
import {getClassName, getDefaultValue} from './utils';
import BaseRadio from './BaseRadio';

const Save = (props: { attributes: Props['attributes'] }) => {
	const blockProps = useBlockPropsWithId.save(props, {
		className: getClassName(props),
	});

	return (
		<div
			{...blockProps}
			data-mrblx-attrs={buildBlockAttrs(props.attributes)}
		>
			<BaseRadio attributes={props.attributes} value={getDefaultValue(props.attributes.options)} />
		</div>
	);
};

export default Save;
