import { useBlockPropsWithId } from '@mindspun/mrblx';

import { useFieldEdit } from '~shared/hooks/useFieldEdit';
import EditorStyles from '~shared/components/EditorStyles';

import metadata from '../form/block.json';
import './editor.scss';
import type { Props } from './types';
import Controls from './controls/Controls';
import { getClassName } from './utils';
import Select from './Select';

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
				'selectStyle',
				'selectStyleError',
				'selectStyleFocus',
				'helpStyle',
				'fieldErrorStyle',
			]}
		>
			<Controls {...props} />
			<div {...blockProps}>
				<Select attributes={props.attributes} />
			</div>
		</EditorStyles>
	);
};

export default Edit;
