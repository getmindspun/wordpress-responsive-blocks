import { useBlockPropsWithId } from '@mindspun/mrblx';

import { useFieldEdit } from '~shared/hooks/useFieldEdit';
import EditorStyles from '~shared/components/EditorStyles';

import metadata from './block.json';
import './editor.scss';
import type { Props } from './types';
import Controls from './controls/Controls';
import { getClassName } from './utils';
import Field from './Field';

const Edit = (props: Props) => {
	useFieldEdit(props);

	const blockProps = useBlockPropsWithId(props, {
		className: getClassName(props),
	});

	return (
		<EditorStyles
			{...props}
			metadata={metadata}
			keys={[
				'style',
				'labelStyle',
				'labelStyleRequiredIndicator',
				'labelStyleError',
				'inputStyle',
				'inputStyleFocus',
				'inputStyleError',
				'helpStyle',
				'fieldErrorStyle',
			]}
		>
			<Controls {...props} />
			<div {...blockProps}>
				<Field attributes={props.attributes} />
			</div>
		</EditorStyles>
	);
};

export default Edit;
