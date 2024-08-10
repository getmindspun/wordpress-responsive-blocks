import { InspectorControls } from '@wordpress/block-editor';
import { category, layout } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

import { TabbedContainer, TabbedControl } from '@mindspun/mrblx';

import { Props } from '../types';
import GeneralControls from './GeneralControls';
import ElementsControls from './ElementsControls';

const Controls = (props: Props) => {
	return (
		<InspectorControls>
			<div className={'wp-block-mindspun-textarea--controls'}>
				{props.context['mindspun/formBlockId'] ? (
					<GeneralControls {...props} />
				) : (
					<TabbedControl>
						<TabbedContainer key={__('General')} icon={layout}>
							<GeneralControls {...props} />
						</TabbedContainer>
						<TabbedContainer key={__('Elements')} icon={category}>
							<ElementsControls {...props} />
						</TabbedContainer>
					</TabbedControl>
				)}
			</div>
		</InspectorControls>
	);
};

export default Controls;