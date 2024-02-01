import { CSSProperties } from 'react';

import { Button, ButtonGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './TextAlignControl.scss';

const TextAlignBaseControl = (props: {
	label?: string;
	textAlign: CSSProperties['textAlign'];
	onChange: (textAlign: CSSProperties['textAlign']) => void;
}) => {
	return (
		<ButtonGroup>
			<Button
				key="left"
				icon={'editor-alignleft'}
				label={__('Align left')}
				showTooltip={true}
				isPressed={props.textAlign === 'left'}
				onClick={() => {
					const textAlign =
						props.textAlign !== 'left' ? 'left' : undefined;
					props.onChange(textAlign);
				}}
			/>
			<Button
				key="center"
				icon={'editor-aligncenter'}
				label={__('Align center')}
				showTooltip={true}
				isPressed={props.textAlign === 'center'}
				onClick={() => {
					const textAlign =
						props.textAlign !== 'center' ? 'center' : undefined;
					props.onChange(textAlign);
				}}
			/>
			<Button
				key="right"
				icon={'editor-alignright'}
				label={__('Align right')}
				showTooltip={true}
				isPressed={props.textAlign === 'right'}
				onClick={() => {
					const textAlign =
						props.textAlign !== 'right' ? 'right' : undefined;
					props.onChange(textAlign);
				}}
			/>
		</ButtonGroup>
	);
};

export default TextAlignBaseControl;
