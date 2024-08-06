import { InspectorControls } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

import { ContainerContents } from '@mindspun/mrblx';

import { Props } from './types';

const Controls = (props: Props) => {
	return (
		<InspectorControls>
			<div className={'wp-block-mindspun-hidden--controls'}>
				<ContainerContents>
					<TextControl
						label={'Name'}
						value={
							props.attributes.name ? props.attributes.name : ''
						}
						onChange={(name) =>
							props.setAttributes({
								name: name ? name : undefined,
							})
						}
					/>
				</ContainerContents>
				<ContainerContents>
					<TextControl
						label={'Value'}
						value={
							props.attributes.value ? props.attributes.value : ''
						}
						onChange={(value) =>
							props.setAttributes({
								value: value ? value : undefined,
							})
						}
					/>
				</ContainerContents>
			</div>
		</InspectorControls>
	);
};

export default Controls;
