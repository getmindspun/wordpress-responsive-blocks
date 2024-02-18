import { BlockCSSProperties, HeadingTag } from '@mindspun/mrblx';

export type Props = {
	attributes: {
		blockId: string;
		tagName: HeadingTag;
		content: string;
		style: BlockCSSProperties;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
};
