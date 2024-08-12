import { useState } from '@wordpress/element';
import { useBlockPropsWithId } from '@mindspun/mrblx';

import { useFieldEdit } from '~shared/hooks/useFieldEdit';
import EditorStyles from '~shared/components/EditorStyles';

import './editor.scss';
import metadata from './block.json';
import type { Props } from './types';
import Controls from './controls/Controls';
import { getClassName, getDefaultValue } from './utils';
import Radio from './Radio';

const Edit = (props: Props) => {
	const [value, setValue] = useState<string | undefined>(
		getDefaultValue(props.attributes.options)
	);
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
				'inputStyleError',
				'optionContentStyle',
				'optionContentErrorStyle',
				'helpStyle',
				'fieldErrorStyle',
			]}
		>
			<Controls {...props} />
			<div {...blockProps}>
				<Radio attributes={props.attributes} />
			</div>
		</EditorStyles>
	);
};

export default Edit;
