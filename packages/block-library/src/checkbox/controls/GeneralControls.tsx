import { CheckboxControl, TextControl } from '@wordpress/components';
import { BaseControls, ContainerContents } from '@mindspun/mrblx';

import RequiredControl from '~shared/controls/form/RequiredControl';

import { Props } from '../types';
import { __ } from '@wordpress/i18n';

const GeneralControls = (props: Props) => {
	return (
		<ContainerContents>
			<TextControl
				label={'Field Label'}
				value={props.attributes.label}
				onChange={(label) => props.setAttributes({ label })}
			/>
			<TextControl
				label={'Help'}
				value={props.attributes.help ? props.attributes.help : ''}
				onChange={(help) =>
					props.setAttributes({
						help: help ? help : undefined,
					})
				}
			/>
			<TextControl
				label={'Name'}
				value={props.attributes.name ? props.attributes.name : ''}
				onChange={(name) =>
					props.setAttributes({
						name: name ? name : undefined,
					})
				}
			/>
			<RequiredControl
				required={props.attributes.required}
				setRequired={(required) => {
					props.setAttributes({ required });
				}}
			/>
			<CheckboxControl
				label={__('Checked')}
				checked={props.attributes.checked}
				onChange={(checked) => {
					props.setAttributes({ checked });
				}}
			/>
			<hr />
			<BaseControls
				attributes={props.attributes.style}
				setAttributes={(style) => {
					props.setAttributes({
						style: { ...props.attributes.style, ...style },
					});
				}}
				options={{
					padding: { responsive: true },
					margin: { responsive: true },
				}}
			/>
		</ContainerContents>
	);
};

export default GeneralControls;
