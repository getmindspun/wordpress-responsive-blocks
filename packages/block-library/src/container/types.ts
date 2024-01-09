import {BlockCSSProperties, Link} from '@mindspun/wpx';

export type Props = {
	attributes: {
		blockId: string,
		style: BlockCSSProperties,
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
