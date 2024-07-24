import {BlockCSSProperties} from '@mindspun/mrblx';
import {LabelPosition} from '~shared/controls/form/LabelControls';

export type Props = {
	clientId: string;
	isSelected: boolean;
	attributes: {
		blockId: string;
		method: string;
		action: string | undefined;
		encType: 'application/form-data' | 'application/x-www-form-urlencoded' | 'application/json' | undefined;
		labelPosition: LabelPosition;
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
