import { BlockCSSProperties, Media } from '@mindspun/wpx';

export type Props = {
	attributes: {
		blockId: string;
		media: Media;
		style: BlockCSSProperties;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
};
