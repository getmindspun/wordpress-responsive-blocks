import { StylePortalClientId, useBlockPropsWithId } from '@mindspun/mrblx';

import './editor.scss';
import type { Props } from './types';
import Controls from './controls/Controls';
import { getClassName } from './utils';
import BaseSelect from './BaseSelect';
import { useFieldEdit } from '~shared/hooks/useFieldEdit';

const Edit = (props: Props) => {
	useFieldEdit(props);

	const blockProps = useBlockPropsWithId(props, {
		className: getClassName(props),
	});

	return (
		<>
			<Controls {...props} />
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.style}
			/>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.labelStyle}
				selector={'.mrblx-field-label'}
			/>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.labelStyleError}
				selector={'.mrblx-field-label.is-error'}
			/>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.labelStyleRequiredIndicator}
				selector={'.mrblx-field-label .mrblx-required-indicator'}
			/>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.selectStyle}
				selector={'select'}
			/>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.helpStyle}
				selector={'.field-help'}
			/>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.fieldErrorStyle}
				selector={'.field-error'}
			/>
			<div {...blockProps}>
				<BaseSelect attributes={props.attributes} />
			</div>
		</>
	);
};

export default Edit;
