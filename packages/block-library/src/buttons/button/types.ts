import { BlockCSSProperties, Link } from '@mindspun/wpx';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link';

export type Props = {
	attributes: {
		blockId: string;
		fullWidth: boolean;
		variant: ButtonVariant;
		text: string;
		link: Link;
		style: BlockCSSProperties;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
};
