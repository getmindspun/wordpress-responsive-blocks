import { __ } from '@wordpress/i18n';

import SelectedContainerControl from '~shared/controls/SelectedContainerControl';
import SelectedContainer from '~shared/controls/SelectedContainer';

import LabelControls from '~shared/controls/form/LabelControls';
import SelectControls from '~shared/controls/form/SelectControls';
import FieldErrorControls from '~shared/controls/form/FieldErrorControls';
import HelpControls from '~shared/controls/form/HelpControls';

import { Attributes } from '../types';

const ElementsControls = (props: {
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
}) => {
	return (
		<SelectedContainerControl
			blockId={props.attributes.blockId}
			label={__('Element')}
		>
			<SelectedContainer key={'Field Label'}>
				<LabelControls {...props} />
			</SelectedContainer>
			<SelectedContainer key={'Select'}>
				<SelectControls {...props} />
			</SelectedContainer>
			<SelectedContainer key={'Field Help'}>
				<HelpControls {...props} />
			</SelectedContainer>
			<SelectedContainer key={'Field Error'}>
				<FieldErrorControls {...props} />
			</SelectedContainer>
		</SelectedContainerControl>
	);
};

export default ElementsControls;
