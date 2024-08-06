import {ElementsAttributes, Option, OptionWithSelected} from '~shared/types';

export interface Attributes
	extends Pick<
		ElementsAttributes,
		| 'blockId'
		| 'labelPosition'
		| 'labelStyleError'
		| 'labelStyle'
		| 'labelRequiredIndicator'
		| 'labelStyleRequiredIndicator'
		| 'inputStyle'
		| 'inputStyleError'
		| 'inputStyleFocus'
		| 'optionTextStyle'
		| 'optionTextErrorStyle'
		| 'helpStyle'
		| 'fieldErrorStyle'
		| 'style'
	> {
	label: string;
	name: string | undefined;
	value: string | undefined;
	help: string | undefined;
	optionText: string | undefined;
	required: boolean;
	checked: boolean;
	autoFocus: boolean | undefined;
}

export type Props = {
	clientId: string;
	isSelected: boolean;
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
	context: {
		['mindspun/formBlockId']: string | undefined;
		['mindspun/labelPosition']: string | undefined;
		['mindspun/labelRequiredIndicator']: string | undefined;
	};
};
