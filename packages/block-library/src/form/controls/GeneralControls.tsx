import { SelectControl, TextControl } from '@wordpress/components';

import { BaseControls, ContainerContents } from '@mindspun/mrblx';
import { Props } from '../types';

export const methodOptions = [
	{ value: 'get', label: 'get' },
	{ value: 'post', label: 'post' },
	{ value: 'dialog', label: 'dialog' },
];

export const enctypeOptions = [
	{ value: 'default', label: 'Default' },
	{ value: 'multipart/form-data', label: 'multipart/form-data' },
	{ value: 'application/json', label: 'application/json' },
	{
		value: 'application/x-www-form-urlencoded',
		label: 'application/x-www-form-urlencoded',
	},
	{ value: 'text/plain', label: 'text/plain' },
];

const GeneralControls = (props: Props) => {
	return (
		<>
			<ContainerContents>
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
						border: { responsive: true },
					}}
				>
					<SelectControl
						label={'Method'}
						value={props.attributes.method}
						onChange={(method) => props.setAttributes({ method })}
						options={methodOptions}
					/>
					<TextControl
						label={'Action'}
						value={
							props.attributes.action
								? props.attributes.action
								: ''
						}
						onChange={(action) => {
							props.setAttributes({
								action: action ? action : undefined,
							});
						}}
					/>
					<SelectControl
						label={'Encoding'}
						value={
							props.attributes.encType
								? props.attributes.encType
								: 'default'
						}
						onChange={(value) =>
							props.setAttributes({
								encType:
									value !== 'default'
										? (value as Props['attributes']['encType'])
										: undefined,
							})
						}
						options={enctypeOptions}
					/>
				</BaseControls>
			</ContainerContents>
		</>
	);
};

export default GeneralControls;
