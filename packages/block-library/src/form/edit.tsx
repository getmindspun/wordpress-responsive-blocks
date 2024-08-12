import { useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';

import { useBlockPropsWithId } from '@mindspun/mrblx';

import metadata from './block.json';
import './editor.scss';
import type { Props } from './types';

import Controls from './controls/Controls';
import template from './template';
import EditorStyles from '~shared/components/EditorStyles';
import { BlockConfiguration } from '@wordpress/blocks';

declare global {
	// noinspection JSUnusedGlobalSymbols
	interface Window {
		mrblxData: {
			rest_url: string;
		};
	}
}

export default function Edit(props: Props) {
	const blockProps = useBlockPropsWithId(props);
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template,
	});
	const ref = useRef<HTMLFormElement | null>(null);

	useEffect(() => {
		if (
			window.mrblxData?.rest_url &&
			props.attributes.action === null &&
			props.attributes.encType === null
		) {
			const action = `${window.mrblxData.rest_url}/form`;
			props.setAttributes({
				action,
				encType: 'application/json',
				method: 'POST',
			});
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<EditorStyles
			{...props}
			metadata={metadata}
			keys={[
				'style',
				'labelStyle',
				'labelStyleRequiredIndicator',
				'labelStyleError',
				'inputStyle',
				'inputStyleFocus',
				'inputStyleError',
				'selectStyle',
				'selectStyleError',
				'selectStyleFocus',
				'textAreaStyle',
				'textAreaStyleFocus',
				'textAreaStyleError',
				'optionContentStyle',
				'optionContentErrorStyle',
				'helpStyle',
				'fieldErrorStyle',
			]}
		>
			<Controls {...props} form={ref.current} />
			<form {...innerBlocksProps} noValidate={true} ref={ref} />
		</EditorStyles>
	);
}
