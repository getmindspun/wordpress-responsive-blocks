import {
	ElementsAttributes,
	LabelPosition,
	Option,
	OptionWithSelected,
} from '~shared/types';

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
		| 'helpStyle'
		| 'fieldErrorStyle'
		| 'style'
	> {
	label: string;
	name: string | undefined;
	options: OptionWithSelected[];
	help: string | undefined;
	required: boolean;
}

export type Props = {
	clientId: string;
	isSelected: boolean;
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
	context: {
		['mindspun/labelPosition']: LabelPosition | undefined;
		['mindspun/labelRequiredIndicator']: string | undefined;
	};
};
