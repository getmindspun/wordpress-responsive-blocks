import {BlockCSSProperties, HeadingTag} from '@mindspun/wpx';

export type Props = {
	attributes: {
		blockId: string,
		link?: string | null | undefined,
		style: BlockCSSProperties,
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
