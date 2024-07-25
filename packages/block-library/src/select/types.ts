import {BlockCSSProperties} from '@mindspun/mrblx';

import {LabelPosition, Option} from '~shared/types';

export interface Attributes {
    blockId: string;
    label: string;
    name: string | null | undefined;
    autoComplete: string | null | undefined;
    autoFocus: boolean;
    options: Option[];
    help: string | undefined;
    required: boolean;
    labelPosition: LabelPosition;
    labelRequiredIndicator: string | undefined;
    labelStyle: BlockCSSProperties;
    labelStyleError: BlockCSSProperties;
    labelStyleRequiredIndicator: BlockCSSProperties;
    selectStyle: BlockCSSProperties;
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