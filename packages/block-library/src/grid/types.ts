import { BlockCSSProperties } from '@mindspun/wpx';

export type Props = {
	clientId: string;
	attributes: {
		blockId: string;
		style: BlockCSSProperties;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
};
