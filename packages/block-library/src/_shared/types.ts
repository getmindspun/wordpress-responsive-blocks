import { BlockCSSProperties } from '@mindspun/mrblx';

export type LabelPosition = 'top' | 'inline' | 'none';

export type Option = {
	label: string;
	value: string;
	id?: string;
	disabled?: boolean;
	hidden?: boolean;
};

export type OptionWithSelected = Option & {
	selected?: boolean;
}

export type ElementsAttributes = {
	blockId: string;
	labelPosition: LabelPosition;
	labelStyle: BlockCSSProperties;
	labelStyleError: BlockCSSProperties;
	labelRequiredIndicator: string | undefined;
	labelStyleRequiredIndicator: BlockCSSProperties;
	inputStyle: BlockCSSProperties;
	inputStyleFocus: BlockCSSProperties;
	inputStyleError: BlockCSSProperties;
	selectStyle: BlockCSSProperties;
	selectStyleFocus: BlockCSSProperties;
	selectStyleError: BlockCSSProperties;
	textAreaStyle: BlockCSSProperties;
	textAreaStyleFocus: BlockCSSProperties;
	textAreaStyleError: BlockCSSProperties;
	helpStyle: BlockCSSProperties;
	fieldErrorStyle: BlockCSSProperties;
	style: BlockCSSProperties;
};
