import {BlockCSSProperties} from '@mindspun/mrblx';

export type Props = {
	clientId: string;
	isSelected: boolean;
	attributes: {
		blockId: string;
		method: string;
		action: string | undefined;
		labelPosition: 'top' | 'inline' | 'none';
		labelStyle: BlockCSSProperties;
		labelStyleError: BlockCSSProperties;
		inputStyle: BlockCSSProperties;
		inputStyleFocus: BlockCSSProperties;
		inputStyleError: BlockCSSProperties;
		fieldErrorStyle: BlockCSSProperties;
		style: BlockCSSProperties;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
};
