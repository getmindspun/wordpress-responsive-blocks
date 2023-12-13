import {BlockCSSProperties} from '@mindspun/wpx';

type ButtonVariant = 'primary'|'secondary'|'tertiary'|'link';

export type Props = {
	attributes: {
		blockId: string,
		variant: string,
		text: string,
		href?: string,
		target?: '_self'|'_blank',
		style: BlockCSSProperties
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
