import { BlockCSSProperties, Link } from '@mindspun/mrblx';

type TagAttributes = {
	colspan?: number;
	rowspan?: number;
};

export type Props = {
	attributes: {
		blockId: string;
		tagName: string;
		tagAttrs: TagAttributes;
		style: BlockCSSProperties;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
};
