import {
	__experimentalNumberControl as NumberControl,
	TextControl,
} from '@wordpress/components';

import { BaseControls, ContainerContents } from '@mindspun/mrblx';

import { Props } from '../types';
import ValidationControl from './ValidationControl';

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

			<hr />
			<ValidationControl
				validation={props.attributes.validation}
				setValidation={(validation) => {
					props.setAttributes({
						validation: {
							...props.attributes.validation,
							...validation,
						},
					});
				}}
			/>
			<NumberControl
				label={'Rows'}
				labelPosition={'top'}
				isShiftStepEnabled={false}
				onChange={(value) => {
					const rows = value ? parseInt(value) : undefined;
					props.setAttributes({ rows });
				}}
				value={props.attributes.rows}
			/>
			<NumberControl
				label={'Columns'}
				labelPosition={'top'}
				isShiftStepEnabled={false}
				onChange={(value) => {
					const cols = value ? parseInt(value) : undefined;
					props.setAttributes({ cols });
				}}
				value={props.attributes.cols}
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
