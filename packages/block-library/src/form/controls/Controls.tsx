import { Props } from '../types';
import {
	InspectorAdvancedControls,
	InspectorControls,
} from '@wordpress/block-editor';
import { layout, category } from '@wordpress/icons';

import { TabbedControl, TabbedContainer } from '@mindspun/mrblx';

import GeneralControls from './GeneralControls';

import { __ } from '@wordpress/i18n';
import ElementsControls from './ElementsControls';
import { Button } from '@wordpress/components';

const Controls = (
	props: Props & {
		form: HTMLFormElement | null;
	}
) => {
	function onSubmit() {
		if (props.form) {
			const customEvent = new CustomEvent('mrblx.submit', {
				detail: props.form,
			});
			dispatchEvent(customEvent);
		}
	}

	function onReset() {
		props.form?.reset();
	}

	return (
		<>
			<InspectorControls>
				<div className={'wp-block-mindspun-form--controls'}>
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
			<InspectorAdvancedControls>
				<div className={'wp-block-mindspun-form--controls-adv'}>
					<Button variant={'primary'} onClick={onSubmit}>
						{__('Submit')}
					</Button>
					<Button variant={'secondary'} onClick={onReset}>
						{__('Reset')}
					</Button>
				</div>
			</InspectorAdvancedControls>
		</>
	);
};

export default Controls;
