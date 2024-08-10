import { useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

import { StylePortalClientId, useBlockPropsWithId } from '@mindspun/mrblx';

import './editor.scss';
import type { Props } from './types';

import Controls from './controls/Controls';
import template from './template';

declare global {
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
		<>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.style}
			/>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.labelStyle}
				selector={'label'}
			/>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.labelStyleError}
				selector={'label.is-error'}
			/>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.inputStyle}
				selector={'input'}
			/>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.inputStyleFocus}
				selector={'input:focus-visible'}
			/>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.inputStyleError}
				selector={'input.is-error'}
			/>
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.fieldErrorStyle}
				selector={'.field-error'}
			/>
			<Controls {...props} />
			<form {...innerBlocksProps} noValidate={true} />
		</>
	);
}
