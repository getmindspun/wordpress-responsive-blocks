import { BlockCSSProperties } from '@mindspun/mrblx';
import { ElementsAttributes, LabelPosition } from '~shared/types';

export type InputType =
	| 'text'
	| 'password'
	| 'email'
	| 'date'
	| 'number'
	| 'tel'
	| 'url'
	| undefined;

export type Validation = {
	type: 'simple' | 'custom' | undefined;
	required: boolean | undefined;
	minLength: number | undefined;
	pattern: string | undefined;
	message: string | undefined;
};

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
		| 'fieldErrorStyle'
		| 'style'
	> {
	inputSize: number;
	label: string;
	name: string | null | undefined;
	type: InputType;
	autoComplete?: string | null | undefined;
	autoFocus?: boolean;
	spellCheck?: boolean;
	autoCapitalize?: string | null | undefined;
	help: string | undefined;
	validation: Validation;
}

export type Props = {
	clientId: string;
	isSelected: boolean;
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
	context: {
		['mindspun/formBlockId']: string | undefined;
		['mindspun/labelPosition']: LabelPosition | undefined;
		['mindspun/labelRequiredIndicator']: string | undefined;
	};
};
