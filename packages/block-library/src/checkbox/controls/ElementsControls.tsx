import { __ } from '@wordpress/i18n';

import { ContainerContents } from '@mindspun/mrblx';

import SelectedContainerControl from '~shared/controls/SelectedContainerControl';
import SelectedContainer from '~shared/controls/SelectedContainer';

import DisplayControl from '~shared/controls/container/DisplayControl';

import LabelControls from '~shared/controls/form/LabelControls';
import FieldErrorControls from '~shared/controls/form/FieldErrorControls';
import InputControls from '~shared/controls/form/InputControls';
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
			<SelectedContainer key={__('Field Label')}>
				<LabelControls {...props} />
			</SelectedContainer>
			<SelectedContainer key={__('Inputs')}>
				<InputControls {...props}>
					<ContainerContents>
						<DisplayControl
							attributes={props.attributes.style}
							setAttributes={(newStyle) => {
								const style = {
									...props.attributes.style,
									...newStyle,
								};
								props.setAttributes({ style });
							}}
							options={[
								{ label: 'Default', value: 'default' },
								{ label: 'Block', value: 'block' },
								{
									label: 'Inline Block',
									value: 'inline-block',
								},
							]}
						/>
					</ContainerContents>
				</InputControls>
			</SelectedContainer>
			<SelectedContainer key={__('Checkbox Text')}>
				<HelpControls {...props} />
			</SelectedContainer>
			<SelectedContainer key={__('Field Help')}>
				<HelpControls {...props} />
			</SelectedContainer>
			<SelectedContainer key={__('Field Error')}>
				<FieldErrorControls {...props} />
			</SelectedContainer>
		</SelectedContainerControl>
	);
};

export default ElementsControls;
