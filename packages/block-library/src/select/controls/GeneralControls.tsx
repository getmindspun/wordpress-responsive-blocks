import { TextControl } from '@wordpress/components';
import { BaseControls, ContainerContents } from '@mindspun/mrblx';

import RequiredControl from '~shared/controls/form/RequiredControl';

import { Props } from '../types';
import EditOptionsControl from './EditOptionsControl';
import MultipleControl from './MutlipleControl';

const GeneralControls = (props: Props) => {
	return (
		<ContainerContents>
			<TextControl
				label={'Label'}
				value={props.attributes.label}
				onChange={(label) => props.setAttributes({ label })}
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
			<TextControl
				label={'Help'}
				value={props.attributes.help ? props.attributes.help : ''}
				onChange={(help) =>
					props.setAttributes({
						help: help ? help : undefined,
					})
				}
			/>
			<RequiredControl
				required={props.attributes.required}
				setRequired={(required) => {
					props.setAttributes({ required });
				}}
			/>
			<MultipleControl
				multiple={props.attributes.multiple}
				setMultiple={(multiple) => {
					props.setAttributes({ multiple });
				}}
			/>
			<hr />
			<EditOptionsControl
				options={props.attributes.options}
				setOptions={(options) => props.setAttributes({ options })}
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
