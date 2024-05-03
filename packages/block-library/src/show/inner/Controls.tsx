import {__} from '@wordpress/i18n';
import {TextControl} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

import { ContainerContents} from '@mindspun/mrblx';

import { Props } from './types';

const Controls = (props: Props) => {
	return (
		<InspectorControls>
			<div className={'wp-block-mindspun-tab--controls'}>
				<ContainerContents>
					<div className="mrblx--tab-controls">
						<TextControl
							label={__('Event Target')}
							value={props.attributes.target ? props.attributes.target : ''}
							onChange={(target) => {
								props.setAttributes({ target })
							}}
							help={__(`The custom event target to show this block.  If not specified, the target defaults to the block ID: mrblx-${props.attributes.blockId}.`)}
						/>
					</div>
				</ContainerContents>
			</div>
		</InspectorControls>
	);
};

export default Controls;
