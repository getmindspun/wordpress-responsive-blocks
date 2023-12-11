import {BlockCSSProperties} from '@mindspun/wpx';

type ButtonVariant = 'primary'|'secondary'|'tertiary'|'link';

export type Props = {
	attributes: {
		blockId: string,
		variant: string,
		text: string,
		href: string,
		style: BlockCSSProperties
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
