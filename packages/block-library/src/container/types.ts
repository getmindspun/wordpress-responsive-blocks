import { BlockCSSProperties, Link } from '@mindspun/mrblx';

export type Props = {
	attributes: {
		blockId: string;
		tagName: string;
		style: BlockCSSProperties;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
};
