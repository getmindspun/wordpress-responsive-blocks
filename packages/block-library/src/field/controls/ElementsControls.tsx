import { __ } from '@wordpress/i18n';

import SelectedContainerControl from '~shared/controls/SelectedContainerControl';
import SelectedContainer from '~shared/controls/SelectedContainer';
import LabelControls from '~shared/controls/form/LabelControls';
import FieldErrorControls from '~shared/controls/form/FieldErrorControls';
import InputControls from '~shared/controls/form/InputControls';

import { Attributes } from '../types';
import HelpControls from '~shared/controls/form/HelpControls';

const ElementsControls = (props: {
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
}) => {
	return (
		<SelectedContainerControl
			blockId={props.attributes.blockId}
			label={__('Element')}
		>
			<SelectedContainer key={__('Field Label')}>
				<LabelControls {...props} />
			</SelectedContainer>
			<SelectedContainer key={__('Input')}>
				<InputControls {...props} />
			</SelectedContainer>
			<SelectedContainer key={__('Field Help')}>
				<HelpControls {...props} />
			</SelectedContainer>
			<SelectedContainer key={__('Field Errors')}>
				<FieldErrorControls {...props} />
			</SelectedContainer>
		</SelectedContainerControl>
	);
};

export default ElementsControls;
