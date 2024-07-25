export type LabelPosition = 'top' | 'inline' | 'none';

export type Option = {
    label: string,
    value: string,
    id?: string;
    disabled?: boolean;
    hidden?: boolean;
};
