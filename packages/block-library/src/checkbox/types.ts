import {ElementsAttributes, LabelPosition} from '~shared/types';

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
        | 'optionContentStyle'
        | 'optionContentErrorStyle'
        | 'helpStyle'
        | 'fieldErrorStyle'
        | 'style'
    > {
    label: string;
    name: string | undefined;
    value: string | undefined;
    help: string | undefined;
    optionContent: string | undefined;
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
        ['mindspun/labelPosition']: LabelPosition | undefined;
        ['mindspun/labelRequiredIndicator']: string | undefined;
    };
};
