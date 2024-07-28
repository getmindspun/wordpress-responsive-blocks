import { ElementsAttributes, Option } from '~shared/types';

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
	name: string | null | undefined;
	options: Option[];
	help: string | undefined;
	required: boolean;
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
