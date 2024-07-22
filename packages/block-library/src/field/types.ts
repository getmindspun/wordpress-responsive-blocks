import {BlockCSSProperties} from '@mindspun/mrblx';

export interface Attributes {
    blockId: string;
    inputSize: number;
    label: string;
    name: string | null | undefined;
    type?: 'text' | 'password' | 'email' | 'date' | 'number' | 'tel' | 'url' | undefined;
    autoComplete?: string | null | undefined;
    autoFocus?: boolean;
    spellCheck?: boolean;
    autoCapitalize?: string | null | undefined;
    labelPosition: 'top' | 'inline' | 'none';
    labelStyle: BlockCSSProperties;
    labelStyleError: BlockCSSProperties;
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
        ['mindspun/formBlockId']: string | undefined
        ['mindspun/labelPosition']: string | undefined
    }
}