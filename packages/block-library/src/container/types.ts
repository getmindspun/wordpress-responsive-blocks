import {BlockCSSProperties} from '@mindspun/wpx';

export type Props = {
	attributes: {
		blockId: string,
		link?: string | null | undefined,
		target?: '_self'|'_blank'|undefined,
		style: BlockCSSProperties,
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
