import { useBlockPropsWithId } from '@mindspun/mrblx';

import { useRequiredIndicator } from '~shared/hooks/useFieldEdit';

import EditorStyles from '~shared/components/EditorStyles';

import './editor.scss';
import metadata from './block.json';
import type { Props } from './types';
import Controls from './controls/Controls';
import { getClassName } from './utils';
import Checkbox from './Checkbox';

const Edit = (props: Props) => {
	useRequiredIndicator(props);

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
				'optionContentStyle',
				'optionContentErrorStyle',
				'helpStyle',
				'fieldErrorStyle',
			]}
		>
			<Controls {...props} />
			<div {...blockProps}>
				<Checkbox attributes={props.attributes} />
			</div>
		</EditorStyles>
	);
};

export default Edit;
