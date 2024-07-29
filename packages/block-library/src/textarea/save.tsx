import { useBlockPropsWithId } from '@mindspun/mrblx';
import type { Props } from './types';
import { getClassName } from './utils';
import BaseTextArea from './BaseTextArea';
import {buildBlockAttrs} from '~shared/utils';

const Save = (props: { attributes: Props['attributes'] }) => {
	const blockProps = useBlockPropsWithId.save(props, {
		className: getClassName(props),
	});

	return (
		<div
			{...blockProps}
			data-mrblx-attrs={buildBlockAttrs(props.attributes)}
		>
			<BaseTextArea attributes={props.attributes} />
		</div>
	);
};

export default Save;
