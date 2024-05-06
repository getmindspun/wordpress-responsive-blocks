import { BlockCSSProperties, Link } from '@mindspun/mrblx';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link';

export type CustomEvent = {
	type?: string;
	detail?: string | null;
};

export type Props = {
	attributes: {
		blockId: string;
		fullWidth: boolean;
		variant: ButtonVariant;
		text: string;
		link: Link;
		customEvent: CustomEvent;
		style: BlockCSSProperties;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
};
