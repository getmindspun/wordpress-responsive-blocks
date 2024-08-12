import type {
    ElementsAttributes,
    LabelPosition,
    Validation,
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
        | 'textAreaStyle'
        | 'textAreaStyleError'
        | 'textAreaStyleFocus'
        | 'helpStyle'
        | 'fieldErrorStyle'
        | 'style'
    > {
    inputSize: number;
    label: string;
    name: string | null | undefined;
    autoComplete?: string | null | undefined;
    autoFocus?: boolean;
    spellCheck?: boolean;
    autoCapitalize?: string | null | undefined;
    help: string | undefined;
    validation: Validation;
    rows: number | undefined;
    cols: number | undefined;
    required?: boolean;
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
