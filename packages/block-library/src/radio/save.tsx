import { useBlockPropsWithId } from '@mindspun/mrblx';
import type { Props } from './types';
import { getClassName, buildBlockAttrs } from './utils';
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
			<BaseRadio attributes={props.attributes} />
		</div>
	);
};

export default Save;
