import { BlockCSSProperties, Media } from '@mindspun/mrblx';

export type Props = {
	attributes: {
		blockId: string;
		media: Media;
		style: BlockCSSProperties;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
};
