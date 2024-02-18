import { BlockCSSProperties } from '@mindspun/mrblx';

export type Props = {
	clientId: string;
	attributes: {
		blockId: string;
		style: BlockCSSProperties;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
};
