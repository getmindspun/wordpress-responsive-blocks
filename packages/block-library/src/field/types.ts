import {BlockCSSProperties} from '@mindspun/mrblx';

export type InputType = 'text' | 'password' | 'email' | 'date' | 'number' | 'tel' | 'url' | undefined;

export type Validation = {
    type: 'simple' | 'custom' | undefined,
    required: boolean | undefined,
    minLength: number | undefined,
    pattern: string | undefined,
    message: string | undefined,
}

export interface Attributes {
    blockId: string;
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
    labelPosition: 'top' | 'inline' | 'none';
    labelRequiredIndicator: string | null;
    labelStyle: BlockCSSProperties;
    labelStyleError: BlockCSSProperties;
    labelStyleRequiredIndicator: BlockCSSProperties;
    inputStyle: BlockCSSProperties;
    inputStyleFocus: BlockCSSProperties;
    inputStyleError: BlockCSSProperties;
    fieldErrorStyle: BlockCSSProperties;
    style: BlockCSSProperties;
}

export type Props = {
    clientId: string;
    isSelected: boolean;
    attributes: Attributes;
    setAttributes: (attributes: Partial<Attributes>) => void;
    context: {
        ['mindspun/formBlockId']: string | undefined,
        ['mindspun/labelPosition']: string | undefined,
        ['mindspun/labelRequiredIndicator']: string | undefined,
    }
}