import { ElementsAttributes, LabelPosition, Option } from '~shared/types';

export interface Attributes
	extends Pick<
		ElementsAttributes,
		| 'blockId'
		| 'labelPosition'
		| 'labelStyleError'
		| 'labelStyle'
		| 'labelRequiredIndicator'
		| 'labelStyleRequiredIndicator'
		| 'selectStyle'
		| 'selectStyleError'
		| 'selectStyleFocus'
		| 'helpStyle'
		| 'fieldErrorStyle'
		| 'style'
	> {
	label: string;
	name: string | null | undefined;
	autoComplete: string | null | undefined;
	autoFocus: boolean;
	options: Option[];
	help: string | undefined;
	required: boolean;
	multiple: boolean;
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
