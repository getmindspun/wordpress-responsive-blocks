import { __ } from '@wordpress/i18n';

import SelectedContainerControl from '~shared/controls/SelectedContainerControl';
import SelectedContainer from '~shared/controls/SelectedContainer';

import { ElementsAttributes } from '~shared/types';
import LabelControls from '~shared/controls/form/LabelControls';
import SelectControls from '~shared/controls/form/SelectControls';
import FieldErrorControls from '~shared/controls/form/FieldErrorControls';
import InputControls from '~shared/controls/form/InputControls';

const ElementsControls = (props: {
	attributes: ElementsAttributes;
	setAttributes: (attributes: Partial<ElementsAttributes>) => void;
}) => {
	return (
		<SelectedContainerControl
			blockId={props.attributes.blockId}
			label={__('Element')}
		>
			<SelectedContainer key={'Labels'}>
				<LabelControls {...props} />
			</SelectedContainer>
			<SelectedContainer key={'Inputs'}>
				<InputControls {...props} />
			</SelectedContainer>
			<SelectedContainer key={'Selects'}>
				<SelectControls {...props} />
			</SelectedContainer>
			<SelectedContainer key={'Field Errors'}>
				<FieldErrorControls {...props} />
			</SelectedContainer>
		</SelectedContainerControl>
	);
};

export default ElementsControls;
