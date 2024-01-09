import {BlockCSSProperties} from '@mindspun/wpx';

type ButtonVariant = 'primary'|'secondary'|'tertiary'|'link';

export type Props = {
	attributes: {
		blockId: string,
		fullWidth: boolean,
		variant: string,
		text: string,
		href?: string,
		target?: '_self'|'_blank'|undefined,
		rel: string[];
		style: BlockCSSProperties
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
