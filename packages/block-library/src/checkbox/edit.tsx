import { RichText } from '@wordpress/block-editor';
import { useBlockPropsWithId } from '@mindspun/mrblx';

import { useRequiredIndicator } from '~shared/hooks/useFieldEdit';

import EditorStyles from '~shared/components/EditorStyles';

import './editor.scss';
import metadata from './block.json';
import type { Props } from './types';
import Controls from './controls/Controls';
import { getClassName } from './utils';
import { useState } from '@wordpress/element';
import { formInvalidate } from '~shared/utils';
import { __ } from '@wordpress/i18n';
import { useEvent } from '~shared/hooks/useEvent';
import BaseCheckbox from './BaseCheckbox';

const Edit = (props: Props) => {
	const [error, setError] = useState<string | null>(null);
	useRequiredIndicator(props);

	const blockProps = useBlockPropsWithId(props, {
		className: getClassName(props),
	});

	const submitEventHandler = (event: Event) => {
		const form = (event as unknown as { detail: any }).detail;
		if (form) {
			if (props.attributes.required && !props.attributes.checked) {
				formInvalidate(form);
				setError(__('Required'));
			} else {
				setError(null);
			}
		}
	};

	useEvent('mrblx.submit', submitEventHandler);
	useEvent('reset', () => {
		setError(null);
	});

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
				'optionContentStyle',
				'optionContentErrorStyle',
				'helpStyle',
				'fieldErrorStyle',
			]}
		>
			<Controls {...props} />
			<div {...blockProps}>
				<BaseCheckbox
					checked={props.attributes.checked}
					attributes={props.attributes}
					disabled={true}
					fieldError={error}
				>
					<RichText
						tagName="span"
						identifier="content"
						value={
							props.attributes.content
								? props.attributes.content
								: ''
						}
						onChange={(content) => props.setAttributes({ content })}
					/>
				</BaseCheckbox>
			</div>
		</EditorStyles>
	);
};

export default Edit;
