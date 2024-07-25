import { Props } from '../types';
import { InspectorControls } from '@wordpress/block-editor';
import { layout, keyboard, tag, category } from '@wordpress/icons';

import { TabbedControl, TabbedContainer } from '@mindspun/mrblx';

import GeneralControls from './GeneralControls';

import { __ } from '@wordpress/i18n';
import ElementsControls from './ElementsControls';

const Controls = (
	props: Props & {
		onMouseEnter?: () => void;
		onMouseLeave?: () => void;
	}
) => {
	return (
		<InspectorControls>
			<div
				className={'wp-block-mindspun-form--controls'}
				onMouseEnter={props.onMouseEnter}
				onMouseLeave={props.onMouseLeave}
			>
				<TabbedControl>
					<TabbedContainer key={__('General')} icon={layout}>
						<GeneralControls {...props} />
					</TabbedContainer>
					<TabbedContainer key={__('Elements')} icon={category}>
						<ElementsControls {...props} />
					</TabbedContainer>
				</TabbedControl>
			</div>
		</InspectorControls>
	);
};

export default Controls;
