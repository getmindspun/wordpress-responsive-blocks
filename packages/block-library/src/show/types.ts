import { BlockCSSProperties } from "@mindspun/mrblx";

export type Props = {
	clientId: string;
	isSelected: boolean;
	attributes: {
		blockId: string
		transition: string;
		defaultBlockId: string|null;
		style: BlockCSSProperties;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
};
